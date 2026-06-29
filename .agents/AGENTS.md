# Project Rules & Design Context

## Design Context

This project has been set up with the Impeccable design system. Future development on this project must respect the following strategic and visual guidelines.

- **Register:** `brand` (marketing focus with interactive GRC tools)
- **Strategic Principles:**
  1. **Professional Authority:** Build trust with Indonesian State-Owned Enterprises (BUMN) and financial institutions using solid, authoritative structures that convey governance and risk mitigation expertise.
  2. **Interactive Engagement:** Leverage the interactive self-assessment and AI advisor to offer real value first, leading naturally to conversion at the contact intake form.
  3. **Restrained Modernity:** Embody a tech-forward dark interface through smooth animations and subtle ambient backlighting while avoiding standard SaaS "warm cream" templates or "hacker" neon tones.
- **Visual Palette:**
  - Primary Accent: BUMN Blue (`#0b4596`)
  - Secondary Accent: BUMN Gold (`#cca43b`)
  - Canvas / Background: Ink Navy (`#0b0f19`) and Deep Navy (`#0d1e3d`)
  - Main Typography: Off-White Slate (`#f3f4f6`)
- **Key Restrictions:**
  - No cream/sand/beige backgrounds.
  - No sketchy, hand-drawn SVG illustrations or over-rounded card layouts.
  - Avoid cyberpunk/hacker themes with green or purple neon.
  - Follow **The 10% Accent Rule** (BUMN Gold must cover <= 10% of any viewport).

For detailed visual rules, typography scales, and interactive component definitions, refer to [DESIGN.md](file:///C:/backup/Daya-Solusi-Integra/DESIGN.md) and [PRODUCT.md](file:///C:/backup/Daya-Solusi-Integra/PRODUCT.md).

---

# RTK - Rust Token Killer

**Usage**: Token-optimized CLI proxy (60-90% savings on dev operations)

## Meta Commands (always use rtk directly)

```bash
rtk gain              # Show token savings analytics
rtk gain --history    # Show command usage history with savings
rtk discover          # Analyze Claude Code history for missed opportunities
rtk proxy <cmd>       # Execute raw command without filtering (for debugging)
```

## Installation Verification

```bash
rtk --version         # Should show: rtk X.Y.Z
rtk gain              # Should work (not "command not found")
which rtk             # Verify correct binary
```

⚠️ **Name collision**: If `rtk gain` fails, you may have reachingforthejack/rtk (Rust Type Kit) installed instead.

## Hook-Based Usage

All other commands are automatically rewritten by the Claude Code hook.
Example: `git status` → `rtk git status` (transparent, 0 tokens overhead)

Refer to CLAUDE.md for full command reference.
