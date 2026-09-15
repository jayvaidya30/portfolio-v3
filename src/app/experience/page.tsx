import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { ExperienceSection } from "@/components/sections/experience";

export const metadata: Metadata = {
  title: "Experience | Jay Vaidya",
  description:
    "Work experience of Jay Vaidya, full stack engineering at Kharedo.",
};

export default function ExperiencePage() {
  return (
    <SubPage
      title="Experience"
      description="Where I've worked and what I've shipped."
    >
      <ExperienceSection />
    </SubPage>
  );
}
