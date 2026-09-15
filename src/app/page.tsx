import Link from "next/link";
import { Clock } from "@/components/clock";
import { Dock } from "@/components/dock";
import { SceneBackground } from "@/components/scene-background";
import { Intro } from "@/components/sections/intro";

const navLinks = [
  { key: "p", label: "projects", href: "/projects" },
  { key: "e", label: "experience", href: "/experience" },
  { key: "s", label: "skills", href: "/skills" },
  { key: "b", label: "blog", href: "/blog" },
  { key: "h", label: "hackathons", href: "/hackathons" },
];

export default function Home() {
  return (
    <>
      <SceneBackground />
      <Clock />

      <main className="screen screen-hero relative z-10 flex flex-col gap-10">
        <nav className="sticky top-0 z-[100] flex flex-wrap items-center gap-x-6 gap-y-3 py-6 text-base backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-cream/50 transition-colors duration-200 hover:text-cream"
            >
              <span className="mr-1 text-cream/50">[{link.key}]</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <Intro />
      </main>

      <Dock />
    </>
  );
}
