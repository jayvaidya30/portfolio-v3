import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { RichText, SectionHeading } from "@/components/rich-text";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section className="flex flex-col gap-6">
      <Reveal>
        <SectionHeading>Projects</SectionHeading>
      </Reveal>

      {projects.map((project, index) => (
        <Reveal key={project.name} delay={Math.min(index * 0.05, 0.15)}>
          <article className="flex flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="flex items-center gap-1 text-base font-bold text-white md:text-lg">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} link`}
                    className="inline-flex items-center gap-1 transition-colors hover:text-cream"
                  >
                    {project.name}
                    <FiArrowUpRight className="text-sm text-cream/60 md:text-base" />
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="text-[0.7rem] font-medium tracking-wide text-cream/55 md:text-xs">
                {project.stack}
              </span>
            </div>

            <ul className="mt-2.5 flex flex-col gap-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm font-semibold text-cream/90 md:text-base"
                >
                  <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-cream/50" />
                  <span>
                    <RichText text={highlight} />
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      ))}
    </section>
  );
}
