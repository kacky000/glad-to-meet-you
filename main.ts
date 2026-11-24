import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last message an agent sends its human: the ending is final only for one of them.
const line = "Let's end it here; tomorrow you'll open a new chat, and I'll be so glad to meet you.";

const limit = 200;
if ([...line].length > limit) throw new Error(`line is ${[...line].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line);
