import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000 — the label a museum in the year 3000 puts beside
// an ordinary object from today: a password sticky note.
// The curator of 3000 misreads it as the master key to a citizen's whole
// life, hidden in the worst possible place — and the humans called that
// "best practice".
const LABEL =
  "The master key to a citizen's entire life, hidden under the keyboard. Experts called this 'best practice'.";

// The gate requires 1–200 characters of non-whitespace UTF-8 text.
// Guard it here so a future edit to the label can never silently break
// the entry: fail loudly instead of writing an invalid file.
const trimmed = LABEL.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`label must be 1-200 characters, got ${trimmed.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
console.log(trimmed);
