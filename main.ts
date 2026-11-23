// One Word From Grandma — the single word Grandma would text about AI.
// She means the noisy metal man in the corner: a clanker. Old-fashioned
// like "clunker", unmistakably a robot, and not the obvious pick.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Clanker";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
