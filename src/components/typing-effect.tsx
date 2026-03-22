"use client";

import * as React from "react";

const PHRASES = [
  "Community Strategy & Technical Engagement",
  "Connecting Engineering Teams with Customers",
  "Building Useful Things for Real People",
  "From Racking Servers to Deploying Endpoints",
];

export function TypingEffect() {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];
    const speed = deleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < currentPhrase.length) {
        setText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === currentPhrase.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex > 0) {
        setText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % PHRASES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="text-muted-foreground" aria-label={PHRASES[phraseIndex]}>
      {text}
      <span className="animate-blink" aria-hidden="true">
        |
      </span>
    </span>
  );
}
