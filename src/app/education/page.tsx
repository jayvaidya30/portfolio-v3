import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { EducationSection } from "@/components/sections/education";

export const metadata: Metadata = {
  title: "Education — Jay Vaidya",
  description:
    "Education and hackathons — BCS at Savitribai Phule Pune University, RIFT'26, and Gemini 3 / Google DeepMind.",
};

export default function EducationPage() {
  return (
    <SubPage
      title="Education"
      description="What I'm studying and what I've hacked on."
    >
      <EducationSection />
    </SubPage>
  );
}
