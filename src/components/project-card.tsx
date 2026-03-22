"use client";

import * as React from "react";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Project, LANGUAGE_COLORS } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const langColor = LANGUAGE_COLORS[project.language] ?? "#6b7280";

  return (
    <Card
      className={cn(
        "group flex flex-col transition-all hover:shadow-md hover:border-primary/20",
        className
      )}
    >
      <CardHeader className="flex-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base leading-snug">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {project.name}
              <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </CardTitle>
        </div>
        <CardDescription className="mt-2 line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1.5">
          {project.topics.slice(0, 4).map((topic) => (
            <Badge key={topic} variant="secondary" className="text-[11px]">
              {topic}
            </Badge>
          ))}
          {project.topics.length > 4 && (
            <Badge variant="outline" className="text-[11px]">
              +{project.topics.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span
            className="inline-block h-3 w-3 rounded-full"
            style={{ backgroundColor: langColor }}
            aria-hidden="true"
          />
          {project.language}
        </span>
      </CardFooter>
    </Card>
  );
}
