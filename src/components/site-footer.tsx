"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

export function SiteFooter() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative z-10 flex items-center justify-center gap-2.5 pt-16 pb-6 text-xs text-soft">
      <span>{profile.location}</span>
      <span className="h-0.5 w-0.5 rounded-full bg-soft/60" />
      <span className="font-mono tabular-nums">{time ?? "—"} IST</span>
    </footer>
  );
}
