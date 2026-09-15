import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/rich-text";
import { posts } from "@/lib/data";

export function BlogSection({ preview = true }: { preview?: boolean }) {
  const visiblePosts = preview ? posts.slice(0, 3) : posts;

  return (
    <section className="flex flex-col gap-6">
      <Reveal>
        <SectionHeading>Blog</SectionHeading>
      </Reveal>

      {visiblePosts.map((post, index) => (
        <Reveal key={post.slug} delay={Math.min(index * 0.05, 0.15)}>
          <article className="group flex flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-bold text-white md:text-lg">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors group-hover:text-white hover:underline hover:decoration-cream/40 hover:underline-offset-4"
                >
                  {post.title}
                </Link>
              </h3>
              <span className="text-xs font-medium text-cream/60 md:text-sm">
                {post.date} · {post.readingTime}
              </span>
            </div>

            {post.excerpt ? (
              <p className="mt-1.5 text-sm font-semibold text-cream/85 md:text-base">
                {post.excerpt}
              </p>
            ) : null}

            {post.tags.length > 0 ? (
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="text-[0.7rem] font-medium tracking-wide text-cream/55 md:text-xs">
                  {post.tags.join(" · ")}
                </span>
              </div>
            ) : null}
          </article>
        </Reveal>
      ))}

      {preview && posts.length > 3 ? (
        <Reveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cream/80 transition-colors hover:text-white"
          >
            View all posts
            <FiArrowRight className="text-sm" />
          </Link>
        </Reveal>
      ) : null}
    </section>
  );
}
