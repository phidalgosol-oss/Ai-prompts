# CSS Fix Everything
## Token-Optimized Brand Activation Prompt

**Use this when:** You have a color palette defined but unused. Your brand feels scattered. Buttons don't feel intentional.

**Time to use:** ~5 minutes setup, ~30 seconds to apply

**What you get:** Entire brand system activated. All colors visible. Button hierarchy clear. Accessibility improved.

---

## The Problem

You defined a brand system:
- Primary color (teal, blue, whatever)
- Secondary color (gold, sage, etc.)
- Supporting palette

But when you look at your site, you don't see them. The palette exists in your design file but never made it to the live page.

Meanwhile:
- Buttons look random
- Links don't feel distinct
- Focus states are invisible
- Your colors are wasted

---

## The Solution

One instruction to Claude that applies everything at once. No HTML changes. Pure CSS.

```
FIX MY BRAND SYSTEM: Apply all CSS improvements at once. No HTML changes.

INJECT THIS BEFORE </head>:

Context: My brand colors are:
- Primary: [your primary color hex]
- Secondary: [your secondary color hex]
- Accent: [your accent color hex]
- Background: [your background hex]
- Text: [your text color hex]

I want:
- Primary buttons: [primary] background, full opacity
- Secondary buttons: border-only, [primary] on hover
- Text links: [secondary] color, [secondary] underline on hover
- Focus states: [primary] 2px outline
- Card borders: [primary] left 3px
- Section dividers: [secondary] at 40% opacity

Fix all of this CSS at once. Output only the <style> block, no explanation.
```

---

## Real Example

Say your brand is:

```
Primary: #A8D5D5 (teal)
Secondary: #D4AF6A (gold)
Accent: #C2622D (terracotta)
Background: #F5EFE0 (cream)
Text: #3D3D3D (charcoal)
```

**You paste:**

```
FIX MY BRAND SYSTEM: Apply all CSS improvements at once. No HTML changes.

INJECT THIS BEFORE </head>:

Context: My brand colors are:
- Primary: #A8D5D5
- Secondary: #D4AF6A
- Accent: #C2622D
- Background: #F5EFE0
- Text: #3D3D3D

I want:
- Primary buttons: #A8D5D5 background, charcoal text
- Secondary buttons: #A8D5D5 border, transparent background, charcoal text until hover
- Text links: #D4AF6A color with #D4AF6A underline
- Focus states: #A8D5D5 2px outline, 2px offset
- Card borders: #A8D5D5 left 3px
- Section dividers: #D4AF6A at 40% opacity
- Nav links: #D4AF6A underline on hover

Fix all of this CSS at once. Output only the <style> block, no explanation.
```

**Claude returns:** ~600 lines of production-ready CSS.

**You copy-paste it** into your HTML `<head>` before `</head>`.

**Result:** 
- ✓ All buttons are teal with clear hierarchy
- ✓ Links are gold and intentional
- ✓ Focus states work on Tab key
- ✓ Cards have teal left border
- ✓ Your palette is finally *visible*
- ✓ Zero HTML changed

---

## What Gets Fixed

| Element | Before | After |
|---|---|---|
| Primary CTA | Gray, generic | [Your primary color], intentional |
| Secondary CTA | Same as primary | Border-only, lighter feel |
| Text links | Default blue | [Your secondary color] |
| Focus states | Browser default | [Your primary color] outline |
| Card borders | None | [Your primary color] left border |
| Dividers | Tan, generic | [Your secondary color] |
| Form inputs | Default gray | [Your primary color] border on focus |
| Nav links | Default | [Your secondary color] underline |

---

## How to Iterate

If Claude outputs something that doesn't work:

**Problem:** "The colors are too bright"  
**Add to prompt:** "Reduce opacity to 70% for all background colors"

**Problem:** "I want only certain buttons to change, not all"  
**Add to prompt:** "Only style buttons with class 'btn-primary'. Leave others alone."

**Problem:** "The focus outline is too thick"  
**Add to prompt:** "Make outline 1.5px instead of 2px, offset 1px"

---

## For Teams / Client Work

If you're sharing this with a client or team:

1. **Extract your palette** (use a color picker tool or design file)
2. **List your primary, secondary, and accent colors** with hex codes
3. **Tell Claude exactly which elements matter most** to you
4. **Run the prompt once** to generate all CSS
5. **Share the output file** with your team — it's fully commented

---

## Why This Works

- **No HTML rewrites** — you keep your structure, just fix presentation
- **Maintainable** — uses CSS variables, so color changes are one line
- **Accessible** — builds in focus states automatically
- **Token-optimized** — one instruction, not ten

---

## Common Mistakes to Avoid

❌ **Don't:** "Make my site look better" (too vague)  
✓ **Do:** "Apply teal backgrounds to primary buttons, gold underlines to links"

❌ **Don't:** Ask Claude to redesign your layout  
✓ **Do:** Ask Claude to activate colors you already defined

❌ **Don't:** Change this CSS manually after  
✓ **Do:** Edit the prompt and re-run Claude

---

## Next Steps

1. **Gather your brand colors** (hex codes)
2. **Paste the prompt template above** into Claude Code or the web interface
3. **Fill in your specific colors and preferences**
4. **Copy the output CSS** into your HTML before `</head>`
5. **Reload your site** and see your brand system finally visible

Done. No redesign. Just activation.

---

*This prompt was born from rebuilding DxVida three times and finally understanding: your palette exists. You just need to make it visible.*
