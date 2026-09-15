import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { ProjectsSection } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Projects — Jay Vaidya",
  description:
    "Things Jay Vaidya has built — realtime collaboration, fraud detection, and client websites.",
};

export default function ProjectsPage() {
  return (
    <SubPage
      title="Projects"
      description="A few things I've designed, built, and shipped."
    >
      <ProjectsSection />
    </SubPage>
  );
}
