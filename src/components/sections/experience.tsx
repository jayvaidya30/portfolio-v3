import { Reveal } from "@/components/reveal";
import { RichText, SectionHeading } from "@/components/rich-text";
import { experience } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6">
      <Reveal>
        <SectionHeading>Experience</SectionHeading>
      </Reveal>

      {experience.map((job) => (
        <Reveal key={job.company}>
          <article className="flex flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-bold text-white md:text-lg">
                {job.company}
              </h3>
              <span className="text-xs font-medium text-cream/60 md:text-sm">
                {job.period} · {job.location}
              </span>
            </div>
            <p className="text-sm font-semibold text-cream/90 md:text-base">
              {job.role}
            </p>

            <ul className="mt-3 flex flex-col gap-2">
              {job.highlights.map((highlight, index) => (
                <li
                  key={index}
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
