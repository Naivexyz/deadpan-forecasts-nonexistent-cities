// Deadpan Forecasts for Cities That Do Not Exist
// make.fun competition: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// One line of deadpan weather for Drizzleford, a city that does not exist:
// sideways rain in millimetres, a single-digit high, and a town council
// so resigned to its own climate that it apologises for the weather
// before the weather has even happened.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "In Drizzleford, expect 41 millimetres of rain falling sideways, a high of 9 degrees, and a council apology for the weather, issued in advance.";

// The gate only accepts 1-160 UTF-8 characters, one line, non-blank:
// refuse to write anything that would fail it, instead of shipping it.
if (
  [...LINE].length < 1 ||
  [...LINE].length > 160 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line fails the gate: ${[...LINE].length} characters`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
chmodSync(outPath, 0o644);
