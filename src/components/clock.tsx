"use client";

import { useEffect, useState } from "react";

export function Clock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-20 flex w-full select-none items-center px-4 md:fixed md:top-4 md:px-8">
      <a
        href="https://www.google.com/search?q=time"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-semibold text-cream transition-all duration-100 hover:opacity-80"
      >
        <span className="text-base md:text-sm">{time ?? "-"}</span>
      </a>
    </section>
  );
}
