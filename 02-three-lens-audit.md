# Three-Lens Site Audit
## Understanding Your Website Through Three Perspectives

**Use this when:** Your site feels wrong but you can't say why. You're about to redesign. You want to know what's actually broken vs. what feels broken.

**Time to use:** ~10 minutes reading your site + getting Claude's analysis

**What you get:** Coherence score (0-10), 15+ findings prioritized by impact, separate narrative problems from technical debt

---

## The Problem

You ask three different people what's wrong with your website:

**Your friend (Editorial):** "The story doesn't land. I don't understand why I'm here."

**First-time visitor (User):** "This looks nice but... do I trust this? Will it work for me?"

**Senior developer (Technical):** "Your CSS is a mess. You defined colors but never use them. Code debt everywhere."

Three different diagnoses. Which one is right? All three. They're seeing different failures.

Most sites optimize for *one* lens and accidentally break the other two.

---

## The Solution

Evaluate your site **explicitly from three angles**:

1. **Editorial UX** — Does the *narrative* work? Does the story land?
2. **End User Trust** — Do *I* believe this? Would I use this? Am I safe here?
3. **Senior Developer** — Is this *technically* sound? What's the code debt?

Then separate them. Narrative problems ≠ technical problems. Fix them differently.

---

## How It Works

**STEP 1: Share Your Site**

Paste this into Claude:

```
ANALYZE MY WEBSITE: Three-lens audit

Site URL: [your site URL]

I want you to evaluate this site from three expert perspectives:

1. EDITORIAL UX EXPERT
   - Does the narrative/story land?
   - Is information hierarchy clear?
   - Does the visual flow guide attention?
   - Does the tone match the brand?

2. END USER / CONSUMER
   - Do I immediately understand what this is?
   - Do I trust this organization/person?
   - Would I use this product/service?
   - Do I feel safe (secure, understood)?

3. SENIOR DEVELOPER
   - Is the code technically sound?
   - Are there major accessibility gaps?
   - Is the design system used consistently?
   - What's the code debt?

For each lens: score 0-10 and give 3-5 specific findings.

Then: Overall coherence score and 3-5 priority recommendations.
```

**STEP 2: Claude Analyzes**

Claude visits your site and evaluates from all three angles.

**STEP 3: You Get Back**

Three separate scores, findings, and a prioritized fix list.

---

## Real Example

Say Claude returns something like:

```
EDITORIAL UX EXPERT: 6/10
✓ Hero section is clear
✓ Typography hierarchy exists
✗ Story doesn't explain *why* (who is this for?)
✗ Missing founder context
✗ Product category system undefined

END USER: 5.5/10
✓ Layout feels professional
✓ Navigation works
✗ I don't know what value I'm getting
✗ Trust signals missing (testimonials, proof)
✗ CTA buttons don't feel intentional

SENIOR DEVELOPER: 5/10
✓ Responsive layout
✓ Decent performance
✗ Brand colors defined but never used
✗ Button styles inconsistent
✗ Focus states missing

OVERALL COHERENCE: 5.5/10 (Potential: 8/10)

PRIORITY FIXES:
1. Add founder story (fixes Editorial + Trust)
2. Activate brand palette (fixes Developer + Editorial)
3. Add social proof (fixes Trust)
4. Define product categories (fixes Editorial)
```

---

## Why This Matters

Most redesigns fail because they optimize for **one lens** and break the others.

**Common mistakes:**

❌ Making it look beautiful (Editorial) but confusing (Trust)  
❌ Making it technically perfect (Code) but soulless (Editorial)  
❌ Adding trust signals (User) but losing clarity (Editorial)  

This audit **separates the problems so you fix them independently.**

---

## The Three Lenses Explained

### Lens 1: Editorial UX
*Does the story work?*

What the editorial expert cares about:
- **Narrative arc** — hero → problem → solution → outcome
- **Information hierarchy** — what's important? Is it *visible*?
- **Visual storytelling** — does the design reinforce the message?
- **Tone** — does it sound like you?
- **Flow** — does the eye know where to go?

Example questions:
- Can I understand what this is in 3 seconds?
- Does the hero section tell the *why*, not just the *what*?
- Are section headers establishing clear hierarchy?
- Does whitespace feel intentional or empty?

### Lens 2: User Trust
*Do I trust this? Would I use it?*

What the user/consumer cares about:
- **Immediate clarity** — what am I looking at?
- **Social proof** — who else uses this? Do I believe them?
- **Safety** — is my information secure? Is this legitimate?
- **Value** — what's in it for me? Why should I care?
- **Friction** — is there anything preventing me from taking action?

Example questions:
- Would I share my information with this organization?
- Do the CTAs feel natural or pushy?
- Are there testimonials or proof this works?
- Does the design feel premium or cheap?

### Lens 3: Senior Developer
*Is this technically sound?*

What the developer cares about:
- **Accessibility** — can I navigate with keyboard? Does this work for screen readers?
- **Design consistency** — are buttons styled uniformly? Is the palette used everywhere?
- **Code quality** — is this maintainable? Are there obvious bugs?
- **Performance** — will this load fast? Is there image bloat?
- **Scalability** — can this grow to 50 pages without breaking?

Example questions:
- Do CSS variables exist for colors?
- Are form inputs properly labeled?
- Do focus states exist (for Tab key navigation)?
- Is the component system (buttons, cards, etc.) consistent?

---

## How to Use the Findings

**If Editorial is low:** Add narrative. Explain *why*, not just *what*.

**If User Trust is low:** Add social proof, testimonials, security badges, founder story.

**If Developer score is low:** Refactor CSS, add accessibility, define design system.

**If all three are low together:** Your whole site needs rethinking. The editorial audit tells you what to think about. Fix that first, then redesign.

---

## Iterate

After you get the audit:

1. **Pick the top 3 findings** from each lens
2. **Fix Editorial first** — narrative problems cascade
3. **Then fix Trust** — add social proof, clarity
4. **Then fix Code** — refactor CSS, add accessibility

Re-run the audit after big changes to see your coherence score climb.

---

## For Stakeholders

If you're presenting this to a team:

- **Share the three scores separately** — they tell different stories
- **Show findings by lens** — it's clear *why* each problem matters
- **Explain the priority** — "We're fixing narrative first because everything else depends on it"

This helps teams align on *what* to fix and *why*.

---

## Next Steps

1. **Have your site URL ready**
2. **Paste the prompt above** into Claude
3. **Wait for the analysis** (~2 minutes)
4. **Read the three lenses separately** — don't blend them
5. **Start with Editorial fixes** — narrative first
6. **Re-audit after major changes** to see coherence improve

---

*This audit was born from analyzing websites that looked professional but felt off. The reason: they optimized for one lens and broke the other two. This separates them so you can fix them independently.*
