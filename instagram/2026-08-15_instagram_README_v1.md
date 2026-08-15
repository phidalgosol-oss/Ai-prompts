# Pretzelita Instagram Pipeline — README v1

A batch content pipeline for the Pretzelita Instagram account (the ONLY brand on Instagram — see the strategy brief). One weekly Claude Code session produces the week's captions and rendered covers; publishing stays manual.

## Setup (once)

```bash
mkdir -p ~/instagram
# copy this folder's contents into ~/instagram (agents live in ~/instagram/.claude/agents/)
cd ~/instagram
npm i playwright && npx playwright install chromium
claude
```

Drop your raw art into `photos/`.

## Folder map

| Path | What it is |
|---|---|
| `2026-08-15_instagram_strategy-brief_v2.md` | Doctrine. Read first, every session. |
| `2026-08-15_instagram_caption-skeleton_v1.md` | The one caption structure. |
| `2026-08-15_instagram_cover-template_v1.html` | 1080×1350 cover template (provisional palette — see brief §9). |
| `2026-08-15_instagram_posts_v1.csv` | Single source of truth for post state. |
| `2026-08-15_instagram_render_v1.mjs` | CSV → PNG covers via Playwright. |
| `.claude/agents/` | The five pipeline agents. |
| `photos/` | Your raw art (input). |
| `drafts/` | Captions, one file per post (generated). |
| `renders/` | Cover PNGs (generated, not committed). |

## The weekly session

In `claude`, say: **"Run the Instagram pipeline for next week."**

The pipeline runs in this order:

1. **instagram-orchestrator** reads the CSV/drafts/renders and returns a work order (including any `[FILL]` questions blocked on you).
2. **brand-strategy** validates each post idea against the three laws: discovery only (never a checkout), fully faceless, canon only from the character bible.
3. **story-writer** writes each caption into `drafts/` per the skeleton, returning two GANCHO options for you to pick.
4. **visual-director** picks art from `photos/`, fills the CSV cover fields, and renders:
   ```bash
   node 2026-08-15_instagram_render_v1.mjs            # all pending
   node 2026-08-15_instagram_render_v1.mjs --post 001 # one post
   ```
5. **digital-ops** verifies everything and gives you the publish checklist.

You then: approve captions (that's what flips `caption_status` to `approved`), and post manually with the checklist.

## Rules the whole pipeline enforces

- Instagram = **discovery for Pretzelita only**. Never a checkout, never another brand, never a price.
- **Fully faceless.** You never appear — no face, hands, or creator-voice asides.
- Every CTA points to the **owned asset** (link in bio → your site/email list).
- **Consistency beats format:** 1 post/week floor, 2/week target. The pipeline refuses to plan more.

## Open items before full production (from brief §9)

Character bible, Pretzelita's real palette (template ships with marked placeholders), link-in-bio URL, pillar approval, tú/vos register. The orchestrator will keep surfacing these until they're filled.
