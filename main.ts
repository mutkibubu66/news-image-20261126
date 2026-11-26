// Entry program for the make.fun news-image-20261126 bounty.
// It places the finished front page, entry.png, into the output
// directory the grader provides, so the judge can see it.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const SOURCE = "entry.png";

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

const destination = join(targetDir, SOURCE);
copyFileSync(SOURCE, destination);

console.log(`wrote ${destination}`);
