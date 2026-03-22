import type { Metadata } from "next";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Maximilian Stein — Community Strategy Lead for Microsoft Intune & Microsoft Security in Customer Experience Engineering (CxE).",
};

const TECH_STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "Vite",
  "Supabase",
  "Docker",
  "GitHub Actions",
  "Azure",
  "Cloudflare",
];

const TIMELINE = [
  {
    period: "2017\u2013Present",
    role: "Community Strategy Lead",
    company: "Microsoft",
    description:
      "Leading community strategy for Microsoft Intune and Microsoft Security across social media and technical blogs within Customer Experience Engineering (CxE). Connecting engineering teams with the global technical community through actionable insights, technical guidance, and real customer engagement.",
  },
  {
    period: "Prior",
    role: "Systems Administrator → Desktop Support → Service Technician",
    company: "Various (Hawai\u02BBi)",
    description:
      "Worked up through hands-on IT roles — from racking servers and managing infrastructure to front-line desktop support. This practical background provides a grounded perspective on the full customer journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About</h1>

      {/* Bio */}
      <div className="mt-6 max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I lead <strong className="text-foreground">community strategy</strong>{" "}
          for <strong className="text-foreground">Microsoft Intune</strong> and{" "}
          <strong className="text-foreground">Microsoft Security</strong> across
          social media and technical blogs within{" "}
          <strong className="text-foreground">
            Customer Experience Engineering (CxE)
          </strong>
          . My work connects engineering teams with the global technical
          community by turning real customer conversations into actionable
          insights, technical guidance, and engagement that actually helps people
          get their work done.
        </p>
        <p>
          With more than eight years at Microsoft, I focus on bringing customers,
          engineers, and community voices together to improve how products evolve
          and how people experience them. My role often sits between teams
          &mdash; translating feedback, identifying patterns, and helping shape
          solutions that scale.
        </p>
        <p>
          Before Microsoft, I worked my way up from systems administrator in
          Hawai&lsquo;i through desktop support and service technician roles.
          That hands-on background gives me a practical perspective on the
          customer journey &mdash; from the person racking the server to the
          person deploying the endpoint.
        </p>
        <p className="italic">
          It looks like you&lsquo;re trying to build something useful. Need help
          with that? 🖇️
        </p>
      </div>

      <Separator className="my-12" />

      {/* Career Timeline */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">
          Career Timeline
        </h2>
        <div className="mt-6 space-y-8">
          {TIMELINE.map((entry) => (
            <div key={entry.period} className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />
              <p className="text-sm font-medium text-muted-foreground font-[tabular-nums]">
                {entry.period}
              </p>
              <h3 className="mt-1 text-base font-semibold">{entry.role}</h3>
              <p className="text-sm text-primary">{entry.company}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {entry.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Tech Stack */}
      <section>
        <h2 className="text-2xl font-semibold tracking-tight">Tech Stack</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Technologies frequently used across projects.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          See What I&lsquo;ve Built
        </h2>
        <p className="mt-2 text-muted-foreground">
          Browse the full project portfolio.
        </p>
        <Button className="mt-4" asChild>
          <Link href="/projects/">
            View Projects <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
