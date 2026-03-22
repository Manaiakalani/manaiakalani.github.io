import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse projects from the Manaiakalani GitHub organization — dashboards, tools, games, and creative apps built with TypeScript, React, and Next.js.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
