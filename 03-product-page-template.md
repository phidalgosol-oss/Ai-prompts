# Product Page Architecture
## The Skeleton That Scales to Fifty Pages

**Use this when:** You're building a portfolio with multiple products. You want every page to feel like it belongs together. You don't want to redesign each page from scratch.

**Time to use:** ~2 minutes to learn the structure, then apply to each product

**What you get:** One structure. Infinite products. Coherence automatic.

---

## The Problem

You're designing product pages one at a time:

- Page 1: Looks great
- Page 2: Different layout, different hierarchy
- Page 3: Completely different direction

By page 5, visitors can't tell if they're on the same website.

You redesign for consistency. Now they match, but they're generic. Nobody feels distinctive.

You can't win because you're designing each page in isolation.

---

## The Solution

**See the skeleton. Fill it forever.**

Every product page has the same 7 parts, in the same order:

```
1. HERO — Full-bleed image (product or material macro)
2. HEADLINE — 1-line poetic statement about this product
3. TEXTURE LAYER — 20% opacity background texture overlay
4. PRODUCT SHOT — Product image 40% opacity, layered over texture
5. COPY — 2-3 sentences, sensory not technical
6. ACCENT BAR — Product category color (sage for skincare, gold for luxury, etc.)
7. CTA — Subtle button ("Learn more", "Add to cart", etc.)
```

That's it. Same structure. Different products. Instant family resemblance.

---

## The Skeleton in Detail

### 1. HERO
**What:** Full-bleed background image  
**How:** Macro photography (materials, close-up product, texture)  
**Why:** Stops the scroll. Sets emotional tone.  
**Size:** 1200px wide × 600px tall (16:9 landscape, responsive)

### 2. HEADLINE
**What:** One line. Poetic, not descriptive.  
**Examples:**
- "Where fibers learn their strength"
- "Clinical precision, sensory pleasure"
- "German engineering meets tropical care"

**Why:** Tells the *story*, not the specs.  
**Length:** Max 10 words

### 3. TEXTURE LAYER
**What:** Semi-transparent background texture overlay (20% opacity)  
**How:** Use your brand texture (crosshatch, linen, noise, etc.)  
**Why:** Adds depth without competing with product  
**Size:** 100% width, sits behind product image

### 4. PRODUCT SHOT
**What:** Clear product photo, 40% opacity, layered over texture  
**How:** High-quality product photography, no background  
**Why:** Shows the actual thing while keeping focus on copy/headline  
**Size:** 300px wide (scales responsively), right or left side

### 5. COPY
**What:** 2-3 sentences describing *feeling*, not ingredients  
**Examples:**
- "Woven from natural proteins. Each strand becomes unbreakable through connection."
- "Transparency isn't a promise. It's proof."
- "German formulation. Costa Rican care. No compromise."

**Why:** People buy feelings, not specs. Specs come after trust.  
**Length:** 25-50 words

### 6. ACCENT BAR
**What:** Horizontal color bar matching product category  
**How:** Use your palette (sage, teal, gold, charcoal)  
**Why:** Visual break + category signal  
**Height:** 4-8px, full width

### 7. CTA
**What:** One primary button or link  
**Text options:**
- "Learn more"
- "Add to cart"
- "Read the story"
- "See the science"

**Why:** One action per page. Clarity.  
**Style:** Your primary button color (from CSS Fix Everything)

---

## Visual Layout

```
┌─────────────────────────────────────────┐
│                                         │
│       [HERO - Full Bleed Image]         │  ← 1. HERO (macro photo)
│                                         │
└─────────────────────────────────────────┘

       [2. HEADLINE - One Poetic Line]

┌──────────────────────────────┬──────────┐
│  [Texture 20% opacity]       │ Product  │
│  [3. TEXTURE LAYER]          │ Image    │
│                              │ 40%      │ ← 4. PRODUCT SHOT
│  [5. COPY - 2-3 sentences]   │ opacity  │
│  Sensory, not technical.     │          │
│  Sets the feeling.           │          │
└──────────────────────────────┴──────────┘

│████████████████████████████████████████│  ← 6. ACCENT BAR (color)

        [7. CTA - One Button]
        Add to Cart / Learn More
```

---

## Real Example

**Product: Balea Hair Mask**

