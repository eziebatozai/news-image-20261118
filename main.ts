// news-image-20261118 entry (Node 22, standard library only).
//
// The entry is a single image, drawn for Wednesday 18 November 2026 and
// shipped in this repository as entry.png. This program copies it to the
// grader's output directory, so both runs write the same bytes.
//
// The image is a newspaper front page, "THE WORLD IN ONE DAY":
//   - Lead: U.S. strikes an Iranian missile site on Qeshm Island as the
//     Gulf war escalates (five Iranian tankers sunk; Tehran's drones hit
//     Bahrain, Kuwait and a U.S. base in Jordan).
//   - Ukraine hits the Kerch Bridge for a second night; Xi, Putin and
//     Trump meet in Shenzhen; four nations urge Israel to open Gaza aid;
//     North Korea fires a missile into the Sea of Japan; Category 5
//     Cyclone Xavier hits the Cook Islands; Ebola in DR Congo more than
//     doubles. Footer: Russian plane crash kills 19; COP31 enters its
//     decisive phase.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

const bytes = readFileSync(join(here, 'entry.png'));
writeFileSync(target, bytes);
console.error(`news-image-20261118: wrote ${bytes.length} bytes to ${target}`);
