# Why there are no new posts on @prihisol — and the fastest fix

Written 2026-08-24, after this question came up three times. This file is the definitive answer so it stops being re-litigated each session.

## 1. Nothing has ever been posted, by anyone but Priscilla

Claude has **never** posted to Instagram, never connected to it, and never had access. Nothing produced in this repo has ever reached the app. What exists are **files on disk**, not posts.

Evidence, tested 2026-08-24:
- `https://www.instagram.com/` → **403, CONNECT tunnel failed** at the network egress proxy.
- `https://graph.facebook.com/` → **403, CONNECT tunnel failed**.
- MCP connector registry, searched for "instagram / meta / social posting": **no Instagram publishing connector exists**. Only analytics aggregators (Supermetrics) and ad tools.

Where the confusion likely comes from: rendered cover images were delivered into the chat as image files. They *look* like finished posts. They are PNGs sitting in a folder.

## 2. What actually exists right now

| Asset | Count | Location |
|---|---|---|
| Reel cover images (1080×1920, ready to apply) | **5** | `instagram/cover-kit/` |
| Caption drafts | **2** | `instagram/drafts/` |
| **Photos or footage of Priscilla** | **0** | `instagram/photos/` is empty |

## 3. The root cause, said plainly

@prihisol is an account about **her life** — her face, her family, her husband, her travels, Costa Rica. The pipeline cannot produce that from nothing. **Zero photos and zero footage have ever been provided.** Until they are, the only thing this system can generate is type-only cards, which are not what this account is for.

The bottleneck is not tooling, automation, or access. It is raw material.

## 4. The fastest real path to a full feed (one sitting, no daily work)

Instagram supports **native scheduling**: up to **25 posts per day and 75 days in advance**, and since **March 2026 eligible public accounts can schedule natively without switching to a Business or Creator account** ([SocialBu](https://socialbu.com/blog/schedule-instagram-reels-and-posts), [Albato](https://albato.com/blog/publications/how-to-schedule-instagram-posts), [SocialBee](https://socialbee.com/blog/how-to-schedule-instagram-posts/)). On desktop, **Meta Business Suite → Planner → Create Post** schedules feed posts, carousels, Reels and Stories for free ([$99 Social](https://www.99dollarsocial.com/blog/how-to-schedule-instagram-posts-using-facebook-creator-studio)).

**So the workflow that gets a full month live in one evening:**

1. Priscilla drops photos/footage into `instagram/photos/` (or pastes them into the chat).
2. The pipeline produces, per post: cover, caption (ES → ✨ → EN), ALT text — batched.
3. She opens Meta Business Suite once, uploads the batch, schedules 4–8 weeks ahead.
4. Nothing daily. Nothing on camera she doesn't want. One sitting per month.

**Bonus:** a professional (Creator) account also unlocks **Insights** — which clears the standing "no engagement data" blocker in the growth OS, because she can then export real numbers instead of the operator guessing.

## 5. What remains permanently hers

Posting, scheduling, DMs, comments, archiving, pinning, editing captions on live posts. No tool in this environment can do these, and no configuration will change that. The operator's job is to make each of them take seconds.
