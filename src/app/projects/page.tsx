"use client";

import * as React from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS, ALL_LANGUAGES } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedLang, setSelectedLang] = React.useState<string | null>(null);

  const filtered = selectedLang
    ? FEATURED_PROJECTS.filter((p) => p.language === selectedLang)
    : FEATURED_PROJECTS;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h1>
      <p className="mt-2 text-muted-foreground">
        A selection of projects from the{" "}
        <a
          href="https://github.com/Manaiakalani"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Manaiakalani
        </a>{" "}
        organization on GitHub.
      </p>

      {/* Language filter */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Button
          variant={selectedLang === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedLang(null)}
          className="text-xs"
        >
          All ({FEATURED_PROJECTS.length})
        </Button>
        {ALL_LANGUAGES.map((lang) => {
          const count = FEATURED_PROJECTS.filter(
            (p) => p.language === lang
          ).length;
          return (
            <Button
              key={lang}
              variant={selectedLang === lang ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLang(lang)}
              className="text-xs"
            >
              {lang} ({count})
            </Button>
          );
        })}
      </div>

      {/* Project grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No projects match this filter.
        </p>
      )}
    </div>
  );
}
