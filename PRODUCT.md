# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Indonesian State-Owned Enterprises (BUMN / BUMD), regulated commercial & regional banks (OJK/BI oversight), internal audit heads (SPI), IT Directors, and compliance/risk managers evaluated by BPK / BPKP auditors.

## Product Purpose

An authoritative corporate web application and interactive compliance platform for Daya Solusi Integra (DSI) that showcases GRC, IT General Controls (ITGC), and ICOFR consulting services while delivering real-time value through an interactive COSO maturity assessment wizard and AI Executive Advisor, driving high-trust lead intake.

## Positioning

Indonesian enterprise GRC & ICOFR consultancy specializing in BUMN corporate governance (GCG) and banking regulatory compliance, delivering board-ready audit readiness scorecards without generic SaaS tropes or superficial advisory claims.

## Operating Context

Evaluated by BUMN Risk Committees, Audit Committees, and bank executives during compliance reviews, pre-audit readiness checks, and IT governance restructuring. Outputs must support executive printing (`@media print`) for physical board distribution and strict NDA privacy guarantees.

## Capabilities and Constraints

- **Capabilities:** Interactive 10-step COSO/ICOFR self-assessment with real-time scoring, auto pre-filling to lead intake forms, AI Executive Report generation (`/api/assess`), interactive GRC AI Consultant drawer (`/api/chat`), glossary tooltips, responsive mobile navigation drawer, and print-optimized Executive Scorecard.
- **Technical Constraints:** Built with React 19, TypeScript, Vite, Tailwind CSS v4, Express Node backend server (`server.ts`), sessionStorage persistence, strict WCAG AA contrast (≥4.5:1), and `@media (prefers-reduced-motion)` support.

## Brand Commitments

- **Tone:** Sovereign, corporate-authoritative, trustworthy, tech-forward, and deeply professional.
- **Palette:** BUMN Blue (`#0b4596`), BUMN Gold (`#cca43b`), Ink Navy (`#0b0f19`), Deep Navy (`#0d1e3d`), and Slate typography.
- **Strict Visual Rules:** Strict 10% Accent Rule for BUMN Gold, no cream/sand backgrounds, no sketch/doodle SVGs, no side-stripe card borders, no cyberpunk/neon tones, and no unchosen kicker eyebrows.

## Evidence on Hand

- Verified COSO Internal Control 5-dimension assessment framework data (`src/data.ts`).
- Official corporate logo asset (`assets/dsi-logo-removebg-preview.png`).
- Board-ready print stylesheet (`@media print`) converting web UI into clean white-paper scorecards.

## Product Principles

1. **Sovereign Authority:** Build immediate trust with Indonesian state enterprises and financial institutions through authoritative, structured layouts that reflect deep regulatory expertise.
2. **Interactive Value First:** Offer tangible utility through self-assessments and AI advisory before intake, leading naturally to high-converting consultation requests.
3. **Restrained Modernity:** Embody a tech-forward dark interface with smooth micro-animations and ambient backlighting while maintaining corporate restraint.
4. **Data Continuity & Utility:** Ensure seamlessly connected workflows (Assessment → AI Report → Contact Intake → Board Printout) with zero data loss or friction.

## Accessibility & Inclusion

- WCAG AA compliant contrast (≥4.5:1 body/placeholder, ≥7:1 headers).
- Full keyboard navigation (numeric option keys `1`-`4`, `Ctrl + /`, `Esc` drawer dismissals, arrow key radiogroup controls).
- Focus trapping in mobile menu & AI drawers with return-focus restoration.
- `@media (prefers-reduced-motion: reduce)` support across all CSS transitions.
