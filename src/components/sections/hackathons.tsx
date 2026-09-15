import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/rich-text";
import { education, hackathons } from "@/lib/data";

export function HackathonsSection() {
  return (
    <section className="flex flex-col gap-6">
      <Reveal>
        <SectionHeading>Hackathons</SectionHeading>
      </Reveal>

      <div className="flex flex-col gap-5">
        {hackathons.map((hackathon) => (
          <Reveal key={hackathon.name}>
            <article className="flex flex-col">
              <h3 className="text-sm font-bold text-white md:text-base">
                {hackathon.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-cream/85 md:text-base">
                {hackathon.detail}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SectionHeading>Education</SectionHeading>
      </Reveal>

      <Reveal>
        <article className="flex flex-col">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-base font-bold text-white md:text-lg">
              {education.school}
            </h3>
            <span className="text-xs font-medium text-cream/60 md:text-sm">
              {education.period}
            </span>
          </div>
          <p className="text-sm font-semibold text-cream/90 md:text-base">
            {education.degree} · {education.detail}
          </p>
          <p className="mt-1 text-xs font-medium text-cream/60 md:text-sm">
            {education.location}
          </p>
        </article>
      </Reveal>
    </section>
  );
}
