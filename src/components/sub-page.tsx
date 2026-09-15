import type { ReactNode } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Clock } from "@/components/clock";
import { Dock } from "@/components/dock";
import { SceneBackground } from "@/components/scene-background";

export function SubPage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <>
      <SceneBackground />
      <Clock />

      <main className="screen relative z-10 flex flex-col gap-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-cream/60 transition-colors hover:text-white"
        >
          <FiArrowLeft className="text-sm" />
          home
        </Link>

        <div className="flex flex-col gap-1.5">
          <h1 className="head-name">{title}</h1>
          {description ? (
            <p className="text-sm font-semibold text-cream/70 md:text-base">
              {description}
            </p>
          ) : null}
        </div>

        {children}
      </main>

      <Dock />
    </>
  );
}
