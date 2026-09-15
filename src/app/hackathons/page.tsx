import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { HackathonsSection } from "@/components/sections/hackathons";

export const metadata: Metadata = {
  title: "Hackathons | Jay Vaidya",
  description:
    "Hackathons and education: RIFT'26, Gemini 3 / Google DeepMind, and BCS at Savitribai Phule Pune University.",
};

export default function HackathonsPage() {
  return (
    <SubPage
      title="Hackathons"
      description="What I've hacked on and what I'm studying."
    >
      <HackathonsSection />
    </SubPage>
  );
}
