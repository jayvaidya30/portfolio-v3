import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { Clock } from "@/components/clock";
import { Dock } from "@/components/dock";
import { SceneBackground } from "@/components/scene-background";
import { RichText } from "@/components/rich-text";
import { posts } from "@/lib/data";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post not found | Jay Vaidya" };
  }

  return {
    title: `${post.title} | Jay Vaidya`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <SceneBackground />
      <Clock />

      <main className="screen relative z-10 flex flex-col gap-8">
        <div className="flex items-center gap-5 text-sm font-bold">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-white"
          >
            <FiArrowLeft className="text-sm" />
            home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-cream/60 transition-colors hover:text-white"
          >
            <FiArrowLeft className="text-sm" />
            blog
          </Link>
        </div>

        <header className="flex flex-col gap-3">
          <div className="border-t border-white/15" />
          <h1 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            {post.title}
          </h1>
          <p className="text-xs font-medium text-cream/60 md:text-sm">
            {post.date} · {post.readingTime}
          </p>
          {post.excerpt ? (
            <p className="text-sm font-semibold text-cream/85 md:text-base">
              {post.excerpt}
            </p>
          ) : null}
          <p className="text-[0.7rem] font-medium tracking-wide text-cream/55 md:text-xs">
            {post.tags.join(" · ")}
          </p>
        </header>

        <article className="flex flex-col gap-4">
          {post.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed font-semibold text-cream/90 md:text-base"
            >
              <RichText text={paragraph} />
            </p>
          ))}
        </article>
      </main>

      <Dock />
    </>
  );
}
