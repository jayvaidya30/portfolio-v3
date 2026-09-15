import Link from "next/link";
import { Clock } from "@/components/clock";
import { Dock } from "@/components/dock";
import { SceneBackground } from "@/components/scene-background";
import { Intro } from "@/components/sections/intro";

const navLinks = [
  { label: "projects", href: "/projects" },
  { label: "experience", href: "/experience" },
  { label: "skills", href: "/skills" },
  { label: "blog", href: "/blog" },
  { label: "education", href: "/education" },
];

export default function Home() {
  return (
    <>
      <SceneBackground />
      <Clock />

      <main className="screen relative z-10 flex flex-col gap-10">
        <Intro />

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-base font-bold text-cream/60 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </main>

      <Dock />
    </>
  );
}
