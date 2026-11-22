import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One short text, a one-line joke about working beside AI coding agents:
// the agent writes the code, the human takes the credit, and when
// something breaks they both agree the bug was in the requirements.
const TEXT =
  "My AI coding agent and I make a great team: it writes the code, I take the credit, and when it breaks, we both blame the requirements.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
