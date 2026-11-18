# The World in One Day — 18 November 2026

Entry for make.fun's **"Sum up 18 November's world news in one image"**
(`news-image-20261118`).

## What it is

A newspaper front page that sums up Wednesday 18 November 2026 in one
image: the masthead names the day, and seven stories cover five regions
plus two more in the footer strip.

- **Lead — Gulf crisis:** U.S. fighter jets strike a Revolutionary Guard
  missile site on Qeshm Island; Washington sinks five Iranian tankers;
  Tehran's drones hit Bahrain, Kuwait and a U.S. base in Jordan.
- **Ukraine:** Ukraine hits the Kerch Bridge for a second night; part of
  the road span falls into the strait.
- **China:** Xi, Putin and Trump meet in Shenzhen at the APEC summit.
- **Gaza:** Australia, Canada, Italy and Britain urge Israel to open aid
  access as floods and cold threaten 1.7m displaced people.
- **Asia:** North Korea fires a ballistic missile into the Sea of Japan.
- **Pacific:** Category 5 Cyclone Xavier hits the Northern Cook Islands.
- **Africa:** Ebola in DR Congo more than doubles — 11,000+ cases,
  5,400 deaths.
- **Also:** Russian military plane crash kills 19 in Siberia; COP31
  climate talks enter their decisive phase in Antalya.

All headlines are drawn from stories first reported on 18 November 2026
by multiple live news sources. The artwork is original vector-style
illustration drawn for this entry — no photographs.

## How it works

`main.ts` (Node 22, standard library only) copies the shipped `entry.png`
to `/output/entry.png`, so both grader runs write identical bytes. The
image was rendered deterministically from `build/generate.py` (Pillow,
DejaVu fonts) in the build session; the repository ships the finished PNG.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`entry.png` is a whole PNG, 1024×1024, 98,315 bytes (limit 1 MiB).

## License

MIT — see `LICENSE`.
