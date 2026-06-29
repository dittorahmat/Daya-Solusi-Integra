---
name: Daya Solusi Integra
description: Sovereign IT & GRC Consulting visual system
colors:
  primary: "#0b4596"
  secondary: "#cca43b"
  neutral-bg: "#0b0f19"
  neutral-dark: "#0d1e3d"
  neutral-light: "#f3f4f6"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-light}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "#2563eb"
  button-secondary:
    backgroundColor: "#0f172a"
    textColor: "#e2e8f0"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  card-glass:
    backgroundColor: "rgba(15, 23, 42, 0.65)"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Daya Solusi Integra

## 1. Overview

**Creative North Star: "The Sovereign Lighthouse"**

"The Sovereign Lighthouse" represents structured corporate authority, utilizing a deep navy canvas, stark white typography, and gold accentuation to guide Indonesian enterprises through GRC and regulatory compliance. The design system is constructed to evoke immediate trust and stability, critical for State-Owned Enterprises (BUMN) and financial sector institutions. By combining deep, stable background tones with highly precise, glowing interactive structures, the system mirrors the absolute clarity and assurance required in governance.

This visual system explicitly rejects consumer-SaaS aesthetics. It refuses warm, saturated "cream/sand/beige" backgrounds, which read as generic and informal. It also rejects overstimulating "hacker/cyberpunk" dark modes that use high-contrast neon greens or purples, as well as amateurish styling like sketchy illustrations or over-rounded buttons. Every element is designed with restraint and executive-level seriousness.

**Key Characteristics:**
- **Sovereign Dark Canvas**: A stable, high-contrast dark color palette optimized for reading corporate assessments and consulting data.
- **Structured Geometry**: Rectilinear layouts, thin boundaries, and intentional border radiuses (12px–16px) that convey governance and control.
- **Executive Focus**: Every accent color, transition, and hover state is deliberate, ensuring the user's attention is guided directly to key assessments and actionable items.

## 2. Colors

The color palette is derived directly from Indonesian BUMN corporate branding, combining authority with modern compliance.

### Primary
- **BUMN Blue** (`#0b4596`): Used for primary branding elements, headers, logos, and high-priority action buttons. It signifies state-owned stability, corporate trustworthiness, and institutional compliance.

### Secondary
- **BUMN Gold** (`#cca43b`): An accent color used selectively to highlight metrics, scores, key headers, and state indicators. It conveys premium prestige and points of critical interest.

### Neutral
- **Ink Navy** (`#0b0f19`): The default page background. A solid, deep neutral that avoids pure black to maintain a premium feel.
- **Deep Navy** (`#0d1e3d`): Used for container backgrounds, panel divisions, and secondary surfaces.
- **Off-White Slate** (`#f3f4f6`): The primary typography color, ensuring a minimum contrast ratio of 7:1 against Ink Navy for maximum readability.
- **Muted Slate** (`#94a3b8`): Used for body text, descriptive labels, and helper text. Always styled to maintain a minimum 4.5:1 contrast ratio.

### Named Rules
**The 10% Accent Rule.** The secondary accent (BUMN Gold) must cover no more than 10% of any single viewport surface. Its role is strictly to guide the eye to achievements, scores, or active interactive highlights.
**The No-Fad-Neutrals Rule.** Backgrounds must never transition into warm neutral creams or warm grays. The canvas must remain anchored in clean, cool deep navy.

## 3. Typography

**Display Font:** Space Grotesk (with sans-serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui, sans-serif fallbacks)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallbacks)

**Character:** The juxtaposition of Space Grotesk's geometric structure for headers with Inter's clean, neutral readability for body text creates a corporate-authoritative and highly professional voice, optimized for reading dense compliance reports.

### Hierarchy
- **Display** (Bold (700), `clamp(2.5rem, 6vw, 4rem)`, Line Height: 1.1): Used exclusively for main hero section headers and landing page entry points. Letter spacing is set to `-0.02em` to keep the letters tight but not touching.
- **Headline** (Bold (700), `1.875rem` (30px) to `2.25rem` (36px), Line Height: 1.2): Used for primary section titles (e.g., Services, Assessment, Contact). Styled with `text-wrap: balance`.
- **Title** (Semi-Bold (600), `1.25rem` (20px) to `1.5rem` (24px), Line Height: 1.3): Used for cards, modal titles, and individual checklist items.
- **Body** (Regular (400) or Light (300), `1rem` (16px), Line Height: 1.6): Used for all prose, descriptions, and paragraphs. Maximum line length is strictly capped at `75ch` to ensure readability.
- **Label** (Medium (500) or Semi-Bold (600), `0.75rem` (12px), Letter Spacing: `0.05em`, uppercase): Used for tags, mono indicators, metadata, and status badges.

