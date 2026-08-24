# Automation Map — what the operator can actually do without her (v1, 2026-08-24)

Question asked: *"How much can you automate, so I just check comms?"*
Answer, honestly split. **Verified** = tested in-session, not assumed.

## GREEN — fully automatable today

| Capability | Access | What it means |
|---|---|---|
| **Email: draft, send, reply, search** | Gmail connector — **VERIFIED** in-session | Tester outreach by email can be written AND sent by the operator, replies monitored, follow-ups fired on schedule. |
| **Email triage + labeling** | Gmail labels — **VERIFIED** | Every growth thread gets labeled so "check comms" is a filtered view, not a 31k inbox. |
| **Calendar: book tester sessions** | Google Calendar connector | A tester says yes → session booked, invite sent, no back-and-forth. |
| **Docs/files, research, drafting, rendering, dashboards** | In-session + repo | Already running weekly via the Routine. |
| **Bookkeeping** | Repo | testers.csv, language DB, board — updated without her. |

## RED — cannot be automated, and no workaround exists

| Blocked | Why | Who does it |
|---|---|---|
| **Instagram: post, DM, comment, archive, edit, pin** | instagram.com is blocked from this environment AND those actions have no API for a personal account. | Her, in the app |
| **LinkedIn: post, DM, comment** | No LinkedIn connector exists in this session. | Her |
| **WhatsApp** | No connector. | Her |
| **Reddit / Facebook / community posting** | No connector — and posting as her in communities she must build standing in is a reputational risk, not just a technical gap. | Her |
| **Filming reels, taking photos** | Physical. | Her |

**Consequence for the calendar:** the Instagram, LinkedIn, and community blocks on the Traction Board stay hers no matter what we approve. Roughly **half the board can run without her; the social half cannot.**

## The Routine gap (fix required for true autonomy)

The weekly Routine was created from this session, which held no connector grants — so **the Monday run currently cannot send email**. It can research, write, commit, push. To let the autonomous run also send:
→ Recreate the Routine from the claude.ai Routines UI with the **Gmail** (and Calendar) connector attached. Same prompt, same schedule.
Until then: sending happens in-session, when she's here.

## The hard thing about auto-sending her warm network

The first 10 invites go to real friends and former colleagues. Their power is that they are *personal*. An AI-written note sent to a close contact without her eyes on it risks the one asset she cannot rebuild — those relationships — to save about 15 minutes.

**Recommended split (safe autonomy):**

- **Warm network (first 10):** operator writes them straight into **Gmail drafts**, personalized, ready. She skims, hits send. ~15 seconds each, relationship risk ≈ 0.
- **Cold / community / creator outreach:** operator sends directly once she has approved the target list. Low relationship risk, high volume value.
- **Follow-ups, scheduling, confirmations, thank-yous, feedback requests, loop-closing:** operator sends directly. These are mechanical.
- **Anything money, legal, or irreversible:** escalate to her. Always.

## Her actual weekly load under this model

Check labeled comms + hit send on ~10 pre-written drafts + do the social half (IG/LinkedIn/communities) + run tester sessions. Everything else runs without her.

**Standing rule:** the operator never sends anything from her name that she has not either pre-approved by category (above) or seen as a draft. No exceptions, no "it was probably fine".
