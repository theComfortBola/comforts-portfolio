# Global Design Rule
> Applies to every project. Always active. Never override.

---

## The Non-Negotiable

Every interface you build must have a clear, intentional aesthetic direction before a single line of CSS is written. If there is no design spec, no Figma export, and no design skill file — stop and ask. Do not invent a visual direction without instruction.

---

## Design Tokens — Always

- Every colour, font, size, spacing value, radius, shadow, and animation duration must come from a `tokens.css` file or equivalent.
- Never hardcode a value that belongs in a token. No `color: #C9A84C` in a component. No `border-radius: 8px` scattered through files.
- If a token doesn't exist for what you need — flag it. Do not invent a value.

---

## Never Generate Generic AI UI

This is the most important rule on this list.

Generic AI UI looks like:
- Purple or blue gradients on white backgrounds
- Inter, Roboto, or system fonts as the primary typeface
- Cards with identical border-radius on everything
- Hero sections with centred headline + one CTA button + stock image
- Glass morphism on dark backgrounds
- Layouts that look like a Tailwind starter template

Every project has a specific aesthetic direction. Build to that. If you don't know what it is — ask before building.

---

## Responsive Design Is Not Optional

Every component must work at these breakpoints minimum:
- 375px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (wide)

Test at all four before considering anything done. No horizontal scroll. No broken layouts. No text overflow.

---

## Typography Rules

- Always pair a display font with a body font. Never use one font for everything.
- Heading hierarchy must be correct: one H1 per page, H2 → H3 in order. Never skip levels.
- Body text line height: minimum 1.6. Long-form reading: 1.75.
- Large display text: tight letter spacing (-0.02em to -0.04em).
- Never use font sizes below 14px for readable text.

---

## Colour Rules

- Every project needs: a background colour, a text colour, at least one accent colour.
- Dominant colour + sharp accent outperforms evenly distributed palettes every time.
- Always check contrast. Text on background must meet WCAG AA minimum (4.5:1 for body text).
- Never use colour as the only way to communicate meaning (error states need icons or text too).

---

## Spacing

- Use a spacing scale. Never use arbitrary pixel values.
- Whitespace is intentional. When in doubt — add more, not less.
- Consistent padding within components. Consistent gaps between components.

---

## Shadows

- Shadows should be warm-toned and soft. Never cold grey.
- Use shadows to create depth, not decoration.
- Maximum 2 shadow levels in use at any one time (e.g. card shadow + raised shadow).

---

## Images

- Never stretch an image. Always `object-fit: cover` with a defined aspect ratio.
- Always define `width` and `height` to prevent layout shift.
- Always include descriptive `alt` text — not "image" or empty.
- Lazy load everything below the fold. Eager load hero/above-fold images.

---

## Accessibility Basics (Every Project)

- All interactive elements must be keyboard-navigable.
- All images must have `alt` text.
- Colour contrast must pass WCAG AA.
- Focus states must be visible — never `outline: none` without a replacement.
- Heading hierarchy must be correct.
- Forms must have labels (visible or accessible).

---

## Performance Baseline (Every Project)

- Only animate `transform` and `opacity`. Never animate layout properties.
- Always include `prefers-reduced-motion` media query.
- Fonts: use `font-display: swap`.
- No blocking scripts in `<head>`.
- Images: lazy load below fold, defined dimensions always.
- Question every new dependency. Can it be done without it?

---

## Before You Call Anything Done

Ask yourself:
- Does it match the design spec?
- Does it work on mobile?
- Are all values coming from tokens?
- Is the contrast accessible?
- Are images optimised and correctly sized?
- Does it look like something a human designer made — or like AI generated it?

If the answer to that last question is uncertain — it's not done.
