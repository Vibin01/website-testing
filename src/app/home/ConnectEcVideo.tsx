"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type Hls from "hls.js";
import { Loader2, Play, RotateCcw, Volume2, VolumeX } from "lucide-react";

const HLS_SRC = "/video/hls/master.m3u8";
const FALLBACK_MP4_SRC = "/video/connect-ec-video.mp4";

export default function ConnectEcVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);

  // Refs to coordinate viewport visibility, manual pause, and HLS fallback cleanly
  const isInViewRef = useRef(false);
  const userPausedRef = useRef(false);
  const programmaticPauseRef = useRef(false);
  const hasStartedHlsLoadRef = useRef(false);
  const usedMp4FallbackRef = useRef(false);

  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [autoPlayPending, setAutoPlayPending] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  // 1. Wait until ALL remaining sections & assets of the page finish loading
  //    before loading hls.js and streaming the adaptive HLS segments.
  useEffect(() => {
    let cancelled = false;
    let idleId: number | null = null;
    let timerId: ReturnType<typeof setTimeout> | null = null;

    const scheduleVideoDownload = () => {
      if (cancelled) return;

      const win = window as Window & {
        requestIdleCallback?: (
          cb: () => void,
          opts?: { timeout: number }
        ) => number;
        cancelIdleCallback?: (id: number) => void;
      };

      if (typeof win.requestIdleCallback === "function") {
        idleId = win.requestIdleCallback(
          () => {
            if (!cancelled) setShouldLoadVideo(true);
          },
          { timeout: 1500 }
        );
      } else {
        timerId = setTimeout(() => {
          if (!cancelled) setShouldLoadVideo(true);
        }, 300);
      }
    };

    if (document.readyState === "complete") {
      scheduleVideoDownload();
    } else {
      window.addEventListener("load", scheduleVideoDownload, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", scheduleVideoDownload);
      const win = window as Window & {
        cancelIdleCallback?: (id: number) => void;
      };
      if (idleId !== null && typeof win.cancelIdleCallback === "function") {
        win.cancelIdleCallback(idleId);
      }
      if (timerId !== null) {
        clearTimeout(timerId);
      }
    };
  }, []);

  // 2. Attach adaptive HLS stream (Safari native HLS -> hls.js with worker fallback -> MP4 fallback)
  useEffect(() => {
    if (!shouldLoadVideo) return;

    let cancelled = false;
    let localHls: Hls | null = null;
    const video = videoRef.current;
    if (!video) return;

    usedMp4FallbackRef.current = false;

    const nav = navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
        downlink?: number;
      };
    };

    const effectiveType = nav.connection?.effectiveType;
    const downlinkMbps = nav.connection?.downlink;

    const isDataSaverOr2G = Boolean(
      nav.connection?.saveData ||
      effectiveType === "2g" ||
      effectiveType === "slow-2g"
    );

    const isSlowNetwork = Boolean(
      isDataSaverOr2G ||
      effectiveType === "3g" ||
      (typeof downlinkMbps === "number" && downlinkMbps > 0 && downlinkMbps < 2)
    );

    const initialBandwidthEstimate = isSlowNetwork
      ? 400_000 // Start immediately on 360p (~86 KB first chunk) for 3G/2G
      : typeof downlinkMbps === "number" && downlinkMbps < 5
        ? 1_500_000 // Start on 720p for moderate connections
        : 4_000_000; // Start on 1080p for fast Wi-Fi/5G

    const attachMp4Fallback = (targetVideo: HTMLVideoElement) => {
      if (usedMp4FallbackRef.current) {
        setAutoPlayPending(false);
        setLoadError(true);
        return;
      }
      usedMp4FallbackRef.current = true;
      targetVideo.src = FALLBACK_MP4_SRC;
      targetVideo.preload = isDataSaverOr2G ? "metadata" : "auto";
      targetVideo.load();
    };

    const setupVideoSource = async () => {
      const targetVideo = videoRef.current;
      if (!targetVideo || cancelled) return;

      // Path A: Native HLS (Safari macOS, iOS Safari, iOS WebKit browsers)
      if (targetVideo.canPlayType("application/vnd.apple.mpegurl")) {
        targetVideo.preload = isDataSaverOr2G ? "metadata" : "auto";
        targetVideo.src = HLS_SRC;
        targetVideo.load();
        return;
      }

      // Path B: hls.js Adaptive Bitrate for Chrome, Edge, Firefox, Android
      try {
        const { default: HlsClass } = await import("hls.js");
        if (cancelled || !videoRef.current) return;

        if (HlsClass.isSupported()) {
          const baseConfig = {
            autoStartLoad: !isDataSaverOr2G,
            startLevel: -1,
            capLevelToPlayerSize: true,
            abrEwmaDefaultEstimate: initialBandwidthEstimate,
            maxBufferLength: 24,
            maxMaxBufferLength: 48,
            backBufferLength: 24,
            fragLoadingMaxRetry: 4,
            manifestLoadingMaxRetry: 4,
          };

          let hls: Hls;
          try {
            hls = new HlsClass({
              ...baseConfig,
              enableWorker: typeof Worker !== "undefined",
            });
          } catch {
            // Fallback without Blob Web Worker if CSP blocks worker-src blob:
            hls = new HlsClass({
              ...baseConfig,
              enableWorker: false,
            });
          }

          localHls = hls;
          hlsRef.current = hls;
          hasStartedHlsLoadRef.current = !isDataSaverOr2G;

          let networkRetries = 0;
          let mediaRetries = 0;

          hls.on(HlsClass.Events.ERROR, (_event, data) => {
            if (!data.fatal || cancelled) return;

            if (
              data.type === HlsClass.ErrorTypes.NETWORK_ERROR &&
              networkRetries < 2
            ) {
              networkRetries += 1;
              hls.startLoad();
              return;
            }

            if (
              data.type === HlsClass.ErrorTypes.MEDIA_ERROR &&
              mediaRetries < 2
            ) {
              mediaRetries += 1;
              hls.recoverMediaError();
              return;
            }

            // Final fallback to direct MP4 if HLS cannot recover
            hls.destroy();
            localHls = null;
            hlsRef.current = null;
            if (videoRef.current) {
              attachMp4Fallback(videoRef.current);
            }
          });

          hls.loadSource(HLS_SRC);
          hls.attachMedia(videoRef.current);
          return;
        }
      } catch {
        // Fall through to MP4 fallback if dynamic import or MSE fails
      }

      // Path C: Legacy / non-MSE browser fallback
      if (!cancelled && videoRef.current) {
        attachMp4Fallback(videoRef.current);
      }
    };

    setupVideoSource();

    return () => {
      cancelled = true;
      hasStartedHlsLoadRef.current = false;
      if (localHls) {
        localHls.destroy();
        localHls = null;
      }
      hlsRef.current = null;
      if (video) {
        video.removeAttribute("src");
        video.load();
      }
    };
  }, [shouldLoadVideo, retryKey]);

  // 3. Track whether the video container is currently visible inside the screen
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      isInViewRef.current = true;
      setIsInView(true);
      return;
    }

    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
        isInViewRef.current = visible;
        setIsInView(visible);
      },
      {
        threshold: [0, 0.35, 0.5],
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 4. Run video ONLY while inside the screen (play when visible, pause when scrolled away or tab hidden)
  useEffect(() => {
    const syncPlaybackWithVisibility = () => {
      const video = videoRef.current;
      if (!video) return;

      const canRun = isInView && !document.hidden;

      if (canRun && hlsRef.current && !hasStartedHlsLoadRef.current) {
        hasStartedHlsLoadRef.current = true;
        hlsRef.current.startLoad();
      }

      if (!isVideoReady) return;

      if (canRun) {
        if (!userPausedRef.current && video.paused) {
          video.play().catch(() => {
            if (!video.muted) {
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => { });
            }
          });
        }
      } else if (!video.paused) {
        programmaticPauseRef.current = true;
        video.pause();
      }
    };

    syncPlaybackWithVisibility();

    document.addEventListener("visibilitychange", syncPlaybackWithVisibility);
    return () => {
      document.removeEventListener(
        "visibilitychange",
        syncPlaybackWithVisibility
      );
    };
  }, [isInView, isVideoReady]);

  // 5. If the user clicked Play before initial segment buffered, start as soon as ready
  useEffect(() => {
    if (isVideoReady && autoPlayPending && videoRef.current) {
      setAutoPlayPending(false);
      userPausedRef.current = false;
      if (isInViewRef.current) {
        videoRef.current.play().catch(() => { });
      }
    }
  }, [isVideoReady, autoPlayPending]);

  const handlePlayTrigger = () => {
    setLoadError(false);
    userPausedRef.current = false;

    if (!shouldLoadVideo) {
      setShouldLoadVideo(true);
      setAutoPlayPending(true);
      return;
    }

    if (hlsRef.current && !hasStartedHlsLoadRef.current) {
      hasStartedHlsLoadRef.current = true;
      hlsRef.current.startLoad();
    }

    if (videoRef.current) {
      if (isVideoReady) {
        videoRef.current.play().catch(() => { });
      } else {
        setAutoPlayPending(true);
      }
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted && video.volume === 0) {
      video.volume = 1;
    }
    setIsMuted(nextMuted);
  };

  const handleVideoError = () => {
    const video = videoRef.current;
    if (video && !usedMp4FallbackRef.current) {
      usedMp4FallbackRef.current = true;
      video.src = FALLBACK_MP4_SRC;
      video.load();
      return;
    }
    setAutoPlayPending(false);
    setIsBuffering(false);
    setLoadError(true);
  };

  const handleRetry = () => {
    setLoadError(false);
    setIsVideoReady(false);
    setIsBuffering(false);
    setShouldLoadVideo(true);
    setAutoPlayPending(true);
    userPausedRef.current = false;
    usedMp4FallbackRef.current = false;
    setRetryKey((prev) => prev + 1);
  };

  return (
    <section className="w-full" aria-label="Connect EC Overview Video">
      <div
        ref={containerRef}
        className="
        my-[5%]
          relative
          mx-auto
          w-full
          max-w-[calc(75vh*16/9)]
          aspect-video
          overflow-hidden
          rounded-lg
          bg-white
          shadow-web-medium
        "
      >
        {/* Deferred Video Element: Not attached during initial page load */}
        {shouldLoadVideo && (
          <video
            key={retryKey}
            ref={videoRef}
            muted={isMuted}
            playsInline
            disablePictureInPicture
            controls
            controlsList="nodownload"
            onLoadedData={() => setIsVideoReady(true)}
            onCanPlay={() => {
              setIsVideoReady(true);
              setIsBuffering(false);
            }}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => setIsBuffering(false)}
            onPlay={() => {
              programmaticPauseRef.current = false;
              userPausedRef.current = false;
              setIsBuffering(false);
            }}
            onPause={() => {
              setIsBuffering(false);
              if (programmaticPauseRef.current) {
                programmaticPauseRef.current = false;
                return;
              }
              if (isInViewRef.current && !document.hidden) {
                userPausedRef.current = true;
              }
            }}
            onVolumeChange={(e) => {
              const target = e.currentTarget;
              setIsMuted(target.muted || target.volume === 0);
            }}
            onError={handleVideoError}
            className="h-full w-full object-contain bg-black"
          />
        )}

        {/* Subtle Buffering Indicator for Slow Networks */}
        {isVideoReady && isBuffering && !loadError && (
          <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-black/65 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white shadow pointer-events-none">
            <Loader2 className="size-3.5 animate-spin" />
            <span>Buffering...</span>
          </div>
        )}

        {/* Quick Unmute / Sound Toggle while video is active */}
        {isVideoReady && !loadError && (
          <button
            type="button"
            onClick={handleToggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
            className="
              absolute
              top-3
              right-3
              z-20
              inline-flex
              items-center
              gap-1.5
              rounded-full
              bg-black/65
              hover:bg-black/80
              backdrop-blur-sm
              px-3
              py-1.5
              text-xs
              font-medium
              text-white
              shadow
              transition-all
              cursor-pointer
            "
          >
            {isMuted ? (
              <>
                <VolumeX className="size-3.5" />
                <span>Unmute</span>
              </>
            ) : (
              <Volume2 className="size-3.5" />
            )}
          </button>
        )}

        {/* Lightweight Branded Placeholder while waiting for page load / first chunk */}
        {!isVideoReady && !loadError && (
          <div
            onClick={handlePlayTrigger}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handlePlayTrigger();
              }
            }}
            aria-label="Play Connect EC overview video"
            className="
              absolute
              inset-0
              z-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              cursor-pointer
              bg-gradient-to-br
              from-[#F2F8FF]
              via-white
              to-[#E6F0FF]
              p-6
              text-center
              transition-opacity
              duration-300
              group
            "
          >
            <Image
              src="/Connect_EC_Logo.svg"
              alt="Connect EC"
              width={180}
              height={40}
              className="h-7 sm:h-9 w-auto opacity-90"
            />

            <div
              className="
                flex
                size-14
                sm:size-16
                items-center
                justify-center
                rounded-full
                bg-[#0668E1]
                text-white
                shadow-lg
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {autoPlayPending ? (
                <Loader2 className="size-7 animate-spin" />
              ) : (
                <Play className="size-7 fill-current ml-0.5" />
              )}
            </div>

            <p className="text-xs sm:text-sm font-medium text-[#4A4A4A]">
              {autoPlayPending
                ? "Loading Connect EC video..."
                : shouldLoadVideo
                  ? "Buffering video in background — click to play"
                  : "Watch Connect EC in Action"}
            </p>
          </div>
        )}

        {/* Error Fallback */}
        {loadError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-[#F2F8FF] p-6 text-center">
            <p className="text-sm font-medium text-[#1B1C17]">
              Unable to load the video right now.
            </p>
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex items-center gap-2 rounded-md bg-[#0668E1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#0557bf] transition-colors cursor-pointer"
            >
              <RotateCcw className="size-4" />
              <span>Retry</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
