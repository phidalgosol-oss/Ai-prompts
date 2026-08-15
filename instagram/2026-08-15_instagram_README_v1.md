# @prihisol Instagram Pipeline — README v1

A batch content pipeline for **@prihisol** — Priscilla Hidalgo's professional brand (AI strategist ◦ anthropologist ◦ coach) on Instagram. One weekly Claude Code session produces the week's captions and rendered covers; publishing stays manual.

## Setup (once)

```bash
mkdir -p ~/instagram
# copy this folder's contents into ~/instagram (agents live in ~/instagram/.claude/agents/)
cd ~/instagram
npm i && npx playwright install chromium
claude
```

Drop your photographs (talks, work moments, travel) into `photos/`.

## Folder map

| Path | What it is |
|---|---|
| `2026-08-15_instagram_strategy-brief_v2.md` | Doctrine. Read first, every session. |
| `2026-08-15_instagram_caption-skeleton_v1.md` | The one caption structure — your voice, Instagram length. |
| `2026-08-15_instagram_cover-template_v1.html` | 1080×1350 editorial cover (green anchor confirmed; fonts to sync with your site's tokens.css). |
| `2026-08-15_instagram_posts_v1.csv` | Single source of truth for post state. |
| `2026-08-15_instagram_render_v1.mjs` | CSV → PNG covers via Playwright (`npm run render`). |
| `.claude/agents/` | The five pipeline agents. |
| `photos/` | Your photographs (input). |
| `drafts/` | Captions, one file per post (generated). |
| `renders/` | Cover PNGs (generated, not committed). |

## The weekly session

In `claude`, say: **"Run the Instagram pipeline for next week."**

The pipeline runs in this order:

1. **instagram-orchestrator** reads the CSV/drafts/renders and returns a work order (surfacing any open brief items blocked on you).
2. **brand-strategy** validates each idea: discovery only (never a checkout), DxVida as evidence not promotion, no course selling, real attributed research only, nothing that requires you on camera.
3. **story-writer** writes each caption into `drafts/` in YOUR voice per the skeleton — it reads the voice profile first, supports blends ("40% my voice, 40% Omdia, 20% empathy"), and returns two hook options for you to pick.
4. **visual-director** builds each cover — type card (hook set large in serif green) or photo card (your photo + title) — and renders:
   ```bash
   npm run render                 # all pending
   npm run render -- --post 001   # one post
   ```
5. **digital-ops** verifies everything and gives you the publish checklist.

You then: pick hooks, approve captions (that's what flips `caption_status` to `approved`), and post manually with the checklist.

## Rules the whole pipeline enforces

- @prihisol = **discovery for the professional brand**. Never a checkout, never a price, never course sales or DxVida promotion.
- Every CTA points to the **owned asset** (link in bio → your site/email list). Rented reach feeds owned audience.
- **Visibility dosing:** your photos and your voice, yes; an on-camera habit, never required.
- **Evidence habit:** every statistic real and attributed, `[VERIFY]` flags resolved before publishing.
- **Consistency beats format:** 1 post/week floor, 2/week target, max one mental-movie post per week.

## Open items before full production (brief §9)

Language policy (EN vs bilingual), pillar approval, exact link-in-bio page, font sync with tokens.css, bio copy, and updating the monetization skill's Instagram rule (it currently says Pretzelita-only). The orchestrator will keep surfacing these until they're settled.
