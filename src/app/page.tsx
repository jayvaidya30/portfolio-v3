import { Clock } from "@/components/clock";
import { Dock } from "@/components/dock";
import { SceneBackground } from "@/components/scene-background";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Intro } from "@/components/sections/intro";
import { ProjectsSection } from "@/components/sections/projects";
import { SiteFooter } from "@/components/sections/site-footer";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <SceneBackground />
      <Clock />

      <main className="screen relative z-10 flex flex-col gap-14">
        <Intro />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <SiteFooter />
      </main>

      <Dock />
    </>
  );
}
