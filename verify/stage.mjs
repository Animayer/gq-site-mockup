import fs from "node:fs";
import path from "node:path";
import { ROOT, publishedRelPaths } from "./files.mjs";

const dest = path.join(ROOT, "_site");
fs.rmSync(dest, { recursive: true, force: true });
const files = publishedRelPaths();
for (const rel of files) {
  const from = path.join(ROOT, rel);
  const to = path.join(dest, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}
console.log(`staged ${files.length} files into _site`);