### Named Rules
**The Balancer Rule.** All h1, h2, and h3 headings must utilize `text-wrap: balance` to prevent awkward line breaks on medium viewports.
**The Prose Cap Rule.** Any paragraph of text must have a max-width of `max-w-2xl` or `75ch` to prevent layout-induced cognitive strain during reading.

## 4. Elevation

The system is flat-by-default, utilizing layered tonal surfaces and subtle glass panels with thin borders rather than deep or heavy drop shadows.

### Shadow Vocabulary
- **Ambient Glow** (`box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.7)`): Used only on glass panel hover states, accompanied by a border-color transition to highlight interactive elements.
- **Focus Glow** (`box-shadow: 0 0 0 2px rgba(11, 69, 150, 0.4)`): Used for keyboard focus rings.

### Named Rules
**The Flat-By-Rest Rule.** Interactive elements (cards, inputs, and buttons) must remain flat and shadowless at rest. Elevation changes and ambient shadows are applied only dynamically in response to hover or focus states.

## 5. Components

### Buttons
- **Shape:** Rounded-xl (12px radius).
- **Primary CTA:** Background gradient from BUMN Blue (`#0b4596`) to Royal Blue (`#1d4ed8`), with a crisp border of `rgba(255,255,255,0.1)`. On hover, the background transitions to `from-blue-600 to-blue-800`.
- **Secondary CTA:** Background `slate-900` at rest, transitioning to `slate-800` on hover. Border is a solid `border-slate-800` at rest, hover `border-slate-700`.
- **States:** Transition duration is set to `200ms` using `cubic-bezier(0.4, 0, 0.2, 1)`. Focus states must exhibit a clear focus outline.

### Chips / Status Badges
- **Style:** Background `rgba(11, 69, 150, 0.2)` with text color BUMN Blue (`#0b4596`) for information. For warning or alert states, background `rgba(204, 164, 59, 0.1)` with text color BUMN Gold (`#cca43b`).
- **Typography:** Uses JetBrains Mono uppercase, 12px font size, tracked.

### Cards / Containers
- **Corner Style:** Rounded-2xl (16px radius) or Rounded-3xl (24px radius) for featured layouts.
- **Background:** Tonal dark panels (`bg-slate-900/30`) or glass panels (`glass-panel`).
- **Border:** Strict thin border `1px solid rgba(255, 255, 255, 0.08)`. No borders thicker than 1px.
- **Internal Padding:** `24px` (`p-6`) on mobile, scaling up to `32px` (`p-8`) on desktop.

### Inputs / Fields
- **Style:** Background `bg-slate-950/80` or `bg-slate-900/50`. Border is `1px solid rgba(255,255,255,0.08)`. Radius is 12px (`rounded-xl`).
- **Focus:** Border transitions to BUMN Blue (`#0b4596`) with a subtle blue outer focus ring.
- **Error:** Border transitions to Red/Rose (`#f43f5e`) with supporting error text in Red/Rose.

### Navigation
- **Style:** Sticky top-bar header with `bg-[#0b0f19]/80` and `backdrop-blur-md` plus a bottom border `1px solid border-slate-800`.
- **Desktop Links:** Enclosed in a capsule wrapper with background `slate-900/50`. Active item has background gradient from BUMN Blue to Royal Blue with white text.

## 6. Do's and Don'ts

### Do:
- **Do** maintain a minimum of 4.5:1 color contrast for all body and label text, and 7:1 for headers.
- **Do** wrap long headers in `text-wrap: balance` to prevent awkward line wrapping.
- **Do** use BUMN Gold (`#cca43b`) selectively to draw focus to achievements, scores, or primary calls to action.
- **Do** respect the user's `@media (prefers-reduced-motion: reduce)` system setting by disabling scroll and transition animations.

### Don't:
- **Don't** use standard SaaS clichés (no cream/sand warm-neutral backgrounds, no tiny tracked uppercase kicker eyebrows above every section).
- **Don't** use amateurish styling (no sketch/doodle-style SVG illustrations, no over-rounded cards or side-stripe borders).
- **Don't** use typical "hacker/cyberpunk" dark mode (no green-on-black or bright neon overrides that feel unprofessional to corporate clients).
- **Don't** pair 1px borders with large drop shadows (shadows greater than 16px blur) on the same element. Pick either a clean border or a subtle shadow, never both.
- **Don't** use gradient text containing three or more colors or generic rainbow profiles. Keep typography solid and readable.
- **Don't** use side-stripe borders (e.g. `border-left-4` as an accent) on cards or alerts.
