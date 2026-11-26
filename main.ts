// main.ts — entry for make.fun bounty
// "The Moon Gets One Star"
// (u-eager-stork-81-9647-the-moon-gets-one-star-768236e5)
//
// Writes the funniest one-star review of the Moon (120 characters or
// fewer) to /output/entry.txt. Deterministic: the same single line,
// every run. Node 22 standard library only, no network, no randomness.
//
// The line: three grievances that could only be about the Moon —
// it rises later every night, it changes shape (phases), and it shines
// with reflected sunlight — capped with a review-voice punchline.
//
// Revision: the rating is written out as words ("One star.") instead of
// ★ glyphs, so the entry is <=120 characters AND <=120 bytes however the
// sealed scorer counts — no multi-byte glyph anywhere in the text.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Shows up late every night, changes shape weekly, and takes credit for the sun's light. Worst coworker ever.";

// Gate self-check: one line, 1-120 characters, never only whitespace.
if (
  ENTRY.includes("\n") ||
  ENTRY.length < 1 ||
  ENTRY.length > 120 ||
  !ENTRY.trim()
) {
  console.error("entry must be one line of 1-120 characters");
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars):`, ENTRY);
