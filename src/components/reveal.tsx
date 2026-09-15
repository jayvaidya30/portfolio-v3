"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  onMount = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  onMount?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (onMount) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [onMount]);

  if (onMount) {
    return (
      <div
        className={["reveal-mount", className].filter(Boolean).join(" ")}
        style={{ animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      data-shown={shown ? "" : undefined}
      className={["reveal-view", className].filter(Boolean).join(" ")}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
