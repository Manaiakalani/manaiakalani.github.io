import { Github, Linkedin, Twitter, Instagram, Youtube, Cloud } from "lucide-react";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/manaiakalani/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://twitter.com/manaiakalani",
    label: "Twitter / X",
    icon: Twitter,
  },
  {
    href: "https://github.com/manaiakalani",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://instagram.com/manaiakalani",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/kimaker213",
    label: "YouTube",
    icon: Youtube,
  },
  {
    href: "https://bsky.app/profile/did:plc:kurxpumma6piictgpr424wcj",
    label: "Bluesky",
    icon: Cloud,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:px-6">
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Made with{" "}
          <span aria-hidden="true" className="animate-pulse">
            ❤️
          </span>{" "}
          in Seattle, WA
        </p>
        <p className="text-xs text-muted-foreground/60">
          &copy; {new Date().getFullYear()} Manaiakalani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
