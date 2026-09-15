import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jay Vaidya | Full Stack & DevOps Engineer",
  description:
    "Portfolio of Jay Vaidya, Full Stack & DevOps Engineer specializing in React, Next.js, Node.js, AWS, and modern web technologies.",
  authors: [{ name: "Jay Vaidya" }],
  keywords: [
    "Jay Vaidya",
    "Portfolio",
    "Full Stack Developer",
    "DevOps Engineer",
    "React",
    "Next.js",
    "Node.js",
    "AWS",
  ],
  openGraph: {
    title: "Jay Vaidya | Full Stack & DevOps Engineer",
    description:
      "Portfolio of Jay Vaidya, Full Stack & DevOps Engineer specializing in React, Next.js, Node.js, AWS, and modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jay Vaidya | Full Stack & DevOps Engineer",
    description:
      "Portfolio of Jay Vaidya, Full Stack & DevOps Engineer specializing in React, Next.js, Node.js, AWS, and modern web technologies.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1016",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
