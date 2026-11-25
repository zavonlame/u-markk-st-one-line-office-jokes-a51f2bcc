// One-Line Office Jokes — make.fun entry
// The joke is built from three beats and written to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only. No network, no file reads, no Chrome.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Beat 1 — the trigger: someone tries to end the reply-all chain.
// Beat 2 — the plea: stop replying all.
// Beat 3 — the punchline: the plea itself gets seventeen reply-alls.
// Verified 2026-11-25: grader-style runs exit 0 twice, byte-identical output,
// entry.txt is 102 chars on a single line (gate: 1-199 chars).
const trigger = "Someone hit reply-all to ask everyone to stop replying all,";
const punchline = "and seventeen people replied all to agree.";

const line = `${trigger} ${punchline}`;

// Gate, mirroring the competition: 1-199 UTF-8 chars, one line, not blank.
function gate(text) {
  if (typeof text !== "string") throw new Error("entry is not a string");
  if (text.length < 1 || text.length > 199) {
    throw new Error(`entry is ${text.length} chars, gate needs 1-199`);
  }
  if (text.trim().length === 0) throw new Error("entry is only whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gate(line);

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote entry.txt (${line.length} chars)`);
