# DxVida Tester Acquisition Funnel — v1 (2026-08-24)

Goal: a repeatable engine that turns strangers into **active testers → feedback → advocates** for DxVida (micro import/export copilot for entrepreneurs). 50 engaged testers beat 500 passive signups ([usersnap](https://usersnap.com/blog/free-beta-users-for-beta-testing/)).

**Who we're hunting:** entrepreneurs and solo founders exploring or running small import/export ventures — especially Spanish speakers (less crowded market, her structural edge) and LATAM founders operating in/toward Europe.

## Step 1 — Where testers are (ranked by fit; work top-down)

**Tier A — exact-fit (import/export intent):**
1. Reddit: r/ImportExport, r/ecommerce, r/EntrepreneurRideAlong, r/smallbusiness — threads where people ask "can I import X / what does it cost" are literally the product's question. Harvest exact language while there (→ customer-language DB).
2. LATAM-founders-in-Europe ecosystem — 4.2M LATAM immigrants in Spain, 3M in the rest of the EU, many entrepreneurial; programs like ICEX, IDB Lab, and Endeavor actively bridge LATAM founders into Spain ([EU-Startups](https://www.eu-startups.com/2026/06/why-latam-founders-are-finding-their-feet-in-europe/)).
3. Facebook/WhatsApp groups for importadores/emprendedores (ES-language import groups are large and active — weekly research task: identify the 5 most active, join as Priscilla, contribute first).

**Tier B — founder communities where she has standing:**
4. Migrant Founders Accelerator network (Germany — intercultural mentorship, German market support; she IS the profile) ([Opportunity Desk](https://opportunitydesk.org/2026/07/31/migrant-founders-accelerator-2026/)).
5. Female Founders (Europe's largest women-founder community) and peers ([female-founders.org](https://www.female-founders.org/), [community list](https://mean.ceo/startup-blog/tpost/european-female-founder-communities)).
6. Her own warm network — ~26% of founders' testers come from it ([usersnap](https://usersnap.com/blog/free-beta-users-for-beta-testing/)): LinkedIn 11k, mentees, former colleagues, the course's future students.

**Named warm candidates — derived from her own sent mail, 2026-08-24 (verify each before sending):**

| Person | Why they fit | Status |
|---|---|---|
| **Alejandra Cáceres** (aleca084@…) | Sent Priscilla the full EU cosmetics registration procedure + COSING databases — she is living the exact problem DxVida solves. Warm ("Hola Pri"). | **DRAFT READY in Gmail** |
| **Anika Lorenz** — futureSAX / InnoStartBonus | Gave DxVida its jury feedback; gateway to the Saxon founder network for tester intros. | **DRAFT READY in Gmail** |
| **Tatiana Pererva** — SES Bonn | Was mid-conversation about expert support for the CR↔DE import/export line; invited a formal cooperation form. **Open loop — did Priscilla ever send the form?** | Needs her answer first |
| **AHK Costa Rica** (direccion@ahk.cr) + **Ignacio García** | German–Costa Rican Chamber of Commerce; already cc'd on her SES thread. Institutional route to CR↔DE traders = dense tester pool. | Candidate |
| **Nadja Dehne** — Silicon Saxony | She sent an Initiativbewerbung there in June. Ecosystem contact — but mixing a job application with a tester ask is awkward. | Hold |

**Not tester targets (team/family):** Michael Döcke (husband, DxVida co-founder), edelsolis@… (her mother).

**Tier C — generic beta channels (volume, lower fit):** BetaList, Product Hunt (Ship/launch), Beta Testers Hub, r/TestFlight-style beta subreddits ([eleken](https://www.eleken.co/blog-posts/how-to-find-beta-testers), [quoleady](https://www.quoleady.com/how-to-find-beta-testers/)).

**Rule:** contribute visibly in a community before recruiting from it. Two useful answers before one ask.

## Step 2 — How to contact them

- **Public-thread first:** answer their actual import/export question usefully IN the thread; the tester invite goes in a follow-up DM only to people who engaged back. Never cold-blast threads.
- **DM template (ES):** "Hola [nombre] — vi tu pregunta sobre importar [producto]. Estoy construyendo DxVida, un copiloto que responde exactamente eso (¿es viable? ¿cuánto cuesta?). Busco 20 emprendedores que lo prueben gratis con un caso real y me digan sin piedad qué falta. ¿Te interesa probarlo con tu caso?"
- **DM template (EN):** same structure — their case, free access, brutal honesty requested, no commitment beyond one real session.
- **Warm network:** one personal LinkedIn/WhatsApp message per person, referencing their actual business. Batch of 10/week max — quality over spray.
- All outreach is Priscilla-sent (or explicitly authorized), personalized, one follow-up maximum. No mass automation — it burns the small pond we fish in.

## Step 3 — How to convince them (the tester offer — NEEDS HER YES)

Proposed offer, pending her approval: free full access during beta + their real import/export case analyzed + direct line to the founder + named early-supporter status at launch (with their permission). It costs nothing but her time and makes the tester the hero. **[DECIDE: exact offer, tester cap (suggest 20–30 for cohort 1), beta duration.]**

## Step 4 — How to collect feedback

- One 20-min call OR a 5-question async form per tester (their choice): What did you try? Where did it disappoint? What number didn't you trust? What would make you pay? Who else needs this?
- Every verbatim quote lands in `customer-language_v1.md` tagged `tester`. Feature requests → a simple ranked list reviewed weekly. Testers who go silent get ONE nudge, then are released.

## Step 5 — How to convert them into advocates

- Close the loop visibly: "you said X, we changed Y" messages — the cheapest loyalty ever built.
- Ask the happy ones for: a quotable sentence (social proof, with consent), one intro to a founder like them, and — for the naturally loud ones — a collab post/reel on their channel (they're pre-qualified nano-creators; tagged-content people convert best ([influenceflow](https://influenceflow.io/resources/influencer-outreach-best-practices-a-complete-2026-guide/))).
- Advocate pipeline lives in `growth/data/testers.csv` (create on first tester): name, source, status (contacted → testing → feedback-given → advocate), quotes, permissions.

## Weekly engine tick (the Routine executes this)

1. +5 new named candidate sources or threads (real, linked).
2. Outreach drafts ready for every candidate she approved.
3. Feedback from active testers logged; language DB updated.
4. Funnel counts reported: contacted / testing / fed-back / advocates.
