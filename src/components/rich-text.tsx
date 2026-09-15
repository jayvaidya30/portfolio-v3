import type { ReactNode } from "react";

export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return (
    <>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="border-t border-white/15" />
      <h2 className="mt-5 text-base font-bold text-cream md:text-lg">{children}</h2>
    </div>
  );
}

export function InlineChip({
  letter,
  gradient,
}: {
  letter: string;
  gradient: string;
}) {
  return (
    <span
      className="mr-1 inline-flex h-[1.1em] w-[1.1em] translate-y-[0.12em] items-center justify-center rounded text-[0.6em] font-bold text-white"
      style={{ backgroundImage: gradient }}
    >
      {letter}
    </span>
  );
}

export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium text-gray-300 underline transition-colors hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}
