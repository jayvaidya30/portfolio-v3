import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ExternalLink, InlineChip } from "@/components/rich-text";
import { profile } from "@/lib/data";

const chips = {
  kharedo: "linear-gradient(135deg, #f59e0b, #dc2626)",
  drawly: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  fraudEx: "linear-gradient(135deg, #10b981, #0d9488)",
  assetFlow: "linear-gradient(135deg, #0ea5e9, #2563eb)",
  rift: "linear-gradient(135deg, #f43f5e, #9f1239)",
  gemini: "linear-gradient(135deg, #3b82f6, #a855f7)",
  eziBuilds: "linear-gradient(135deg, #fb923c, #ea580c)",
  onera: "linear-gradient(135deg, #a3a3a3, #525252)",
};

export function Intro() {
  return (
    <div className="flex flex-col gap-5">
      <Reveal onMount>
        <section>
          <div className="flex flex-col gap-1.5 md:gap-2">
            <Image
              src="/profile.webp"
              alt={profile.name}
              width={96}
              height={96}
              priority
              className="mb-2 h-20 w-20 rounded-2xl border border-cream/20 object-cover md:h-24 md:w-24"
            />
            <h1 className="head-name">{profile.name}</h1>
            <p className="text-sm font-semibold text-cream md:text-base">
              {profile.tagline}
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={0.15} onMount>
        <section className="flex flex-col gap-0.5">
          <div className="mt-2 flex flex-col gap-3 text-sm font-semibold text-cream md:gap-4 md:text-base">
            <p>
              I&apos;m Jay, a full stack &amp; DevOps engineer focused on building
              products that stay fast, stable, and maintainable in production.
            </p>
            <p>
              Most recently I worked at{" "}
              <ExternalLink href="https://www.linkedin.com/in/jayvaidya30">
                <InlineChip letter="K" gradient={chips.kharedo} />
                Kharedo
              </ExternalLink>{" "}
              as a Full Stack &amp; DevOps Engineer, shipping a production e-commerce
              platform across <strong className="font-semibold text-white">20+ business modules</strong>{" "}
              and optimizing core workflows to be{" "}
              <strong className="font-semibold text-white">~40% faster on the backend</strong> and{" "}
              <strong className="font-semibold text-white">17-62% faster on the frontend</strong>.
            </p>
            <p>
              I&apos;ve built across real-time collaboration (
              <ExternalLink href="https://github.com/jayvaidya30/drawly">
                <InlineChip letter="D" gradient={chips.drawly} />
                Drawly
              </ExternalLink>
              ), fraud detection (
              <ExternalLink href="https://github.com/jayvaidya30/fraud-ex-stable">
                <InlineChip letter="F" gradient={chips.fraudEx} />
                FraudEx
              </ExternalLink>
              ), and enterprise asset management (
              <ExternalLink href="https://asset-flow-liard.vercel.app/">
                <InlineChip letter="A" gradient={chips.assetFlow} />
                AssetFlow
              </ExternalLink>
              ), where I learned how quickly software evolves, breaks, and improves
              once it meets real users.
            </p>
            <p>
              I also compete in hackathons like{" "}
              <ExternalLink href="https://github.com/BShubhamxx/pw-hack-money">
                <InlineChip letter="R" gradient={chips.rift} />
                RIFT&apos;26
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://gemini3.devpost.com">
                <InlineChip letter="G" gradient={chips.gemini} />
                Gemini 3 / Google DeepMind
              </ExternalLink>
              , and I&apos;m pursuing a BCS at Savitribai Phule Pune University with a{" "}
              <strong className="font-semibold text-white">9.27 CGPA</strong>.
            </p>
            <p>
              As a side quest, I build and ship client products like{" "}
              <ExternalLink href="https://ezibuilds.com/">
                <InlineChip letter="E" gradient={chips.eziBuilds} />
                EziBuilds
              </ExternalLink>{" "}
              and{" "}
              <ExternalLink href="https://onera1.vercel.app/">
                <InlineChip letter="O" gradient={chips.onera} />
                ONERA
              </ExternalLink>
              . Go give them a shot.
            </p>
          </div>
        </section>
      </Reveal>

    </div>
  );
}
