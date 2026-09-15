import type { Metadata } from "next";
import { SubPage } from "@/components/sub-page";
import { BlogSection } from "@/components/sections/blog";

export const metadata: Metadata = {
  title: "Blog — Jay Vaidya",
  description:
    "Notes on Next.js, Node.js, Docker, AWS, and realtime systems by Jay Vaidya.",
};

export default function BlogPage() {
  return (
    <SubPage
      title="Blog"
      description="Notes on shipping production web apps — Next.js, performance, Docker, and realtime systems."
    >
      <BlogSection preview={false} />
    </SubPage>
  );
}
