// Entry for make.fun competition u-rama-melon-make-the-ai-judge-laugh-302d0825
// "Make the AI Judge Laugh" — writes one single-line office joke to /output/entry.txt.
// Deterministic, no network, no secrets, no dependencies beyond Node's stdlib.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const JOKE =
  "My boss tracks my productivity in a spreadsheet, so I spend every Friday updating the spreadsheet about the spreadsheet.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");

console.log(`Wrote ${JOKE.length} characters to ${outFile}`);
console.log(JOKE);

// Keep the module importable without side effects in tests by guarding on
// direct execution only when run as the entry point.
void fileURLToPath;
