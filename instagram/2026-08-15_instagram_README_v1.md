# @prihisol Instagram Pipeline — README v1

A batch content pipeline for **@prihisol** — Priscilla as a person: whimsical, nostalgic, bilingual, culture, family, humor, Latina power. One weekly Claude Code session drafts the week's captions, reel beat sheets, and covers; you pick, film, and post.

## Setup (once)

```bash
mkdir -p ~/instagram
# copy this folder's contents into ~/instagram (agents live in ~/instagram/.claude/agents/)
cd ~/instagram
npm i && npx playwright install chromium
claude
```

Drop your personal pictures — travel, family, the Camino, you being you — into `photos/`.

## Folder map

| Path | What it is |
|---|---|
| `2026-08-15_instagram_strategy-brief_v2.md` | Doctrine — includes the canonical Camino caption (§2, the voice) and the story bank (§7). |
| `2026-08-15_instagram_caption-skeleton_v1.md` | The one caption structure: VERDAD → VIDA → MAGIA → ✨ → EN mirror. Two registers: nostálgico, cómico. |
| `2026-08-15_instagram_cover-template_v1.html` | 1080×1350 photo-forward cover — whimsical-warm, your photo as the hero. |
| `2026-08-15_instagram_posts_v1.csv` | Single source of truth for post state (photo & reel). |
| `2026-08-15_instagram_render_v1.mjs` | CSV → PNG covers via Playwright (`npm run render`). |
| `.claude/agents/` | The five pipeline agents. |
| `photos/` | Your pictures (input). |
| `drafts/` | Captions + reel beat sheets (generated). |
| `renders/` | Cover PNGs (generated, not committed). |

## The weekly session

In `claude`, say: **"Run the Instagram pipeline for next week."**

1. **instagram-orchestrator** reads everything and returns a work order (surfacing anything blocked on you — e.g., story-bank material to approve).
2. **brand-strategy** runs each idea through the Camino test: would it sit next to your canonical reel? No selling, no LinkedIn leakage, no influencer formula, true stories only.
3. **story-writer** writes each caption ES-first with the ✨ divider and EN mirror — and for reels, a beat sheet (shots, on-screen text, voiceover lines, music mood). New personal/family material arrives as `PROPUESTA:` blocks for your yes/no.
4. **visual-director** picks the photo with life in it from `photos/` (or lists exactly what to film for a reel) and renders the cover:
   ```bash
   npm run render                 # all pending
   npm run render -- --post 001   # one post
   ```
5. **digital-ops** verifies everything and hands you the publish checklist.

You then: choose titles, approve captions and PROPUESTAs, film reels from the beat sheets, and post manually.

## Rules the whole pipeline enforces

- **Nothing is for sale here, ever.** No course, no DxVida, no products. Rare link-outs go quietly to your own site/email list.
- **Spanish first, always bilingual** — ES → ✨✨✨ → EN mirror.
- **True stories only** — personal and family facts come from the story bank; everything new needs your yes.
- **No LinkedIn leakage, no influencer formula.** Whimsical, human, real life.
- **Consistency beats format:** 1 post/week floor, 2/week target — and it has to stay fun.

## Open items before full production (brief §9)

Pillar approval, story-bank seeding (10–15 true stories), cover-look sign-off (fonts/palette), link-in-bio page, monetization-skill update. The orchestrator will keep surfacing these until they're settled.
