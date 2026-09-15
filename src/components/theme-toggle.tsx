"use client";

import { Moon, Sun } from "lucide-react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => void;
};

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";

    const apply = () => {
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // Storage may be unavailable (private mode); theme still applies.
      }
    };

    const doc = document as ViewTransitionDocument;
    if (doc.startViewTransition) {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle fixed top-4 right-4 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-panel text-soft backdrop-blur transition-colors hover:text-ink md:top-6 md:right-6"
    >
      <Sun className="icon-sun h-4 w-4" strokeWidth={2} />
      <Moon className="icon-moon h-4 w-4" strokeWidth={2} />
    </button>
  );
}
