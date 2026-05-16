# Animation Skill
> How things move on this portfolio. Performance is non-negotiable.

---

## Philosophy

Animation should feel inevitable — like the page is alive, not performing. Every motion should have a reason. If you can't explain why something moves, remove it.

---

## Performance Rules (Non-Negotiable)

- **Only animate `transform` and `opacity`.** Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` — these trigger layout reflow and kill performance.
- Always use `will-change: transform` on elements with ongoing animations.
- Respect `prefers-reduced-motion`. Wrap all animations:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- No animation should run longer than 600ms unless it's a page transition.
- Use `ease-out` for entrances. `ease-in` for exits. Never use linear on UI.

---

## Approved Animation Patterns

### Scroll Reveals
Elements fade + slide up as they enter the viewport.
```css
/* Initial state */
opacity: 0;
transform: translateY(24px);

/* Revealed state */
opacity: 1;
transform: translateY(0);
transition: opacity 0.5s ease-out, transform 0.5s ease-out;
```
Use IntersectionObserver. Never scroll listeners.

### Hover Lifts (Cards)
```css
transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;

&:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Page Load Stagger
Stagger entrance of hero elements with `animation-delay`. Max 3 elements staggered. Beyond that it feels slow.

### Link / Button Hover
Underline slides in from left. Color transitions to gold.

### Image Hover
Subtle scale: `transform: scale(1.03)`. Always with `overflow: hidden` on parent.

---

## What You Must Never Do

- No bouncy spring animations on professional UI elements.
- No rotation animations on text.
- No animations that block interaction (always use `pointer-events` carefully).
- No looping animations on above-the-fold content unless explicitly requested.
- No JavaScript animation libraries unless CSS cannot achieve it. If you must use JS, use GSAP — nothing else.
