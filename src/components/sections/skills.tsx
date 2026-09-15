import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/rich-text";
import { skillGroups } from "@/lib/data";

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-6">
      <Reveal>
        <SectionHeading>Technical Skills</SectionHeading>
      </Reveal>

      <Reveal>
        <dl className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-[9rem_1fr]">
          {skillGroups.map((group) => (
            <div key={group.label} className="contents">
              <dt className="text-sm font-bold text-white md:text-base">
                {group.label}
              </dt>
              <dd className="text-sm font-semibold text-cream/85 md:text-base">
                {group.items}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
