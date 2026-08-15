# Feed Audit — @prihisol (v1, framework + worksheet)

Goal: bring the EXISTING feed in line with the new identity (strategy brief §1–3) — organize what's there, edit what needs editing, archive what's too much. The Camino reel is the north star; the feed should read as one person: whimsical, nostalgic, funny, Latina, real.

**Status: waiting on the feed inventory.** Claude can't see Instagram from the pipeline environment, and account actions (edit caption / archive / pin) can only be done logged in as Priscilla. This file makes the audit a 30-minute job the moment the inventory exists.

## Getting the feed into the pipeline (pick ONE)

1. **Best: Instagram data export.** Accounts Center → Your information and permissions → Download your information → select "Posts" (JSON or HTML, media optional). Drop the export into `feed-export/` here — Claude reads it and pre-fills the worksheet below with a verdict per post.
2. **Fast: screenshots.** Screenshot the profile grid (scroll the whole feed) + screenshots of any captions you're unsure about. Drop them in `feed-export/`.
3. **Manual: the worksheet.** Fill the table below yourself from your phone, one row per post — Claude then does verdict + rewrite passes.

## The verdicts (one per post)

| Verdict | Meaning | Instagram action |
|---|---|---|
| **PIN** | Defines the account. Max 3. | Pin to profile |
| **KEEP** | Passes the Camino test as-is | none |
| **EDIT** | Right moment, wrong caption — rewrite into ES → ✨ → EN structure (edits keep likes/comments) | Edit caption |
| **ARCHIVE** | Doesn't belong to this identity anymore | Archive (reversible — never delete) |

## Decision rules (apply in order)

1. **Selling anything** (course promo, product, "link to buy") → **ARCHIVE**. This account wants nothing from anyone.
2. **LinkedIn leakage** (industry takes, tips-listicles, conference-badge professional content) → **ARCHIVE** — it lives on LinkedIn, not here.
3. **Not you anymore** (old aesthetics, trend-template reels, engagement-bait captions) → **ARCHIVE**.
4. **Good moment, weak caption** (real life, family, travel, humor — but caption is one emoji, English-only, or hashtag soup) → **EDIT**: rewrite in the skeleton (short form allowed: one VERDAD/MAGIA line → ✨ → EN mirror).
5. **Repetition** (five near-identical photos of the same trip) → **KEEP the one with life in it**, ARCHIVE the rest. The grid is a story, not a camera roll.
6. **Everything else that feels like you** → **KEEP**. Imperfect but real beats polished but hollow.

**PIN candidates:** the Camino reel (§2 canon) + the single best post of the strongest two pillars (one funny, one family/culture).

## Grid-level pass (after per-post verdicts)

- Read the grid top-down as a stranger: does the first screen say "whimsical, human, Latina, real life"? If any tile in the first 9 contradicts it, that tile gets EDIT or ARCHIVE priority.
- Rough target mix across visible feed: ~⅓ movimiento/nostalgia, ~⅓ cultura/familia/friends, ~⅓ la Priscilla real (funny/beautiful/everyday). Latina power is an energy across all of them, not a separate bucket.
- Bio + link check: bio should sound like the account (ES-first, warm, zero title-dropping); link goes to the owned site (brief §8).

## Worksheet (one row per post — fill or let Claude pre-fill from the export)

| # | Date | Type | What it is (one line) | Caption now (gist) | Verdict | New caption needed? | Done |
|---|------|------|----------------------|--------------------|---------|--------------------|------|
| 1 |      |      |                      |                    |         |                    | ☐ |
| 2 |      |      |                      |                    |         |                    | ☐ |

## Execution (manual, by Priscilla, ~30 min)

1. Archive pass first (bottom of the feed upward — least emotional attachment first).
2. Then caption edits: Claude drafts every EDIT rewrite in `drafts/feed-edits/` for copy-paste, one file per post.
3. Pin last, once the grid is clean.
4. Log what was done in this file; the story bank inherits any good stories rediscovered along the way.