```
1. HERO
   → Macro photo of honey + silk fibers backlit by warm light
   → Iridescent highlights, shallow depth of field

2. HEADLINE
   → "Where protein becomes repair"

3. TEXTURE LAYER
   → Sage crosshatch, 20% opacity

4. PRODUCT SHOT
   → Balea bottle, 40% opacity, positioned right
   → Layered over texture

5. COPY
   → "Hydrolyzed keratin rebuilds every fiber. K18 costs 4x more and works 
      the same. We respect your hair and your budget."

6. ACCENT BAR
   → Sage green (your hair category color)

7. CTA
   → "Add to cart"
```

Result: **Fills in 2 minutes. Feels like it belongs in a luxury collection.**

---

## How to Implement

### Using HTML/CSS

```html
<article class="product-page">
  
  <!-- 1. HERO -->
  <div class="hero" style="background-image: url('hero.jpg')"></div>
  
  <!-- 2. HEADLINE -->
  <h1 class="headline">Where protein becomes repair</h1>
  
  <!-- 3-5. PRODUCT SECTION -->
  <section class="product-section">
    <div class="texture-layer"></div>
    
    <div class="content">
      <img class="product-shot" src="product.png" alt="Balea Hair Mask">
      <p class="copy">Hydrolyzed keratin rebuilds every fiber...</p>
    </div>
  </section>
  
  <!-- 6. ACCENT BAR -->
  <div class="accent-bar" style="background: #C9D4C0;"></div>
  
  <!-- 7. CTA -->
  <button class="cta-primary">Add to cart</button>
  
</article>
```

### Using a CMS or Template

Ask Claude:

```
GENERATE PRODUCT PAGE: Use the architecture below

Hero image: [URL to macro photo]
Headline: [Your 1-line statement]
Product image: [URL to product photo]
Copy: [Your 2-3 sensory sentences]
Category color: [hex code]
CTA text: [Button label]

Use this structure:
1. Full-bleed hero
2. Headline (1 line, max 10 words)
3. Texture layer 20% opacity
4. Product shot 40% opacity, layered
5. Copy (2-3 sentences, sensory)
6. Color accent bar
7. CTA button

Generate the HTML/CSS/React code for this product page.
```

Claude outputs: Ready-to-use code in your preferred format.

---

## Why This Works

**1. Constraint creates coherence**  
Every page uses the same structure → they feel like a family.

**2. Fills fast**  
Once you see the skeleton, filling it takes 2-3 minutes per product.

**3. Scalable**  
Works for 5 products. Works for 50. Works for 500.

**4. Flexible within structure**  
Headline changes. Copy changes. Image changes. Structure stays.

**5. Designer-independent**  
You don't need a designer. The skeleton *is* the design.

---

## Variations (Same Structure, Different Voices)

### Variation A: Luxury
```
Hero: Macro beauty shot (gold light, premium feel)
Headline: Poetic, aspirational
Copy: Sensory, emotional
CTA: "Discover"
```

### Variation B: Direct-to-Consumer
```
Hero: Lifestyle shot (person using product)
Headline: Problem statement ("Frizz ends here")
Copy: Solution + proof
CTA: "Add to cart"
```

### Variation C: Scientific
```
Hero: Ingredient macro (molecular, clinical)
Headline: Ingredient benefit ("3 actives, 1 mission")
Copy: How it works + why it matters
CTA: "Learn the science"
```

**Same skeleton. Different tone. All coherent.**

---

## Common Questions

**Q: Do all products need the same exact image size?**  
A: No. Responsive design handles it. Use the skeleton percentages (40% opacity for product) and let CSS scale.

**Q: Can I skip the texture layer?**  
A: You can, but it adds depth. Even a subtle grain or crosshatch improves it.

**Q: What if my product images aren't perfect?**  
A: The 40% opacity trick helps. Imperfect images at 40% opacity read as intentional. 100% opacity exposes every flaw.

**Q: Can I change the order?**  
A: Not really. This order exists because it works:
- Hero hooks attention
- Headline explains *why*
- Texture + product build trust
- Copy closes the loop
- Accent bar signals category
- CTA is the ask

Reordering breaks the flow.

---

## Next Steps

1. **Pick your first product**
2. **Gather:** hero image, headline, product photo, 2-3 sentence copy, category color
3. **Fill the template** (takes ~5 minutes)
4. **Save as a component/template**
5. **Repeat for product 2-50**

By product 5, you'll have 50 pages that feel like one voice.

---

*This skeleton emerged from building DxVida's portfolio. First page took forever. Second page was faster. By page five, I realized the structure was doing the work. Now fifty pages feel like one voice.*
