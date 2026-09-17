"use client";

import { useEffect, useState } from "react";

export default function BiWeeklyTextChange() {
<<<<<<< HEAD
  const INTERVAL = 15 * 23 * 43 * 56 * 1000;

  const [mounted, setMounted] = useState(false);
=======
  const INTERVAL =  15 * 23 * 43 * 56 * 1000;

>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
  const [now, setNow] = useState(() => {
    const current = Date.now();
    return new Date(Math.floor(current / INTERVAL) * INTERVAL);
  });

  useEffect(() => {
<<<<<<< HEAD
    setMounted(true);
    const timer = setInterval(() => {
      const current = Date.now();
      setNow(new Date(Math.floor(current / INTERVAL) * INTERVAL));
    }, 1000);
=======
    const timer = setInterval(() => {
      const current = Date.now();
      setNow(new Date(Math.floor(current / INTERVAL) * INTERVAL));
    }, 1000); 
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d

    return () => clearInterval(timer);
  }, []);

<<<<<<< HEAD
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

=======
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
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
<<<<<<< HEAD
    <span suppressHydrationWarning>
      Last Updated Time:{" "}
      <time dateTime={now.toISOString()} suppressHydrationWarning>
        {formattedDate} {formattedTime}
      </time>
    </span>
=======
    <>
      Last Updated Time:{" "}
      <time dateTime={now.toISOString()}>
        {formattedDate} {formattedTime}
      </time>
    </>
>>>>>>> 9a490c05fe492c1b6ea227b018957e550718f11d
  );
}
