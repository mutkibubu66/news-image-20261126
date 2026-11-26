// Entry program for the make.fun news-image-20261126 bounty.
// It places the finished front page, entry.png, into the output
// directory the grader provides, so the judge can see it.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The image sits beside this program file, so anchor the path to the
// program's own folder instead of the process working directory — the
// grader starts the program from elsewhere.
const SOURCE = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : resolve("out");

if (!existsSync(SOURCE)) {
  console.error(
    `error: cannot find ${SOURCE} next to this program; nothing to copy`,
  );
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });

const destination = join(targetDir, "entry.png");
copyFileSync(SOURCE, destination);

console.log(`wrote ${destination}`);
