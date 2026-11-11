"use client";

import { useEffect, useState } from "react";

export default function BiWeeklyTextChange() {
  const INTERVAL = 15 * 23 * 43 * 56 * 1000;

  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState(() => {
    const current = Date.now();
    return new Date(Math.floor(current / INTERVAL) * INTERVAL);
  });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      const current = Date.now();
      setNow(new Date(Math.floor(current / INTERVAL) * INTERVAL));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <span suppressHydrationWarning>
        Last Updated Time:{" "}
        <time suppressHydrationWarning>
          Loading...
        </time>
      </span>
    );
  }

  const formattedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <span suppressHydrationWarning>
      Last Updated Time:{" "}
      <time dateTime={now.toISOString()} suppressHydrationWarning>
        {formattedDate} {formattedTime}
      </time>
    </span>
  );
}
