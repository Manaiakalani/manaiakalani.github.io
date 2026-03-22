export interface Project {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  stars: number;
  updatedAt: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    name: "borderlands-loot-hub",
    description:
      "Borderlands SHiFT Vault — A sleek, Borderlands-themed SHiFT code aggregator for Vault Hunters. Find and copy Golden Key codes for BL1–BL4 & Wonderlands.",
    url: "https://github.com/Manaiakalani/borderlands-loot-hub",
    language: "TypeScript",
    topics: [
      "borderlands",
      "game-codes",
      "golden-keys",
      "react",
      "shift-codes",
      "vite",
    ],
    stars: 0,
    updatedAt: "2026-03-16",
  },
  {
    name: "destiny-code-finder",
    description:
      "Destiny 2 emblem code finder — aggregates codes from Reddit, Blueberries.gg & more. Privacy-first, no tracking.",
    url: "https://github.com/Manaiakalani/destiny-code-finder",
    language: "TypeScript",
    topics: [
      "destiny-2",
      "emblem-codes",
      "github-pages",
      "react",
      "typescript",
      "vite",
    ],
    stars: 0,
    updatedAt: "2026-03-16",
  },
  {
    name: "Manaiakalani.com",
    description:
      "Portfolio for Manaiakalani — vanilla HTML, CSS, and JavaScript with dark mode, GeoCities easter egg, and 3D ASCII cube.",
    url: "https://github.com/Manaiakalani/Manaiakalani.com",
    language: "JavaScript",
    topics: ["portfolio", "vanilla-js", "html-css"],
    stars: 1,
    updatedAt: "2026-03-21",
  },
  {
    name: "yeshello.lol",
    description:
      "The Gen Z communication power move — just say \u2018Hello\u2019 and make them wait. \ud83d\udc4b",
    url: "https://github.com/Manaiakalani/yeshello.lol",
    language: "HTML",
    topics: [
      "dark-mode",
      "gen-z",
      "html-css-javascript",
      "humor",
      "vanilla-js",
    ],
    stars: 0,
    updatedAt: "2026-03-21",
  },
  {
    name: "OnlyArchitects.art",
    description: "OnlyArchitects.art — a creative platform for architecture.",
    url: "https://github.com/Manaiakalani/OnlyArchitects.art",
    language: "HTML",
    topics: ["architecture", "creative"],
    stars: 0,
    updatedAt: "2026-03-21",
  },
  {
    name: "SeattleDoge",
    description:
      "SeattleDoge — a Seattle-themed community project.",
    url: "https://github.com/Manaiakalani/SeattleDoge",
    language: "HTML",
    topics: ["seattle", "community"],
    stars: 0,
    updatedAt: "2026-03-21",
  },
];

export const ALL_LANGUAGES = [
  ...new Set(FEATURED_PROJECTS.map((p) => p.language)),
].sort();

export const ALL_TOPICS = [
  ...new Set(FEATURED_PROJECTS.flatMap((p) => p.topics)),
].sort();

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  MDX: "#fcb32c",
  Python: "#3572A5",
};
