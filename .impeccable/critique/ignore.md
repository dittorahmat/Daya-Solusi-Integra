# Detector Ignore List

These detector findings are confirmed false positives for this project and should be silently dropped on future critique runs.

## overused-font: Inter (src/index.css line 1)
Inter is the explicitly designated body font per DESIGN.md. It is not a drift; it is the design system's documented choice.

## design-system-color: rgba(255, 255, 255, 0.08) (src/index.css line 29)
This is the standard glass panel border token documented in DESIGN.md under Cards/Containers: "Strict thin border `1px solid rgba(255, 255, 255, 0.08)`."

## design-system-color: #1e293b (src/index.css line 60)
This is Slate-800, an approved neutral color within the project palette. It is used for the custom scrollbar thumb only. The detector flags it because it is declared as a raw hex value rather than a Tailwind class.

## design-system-radius: 4px (src/index.css line 61)
This is applied to the CSS scrollbar thumb (`::-webkit-scrollbar-thumb`), not a card or component. Scrollbar micro-UI commonly uses radii smaller than the 6px project floor. This is intentional for crisp scrollbar rendering.

## overused-font: Space Grotesk
Space Grotesk is the designated heading font family explicitly defined in DESIGN.md.

## nested-cards: Hero Visual Frame Mockup
The mockup is a simulated visual chart preview for branding representation, not a user-interactive dashboard nesting cards.

## gradient-text: Readiness Progress Bar
The gradient is a semantic progress track (blue to gold) indicating audit readiness levels, not decorative heading/text fills.

## bounce-easing / animate-bounce
Verified false positives on secondary UI indicators.

