"use client";

<<<<<<< HEAD
import React from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { ShowDesktopWarning } from "../Toast/ShowDesktopWarning";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.primethic.connectec";
const EMPLOYER_URL = "https://employer.connectec.app/register";
const RECRUITER_URL = "https://recruiter.connectec.app/register";

type GradientButtonProps = {
  text: string;
  link?: string;
  className?: string;
  onClick?: () => void;
};
=======
import { ArrowRight } from "lucide-react";
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d

export const GradientButton = ({
  text,
  link,
<<<<<<< HEAD
  className = "",
  onClick,
}: GradientButtonProps) => {
  const pathname = usePathname() || "";

  const isCandidate =
    pathname.includes("candidate") || link?.includes("candidate");
  const isRecruiter =
    pathname.includes("recruiter") || link?.includes("recruiter");
  const isEmployer =
    pathname.includes("employer") ||
    link?.includes("employer") ||
    (!isCandidate && !isRecruiter);

  const showDesktopWarning = () => {
    toast.custom((t) => <ShowDesktopWarning toastId={t} />);
  };

  const desktopUrl = isCandidate
    ? PLAY_STORE_URL
    : isRecruiter
      ? link && link.trim() !== ""
        ? link
        : RECRUITER_URL
      : link && link.trim() !== ""
        ? link
        : EMPLOYER_URL;

  const buttonStyle = `group flex justify-center cursor-pointer items-center bg-[linear-gradient(203.87deg,#0075FF_15.37%,#004BA6_84.69%)] font-bold text-white text-xl w-fit h-btn-h rounded-md px-lg transition-all duration-500 ease-out hover:shadow-[0_8px_25px_rgba(0,117,255,0.35)] hover:brightness-105 ${className}`;

  const renderArrow = () => (
    <span className="inline-flex max-w-0 -translate-x-4 items-center overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-w-8 group-hover:ml-2 group-hover:translate-x-0 group-hover:opacity-100">
      <ArrowRight className="size-iconsize-sm shrink-0" />
    </span>
  );

  return (
    <>
      {/* Mobile: Candidate -> Play Store */}
      {isCandidate && (
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          id={text}
          onClick={onClick}
          className={`md:hidden ${buttonStyle}`}
        >
          <span className="whitespace-nowrap">{text}</span>
          {renderArrow()}
        </a>
      )}

      {/* Mobile: Employer & Recruiter -> Show Desktop Warning */}
      {!isCandidate && (isEmployer || isRecruiter) && (
        <button
          type="button"
          onClick={() => {
            showDesktopWarning();
            onClick?.();
          }}
          id={text}
          className={`md:hidden ${buttonStyle}`}
        >
          <span className="whitespace-nowrap">{text}</span>
          {renderArrow()}
        </button>
      )}

      {/* Desktop: Candidate -> Play Store, Employer/Recruiter -> Dashboard in new tab */}
      <a
        href={desktopUrl}
        target="_blank"
        rel="noopener noreferrer"
        id={text}
        onClick={onClick}
        className={`hidden md:flex ${buttonStyle}`}
      >
        <span className="whitespace-nowrap">{text}</span>
        {renderArrow()}
      </a>
=======
}: {
  text: string;
  link: string;
}) => {

  return (
    <>
      <button   onClick={() => {
    window.open(link, "_blank", "noopener,noreferrer");
  }}   id={text} className="group gap-xs flex justify-center cursor-pointer items-center bg-[linear-gradient(203.87deg,#0075FF_15.37%,#004BA6_84.69%)] cursor-pointer font-bold text-white text-xl w-fit h-btn-h rounded-md px-lg">
       <span>{text}</span> 
         <ArrowRight
                          className=" 
                           size-iconsize-sm
                            opacity-0
                            -translate-x-2
                            transition-all
                            duration-300
                            group-hover:translate-x-0
                            group-hover:opacity-100
                          "
                        />
      </button>
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
    </>
  );
};
