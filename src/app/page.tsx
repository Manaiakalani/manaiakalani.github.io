import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { TypingEffect } from "@/components/typing-effect";
import { FEATURED_PROJECTS } from "@/data/projects";
import { Separator } from "@/components/ui/separator";

const HERO_PROJECTS = FEATURED_PROJECTS.slice(0, 6);

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          MANAIAKALANI
        </h1>
        <div className="mt-4 h-8 text-lg sm:text-xl">
          <TypingEffect />
        </div>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I lead community strategy for{" "}
          <strong className="text-foreground">Microsoft Intune</strong> and{" "}
          <strong className="text-foreground">Microsoft Security</strong> within
          Customer Experience Engineering. I connect engineering teams with the
          global technical community through actionable insights and real
          customer engagement.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/projects/">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about/">About Me</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Featured Projects */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Featured Projects
          </h2>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/projects/" className="gap-1">
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HERO_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* Quick About */}
      <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-muted-foreground">
          <p>
            With more than eight years at Microsoft, I focus on bringing
            customers, engineers, and community voices together to improve how
            products evolve and how people experience them.
          </p>
          <p>
            Before Microsoft, I worked my way up from systems administrator in
            Hawai&lsquo;i through desktop support and service technician roles.
            That hands-on background gives me a practical perspective on the
            customer journey &mdash; from the person racking the server to the
            person deploying the endpoint.
          </p>
        </div>
        <Button variant="outline" className="mt-6" asChild>
          <Link href="/about/">Read More</Link>
        </Button>
      </section>
    </div>
  );
}
