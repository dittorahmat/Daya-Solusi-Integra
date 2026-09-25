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

## Mandat Wajib Domain & Identitas Resmi (SEO & Brand)
- **Domain Resmi Perusahaan:** `https://dsintegra.co.id` (Bukan `dayasolusiintegra.com` atau domain dummy lainnya).
- **Semua URL SEO, Canonical, Sitemap, Robots.txt, dan Schema.org JSON-LD WAJIB menggunakan basis:** `https://dsintegra.co.id/`.
- **Surel Resmi Marketing / Lead:** `marketing@dsintegra.co.id` / `no-reply@dsintegra.co.id`.
- **Nama Produk Software:** `GRC Integra` (Platform Lifecycle ICOFR BUMN berbasis SK-5/DKU.MBU/11/2024).

## Mandat Wajib Frontend: Skill `design-taste-frontend` (Anti-AI Slop)
Setiap agen, subagen, atau pengembang yang melakukan **penambahan, perbaikan, refaktor, atau modifikasi komponen frontend** di repositori ini **WAJIB** merujuk dan mematuhi aturan skill [`design-taste-frontend`](file:///C:/backup/Daya-Solusi-Integra/.agents/skills/design-taste-frontend/SKILL.md) guna menjamin UI tidak terlihat seperti *AI-slop* / template generik:
1. **Brief Inference & Dials Lock:** Sebelum mengubah kode UI, deklarasikan *Design Read* (B2B Regulated Corporate & GRC Platform) dan kalibrasi dial: `DESIGN_VARIANCE: 4`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5`.
2. **Larangan Keras AI Slop Tells (Section 9):**
   - **Zero Em-Dash (`—` / `–`):** Dilarang keras menggunakan em-dash atau en-dash di seluruh teks UI, judul, pill, badge, maupun konten markdown.
   - **No Fake OS Window Chrome:** Dilarang membuat tiruan window controls/traffic lights macOS palsu (tiga titik merah/kuning/hijau) di dalam card/preview.
   - **No Tri-color Rainbow Gradients:** Dilarang menggunakan gradien teks multi-warna generik (misal: ungu-biru-emas sekaligus). Gunakan warna solid BUMN Blue (`#0b4596`) atau aksen BUMN Gold (`#cca43b`).
   - **No Decorative Unmotivated Pulse Dots:** Dilarang meletakkan dot berkedip (`animate-pulse`) sebagai dekorasi murni tanpa ada status sistem nyata.
   - **No Sparkles Chatbot Clichés:** Dilarang merepresentasikan asisten/konsultan dengan ikon sparkles generic AI atau gimmick kosmetik. Gunakan visual berwibawa berorientasi kepatuhan (*governance/shield*).
   - **No Janky Scroll Listeners (Section 5.D):** Dilarang memakai `window.addEventListener("scroll", ...)` langsung. Wajib menggunakan `IntersectionObserver` atau Motion `useScroll()`.
3. **Pre-Flight Verification (Section 14):** Jalankan seluruh checklist Pre-Flight Check sebelum menyelesaikan tugas dan pastikan `npm run lint` (`tsc --noEmit`) berhasil tanpa error.

For detailed visual rules, typography scales, and interactive component definitions, refer to [DESIGN.md](file:///C:/backup/Daya-Solusi-Integra/DESIGN.md) dan [PRODUCT.md](file:///C:/backup/Daya-Solusi-Integra/PRODUCT.md).

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
