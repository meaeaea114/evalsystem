Enhance this React 19 + Tailwind CSS v4 internal login-gate component for "The Last Salle 
University" Evaluation System with a cohesive, restrained animation system. This is a 
functional auth gate, not a marketing showcase — animation should support usability, 
not decorate for its own sake. Every animation must have a defined start/end (no infinite 
loops, no ambient/floating motion) and must respect prefers-reduced-motion (fall back to 
instant state changes, no motion at all).

ANIMATION SYSTEM — use one consistent easing curve and duration scale throughout:
- Easing: ease-out for entrances, ease-in-out for hover/interactive transitions.
- Duration scale: 150ms (micro-interactions: hover, focus), 250ms (button state changes), 
  400ms (card/element entrance on mount). Do not exceed 500ms for any single animation — 
  this is a login gate, users should not wait on motion.

SPECIFIC ANIMATIONS TO IMPLEMENT:
1. Page load sequence (staggered, total under 600ms):
   - Top bar wordmark + badge fade/slide in first (0ms delay).
   - Background diagonal block subtly fades/scales in (50ms delay).
   - Card fades in + translates up ~12px (150ms delay), settles with ease-out.
2. Button interaction states:
   - Hover: background shifts sage-500 → sage-700, 150ms ease-in-out, optional 1-2px 
     lift via subtle box-shadow increase (no scale-up, keep it subtle).
   - Active/pressed: quick scale-down (~0.98), 100ms, immediate tactile feedback.
   - Focus-visible: ring appears with a soft transition (not instant snap), 150ms.
3. Footer copyright: simple fade-in, delayed slightly after card (200ms after card settles), 
   very subtle — this is the lowest-priority element, don't over-animate it.
4. Optional micro-detail: badge ("EVALUATION SYSTEM") could have a very subtle pulse-once 
   on mount (single pulse, not looping) to draw the eye — only include if it doesn't 
   compete with the card entrance for attention.

EXPLICITLY DO NOT:
- Add looping/infinite animations anywhere (no floating shapes, no ambient gradient shifts, 
  no pulsing backgrounds that never stop).
- Animate more than one major element simultaneously in a way that feels chaotic — 
  stagger, don't stack.
- Use bounce/elastic easing — this is an institutional tool, motion should feel precise 
  and calm, not playful.
- Add motion to body copy or eyebrow text — only structural elements (bar, background, 
  card, button, footer) animate.

CONSTRAINTS:
- Implement via Tailwind CSS v4 transition utilities + CSS keyframes where needed (inline 
  <style> or Tailwind config extension, whichever is cleaner — output working code).
- Respect prefers-reduced-motion: reduce media query — all animations become instant 
  (0ms) or are skipped entirely when this is set.
- No animation libraries (no framer-motion, no GSAP) — pure CSS/Tailwind only, keep 
  bundle size down.
- Functional component, same export/import pattern as prior version.
- Output full updated component code.