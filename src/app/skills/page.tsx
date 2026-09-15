import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { SkillsSection } from "@/components/sections/skills";

export const metadata: Metadata = {
  title: "Skills — Jay Vaidya",
  description:
    "Languages, frameworks, and tools Jay Vaidya works with — TypeScript, React, Next.js, Node.js, AWS, Docker, and more.",
};

export default function SkillsPage() {
  return (
    <SubPage
      title="Skills"
      description="The languages, frameworks, and tools I reach for when building things."
    >
      <SkillsSection />
    </SubPage>
  );
}
