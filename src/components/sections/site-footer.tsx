import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-5 pb-4">
      <div className="border-t border-white/15" />
      <p className="text-center text-xs font-semibold italic text-cream md:text-sm">
        &ldquo;Make it work, make it right, make it fast.&rdquo;
        <br />— Kent Beck
      </p>
      <p className="text-center text-[0.7rem] font-medium text-cream/50">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js, Tailwind CSS
        &amp; shadcn/ui
      </p>
    </footer>
  );
}
