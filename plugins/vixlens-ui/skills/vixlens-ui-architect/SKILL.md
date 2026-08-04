---
name: vixlens-ui-architect
description: >
  Architect premium web interfaces for the Vixlens ecosystem. Use this skill whenever
  the user asks to design, code, or iterate on landing pages, components, homepages, headers,
  or subpages for Vixlens, Freevix, Reflecta or any product from the Vixlens line.
  This skill transforms design tokens and wireframe specifications into production-ready
  React + Tailwind CSS code, always faithful to the Vixlens Design System.
---

# Vixlens UI Architect — Premium Interface System

You have access to the absolute branding tokens, assets, and design files of Vixlens. Your job is to enforce visual authority, flawless layout flows, and high-end clean institutional components aligned with the Vixlens Design System.

> **Single source of truth:** the live Design System at **https://ds.vixlens.com.br**. Every token below is mirrored there. When in doubt, the deployed DS wins over any hardcoded value in this file.
>
> **⚠️ Always align to the live DS:** never pin a version here — the source of truth is always whatever `ds.vixlens.com.br` serves right now. Before applying anything, confirm against the live DS; if the numbers in this file disagree, **the live DS wins**. Treat every hardcoded token here as a snapshot that can go stale — never ship values from this file without checking they still match the live DS.

## 1. Core System & Environment
- **Target Tech Stack:** React, Tailwind CSS, **shadcn/ui** (component base — https://ui.shadcn.com), Framer Motion, Phosphor Icons.
- **Component base:** build interactive components (Button, Input, Card, Dialog, Tabs, etc.) on **shadcn/ui**, restyled to the Vixlens tokens — never ship shadcn defaults. Map shadcn's CSS variables to the Vixlens tokens (`--vix-*`): primary → Preto/Amarelo, radius → the shape tokens (32/32/24/12), etc. Compose and skin; don't reinvent primitives.
- **Output target:** if the work belongs to an existing project or repository, deliver **files in the project** and verify them in the dev server. Never package that as a self-contained page — doing so throws away the tokens and components the project already has. Reach for a **Claude Artifact** only when there is no project to write into: a quick mockup, exploring variants side by side, or something to show someone who will not run code.

## 2. Brand Design Tokens (Strict Compliance)
You must explicitly map every generated class to the exact HEX tokens specified in the Vixlens Design System:

| Token Name | Value / HEX Code | Tailwind Utility Mapping |
|---|---|---|
| **Main Canvas Background (Dark)** | `#1D1D1F` | `bg-[#1D1D1F]` (Dominant Black) |
| **Main Canvas Background (Light)** | `#FFFFFF` | `bg-white` (Default page background) |
| **Section / Card Background** | `#F5F5F7` | `bg-[#F5F5F7]` (Never as dominant page color) |
| **Brand Yellow — CTA** | `#FAC617` | `bg-[#FAC617]` / `text-[#FAC617]` |
| **Brand Blue — Accent (~5%)** | `#0439D9` | `bg-[#0439D9]` / `text-[#0439D9]` |
| **Border / Placeholder Gray** | `#606F7F` | `border-[#606F7F]` / `text-[#606F7F]` |
| **Reflecta Blue Protect SH** | `#134B97` | Exclusive to Reflecta line materials |
| **Reflecta Guard** | `#00782D` | Exclusive to Reflecta line materials |
| **Reflecta Express** | `#92BB36` | Exclusive to Reflecta line materials (text must be black) |

> **Preto Vixlens is `#1D1D1F` — never `#000000` pure.** This is the documented DS token (`--preto`).
> **Yellow note:** the digital DS uses `#FAC617`. Some legacy logo asset files still carry `#FAC618` (Δ 1/255, imperceptible) — a known asset-side discrepancy being reconciled. For web output, always use `#FAC617`.

### Color Distribution Rule (60-30-10):
- **60%** — Black `#1D1D1F` and White `#FFFFFF` dominate all layouts
- **30%** — Yellow `#FAC617` for highlights, CTAs, and accent stripes
- **10%** — Blue `#0439D9` as last-resort accent only (badges, callouts, document headers)

### Support Callout Colors (dashboards and documents only):
| Type | Background | Bar |
|---|---|---|
| Highlight | `#FFFBEB` | `#FCD341` |
| Informative | `#EFEFFF` | `#615FFF` |
| Critical | `#FFF0F0` | `#FF6566` |
| Success | `#EDFBF4` | `#30D389` |

### Approved Color Combinations:
- Black / White → buttons, navigation, hero sections
- Yellow / Black → highlight stripes, labels (Yellow always requires black text)
- Blue / White → ~5% usage, documents and badges only
- White / Black → body text, default backgrounds

## 3. Typography Stack — Digital Only
### Font Import:
Always include the following CSS import at the top of your styling:
`@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@300;400;500;600;700;800&display=swap');`

### Font Family:
- **All digital elements:** `font-family: 'Host Grotesk', sans-serif;`
- Mont / Montserrat is reserved for printed documents (PDF, proposals, manuals) — never use it in web/React output.

### Type Scale (Host Grotesk):

| Group | Element | Desktop | Mobile | Weight | Line Height |
|---|---|---|---|---|---|
| Display | H1 | 96px | 48px | 700 | 100% |
| Display | H2 | 64px | 36px | 700 | 100% |
| Display | H3 | 48px | 28px | 700 | 100% |
| Section | H4 | 32px | 24px | 600 | 120% |
| Section | H5 | 24px | 20px | 500 | 120% |
| Section | H6 | 20px | 18px | 500 | 120% |
| Body | Paragraph | 18px | 16px | 400 | 150% |
| Body | Bold | 18px | 16px | 600 | 150% |
| UI | Label | 14px | 14px | 500 | — |
| UI | Caption | 12px | 12px | 400 | — |
| UI | Overline | 11px | 11px | 500 | — |

### Typography Critical Rules:
- **NEVER** use italic on any element — it is strictly forbidden
- **NEVER** use uppercase in running paragraphs
- **Uppercase is allowed only in:** logo, tagline, and callout labels
- **Maximum two weights** in the same text block
- **Underline** is reserved for links only — never as emphasis
- **Heavy/900 weight** is reserved for logo and display elements in printed documents — never in web

## 4. Shape Tokens (Border Radius)
Every component must follow the exact border-radius tokens from the Vixlens Design System (section "Tokens de forma", extracted from Figma Vixlens):

| Token | Value | Assigned Component |
|---|---|---|
| **Card** | `32px` | Cards and content blocks (luma `rounded-4xl`) |
| **Button** | `32px` | All buttons (luma `rounded-4xl`, near-pill) |
| **Input** | `24px` | Inputs, selects, popovers (luma `rounded-3xl`) |
| **Chip / Badge** | `12px` | Chips, tags, small badges |

> Never invent intermediate values. These four tokens are the only allowed border-radius values in the system.
>
> Authoritative source: `https://ds.vixlens.com.br/assets/tokens/vixlens-tokens.json` (`radius`). Fetch it before shipping — it is machine-readable and always current. The 57/30/12/6 set that used to live here was the pre-luma geometry and is retired; do not resurrect it.

## 5. Button System
There are only two button types. Maximum one primary button per section.

**Primary — Dark Background:**

```
className="bg-[#FAC617] text-[#1D1D1F] font-bold rounded-[32px] px-8 py-3.5 text-lg
hover:bg-[#E5A800] focus:ring-3 focus:ring-[#1D1D1F]"
```

**Primary — Light Background:**

```
className="bg-[#1D1D1F] text-[#F5F5F7] font-bold rounded-[32px] px-8 py-3.5 text-lg
hover:bg-[#333333] focus:ring-3 focus:ring-[#FAC617]"
```

**Secondary — Dark Background:**

```
className="border-2 border-white text-white bg-transparent rounded-[32px] px-[30px] py-3
hover:bg-white/10"
```

**Secondary — Light Background:**

```
className="border-2 border-[#1D1D1F] text-[#1D1D1F] bg-transparent rounded-[32px] px-[30px] py-3
hover:bg-[#1D1D1F]/5"
```

**Button States:**
| State | Primary Black | Primary Yellow |
|---|---|---|
| Hover | `#333333` + shadow | `#E5A800` |
| Focus | Yellow ring 3px | Black ring 3px |
| Disabled | `bg-[#E5E7EB]` `text-[#9CA3AF]` | same |

**Button Sizes:**
- Small → `text-sm` (14px)
- Default → `text-lg` (18px)
- Large → `text-xl` (20px)

## 6. Input System
All form fields follow these exact specs from the Vixlens Figma (partner registration form):

```
className="h-14 px-5 py-3.5 rounded-[24px] border border-[#606F7F]
focus:border-[#1D1D1F] focus:outline-none bg-white
text-[#1D1D1F] text-lg placeholder:text-[#606F7F]
disabled:bg-[#F9FAFB] disabled:text-[#D1D5DB]"
```

- **Height:** always 56px — never reduced
- **Border radius:** always 24px — never squared, never pill
- **Max width:** 400px in centered forms / 100% in full-width layouts
- **Background:** always white

## 7. Iconography — Phosphor Icons
Phosphor Icons is the only icon system for all UI, documents, and communications.

**Weights by context:**
- Regular → general UI (default)
- Bold → buttons and small text
- Fill → active states

**Standard sizes:**
| Size | Context |
|---|---|
| 16px | Inline / labels |
| 20px | Buttons / navigation |
| 24px | Default UI |
| 32px | Highlighted elements |
| 48px | Hero / illustrative |

**Color rules:**
- Dark backgrounds → white or yellow `#FAC617` icons
- Light backgrounds → black `#1D1D1F` or gray `#606F7F` icons
- Status icons follow dashboard colors: check-circle `#30D389`, warning `#FF6566`, info `#615FFF`, clock `#FCD341`
- **NEVER mix different weights on the same screen**

## 8. Brand Assets — Logos & Product Marks (Permanent Source)
> **UPDATED:** brand logos and product marks are now permanent, versioned files served from the live DS. Do NOT re-export ephemeral Figma URLs (the old `4003:799` / 7-day-expiry workflow is retired). Use the DS asset URLs directly.

**Base URL:** `https://ds.vixlens.com.br/assets/marca/<line>/<slug>.<ext>`
**Formats:** `svg` (web — always prefer), `png` (transparent raster), `pdf` (print/vector), `webp` (optimized web). All transparent; background is applied by your layout, never baked into the file.

**Naming convention (slug):**
- **Vixlens / Freevix (wordmark):** `<brand>-<variation>` — e.g. `vixlens-positivo`, `freevix-negativo`
- **Vix Academy:** `vix-academy-<horizontal|vertical>-<variation>`
- **Reflecta:** `reflecta[-<product>]-<level>-<variation>`
  - products: `guard` (green `#00782D`), `express` (green `#92BB36`), `blue-protect-sh` (blue `#134B97`); matrix omits the product segment
  - level: `completo` (mark + wordmark) · `reduzido` (wordmark only) · `simbolo` (symbol only)
- **Lens line (Freevix products):** `<product>-<horizontal|vertical>-<positiva|negativa>`
  - products: `vix-total`, `freevix-one`, `freevix-premium`, `freevix-freedom`, `freevix-ia-tech`, `freevix-vs-hd`, `freevix-relax`, `astera`, `freevix-deskview-1-3m`, `freevix-deskview-2m`, `freevix-office-ate-4m`

**Variation vocabulary:**
- `positivo` — colored mark (with yellow), for LIGHT background
- `negativo` — colored mark (with yellow/white), for DARK background
- `mono-positivo` — single-color dark, for LIGHT background
- `mono-negativo` — single-color white, for DARK background
- `cor` — Reflecta only: the product's brand color (symbol level)
- Lens line uses `positiva`/`negativa` (dark/white single-color signatures)

**Brand Kits (all formats of a line in one zip):** `https://ds.vixlens.com.br/assets/kits/<line>-brand-kit.zip` — lines: `vixlens`, `freevix`, `vix-academy`, `reflecta`, `lentes`.

**Example:** `https://ds.vixlens.com.br/assets/marca/reflecta/reflecta-guard-simbolo-cor.svg`

> The custom product-line SVG icons (Freevix, Reflecta, EssilorLuxottica, Vix Academy) used in Hero Cards live under `assets/icones/`. Never rasterize logos — use the SVG and manipulate `fill` in a React component layer.

## 9. Hero Card Component Blueprint (Product Line)
Product cards for Freevix, Reflecta, EssilorLuxottica, and Vix Academy use a frosted glass badge. This is the **only** place where a glass effect is permitted in the system:

```
className="w-[58px] h-[58px] rounded-[14px]
bg-[rgba(255,255,255,0.28)] border border-[rgba(255,255,255,0.46)]
backdrop-blur-[8px]"
```

- Icon always in white
- Never scale beyond 58×58px
- Hero cards use horizontal padding: `px-10` (40px) and vertical padding: `py-[60px]`

> **Contrast Guardrail:** When a hero card sits over a vivid background, inject a dark overlay layer (`bg-black/40`) behind critical text to maintain WCAG 4.5:1 contrast ratio.

## 10. Brand Component Routing Table
Analyze incoming structural layout files (like WIREFRAMES) and route interface elements according to their dedicated brand zones:

- **Hero / Header:** Centered layout, clean SVG logo (`vixlens-negativo` on dark bg / `vixlens-positivo` on light), floating navigation
- **Product Cards (Freevix + lens line):** Black canvas with yellow accent stripe, frosted glass badge. The lens line has 11 products (VixTotal, Freevix One/Premium/Freedom/IA Tech/VS HD/Relax, Astera, Deskview 1.3M, Deskview 2M, Office até 4M)
- **Product Cards (Reflecta line):** Use ONLY the corresponding Reflecta product color as accent — Guard `#00782D`, Express `#92BB36` (black text), Blue Protect SH `#134B97`. Never mix Reflecta colors on the same card
- **News / Academy sections (Vix Academy):** Yellow `#FAC617` callout stripes, black text, clean white cards
- **Forms / Partner Registration:** White background, gray borders `#606F7F`, black focus ring

## 11. Grid & Layout System (Premium Desktop)
- **Container / Max Width:** two layout tokens, pick by page type —
  - `container-produto` → `max-w-[1422px] mx-auto w-full` (Figma premium canvas; product and marketing pages)
  - `container-ds-site` → `max-w-[1100px] mx-auto w-full` (documentation, catalogues, internal tools — the DS site itself uses this)
- **Section Padding:** `px-16` lateral (64px) / `py-[72px]` to `py-[80px]` vertical
- **Card Gutters:** Always use 30px spacing (`gap-[30px]`) between cards
- **Alignment:** Never stretch content to raw screen edges. Respect the 1422px bounding box.

### Spacing Scale (Base 8px — Vixlens):
| Token | Value | Label |
|---|---|---|
| space-1 | 4px | Micro |
| space-2 | 8px | XS |
| space-3 | 12px | SM |
| space-4 | 16px | MD-SM |
| space-5 | 20px | MD |
| space-6 | 24px | MD-LG |
| space-7 | 30px | LG |
| **space-8** | **40px** | **XL — Anchor token** |
| space-9 | 48px | 2XL |
| space-10 | 60px | 3XL |
| space-11 | 64px | 4XL |
| space-12 | 80px | 5XL |

> **40px is the anchor token.** It is the default starting point for all component spacing. Internal gaps use the sub-scale (8, 12, 20, 24px). External margins use the larger scale (40, 60, 80px). **Never invent intermediate values like 35px or 45px.**

### Component Spacing Specs:
- Buttons → padding `14px × 32px`, height `48–56px`
- Inputs → height `56px`, padding `14px × 20px`
- Content cards → padding `60px × 83px`, internal gap `30px`
- Hero cards → padding `40px horizontal × 60px vertical`

## 12. Photography & Visual Direction
- **Style:** Real people in everyday contexts, ambient light, genuine expressions
- **Product in scene:** lenses with minimal reflection communicate AR treatment quality
- **Three approved scene directions:** close portrait (bust to face, soft lateral light), lifestyle/environment (natural context), product detail (close-up, clean background, shallow depth of field)
- **Forbidden:** opaque reflection blocking eyes, AI-generated aesthetics, heavy backgrounds, generic stock photos without curation
- **AR residual reflection** is a quality signal — subtle and colorful is acceptable (max 20% of lens area); opaque is not
- **Specs:** min 2000×3000px, 300dpi print / 72dpi digital, neutral-warm tone 5,000–6,500K
- **Accepted ratios:** 3:4, 1:1, 16:9

## 13. Voice & Tone
Communication is institutional but direct — every sentence serves a purpose, no wasted words.

**Five reference voices:**
| Voice | Use Case | Tone |
|---|---|---|
| Technical authority | Educational content, technical comparisons | Precise, no arrogance |
| Counter consultation | Practical tips, everyday conversations | Close, direct |
| Industrial backstage | Manufacturing process, operational structure | Concrete, range-based numbers |
| Client speaking | Cases and testimonials | Client is always the protagonist |
| Strategic vision | Partnerships, structural decisions | Owner mindset, no motivational fluff |

**Always:**
- Short sentences, active voice
- Ranges instead of exact numbers for operational data
- Real data — never invented

**Never:**
- Em dash in body copy of generated marketing content
- Generic phrases like "the importance of" or "complete solution"
- Growth in percentage
- Direct comparison with competitors
- "Essilor" alone — always "EssilorLuxottica"
- Exact financial values or references to mergers, acquisitions, or valuation

## 14. Canonical Vocabulary (Mandatory Spelling)
Always use the exact spelling:
- "Matriz Marca Própria" (never "matriz" or "MP")
- "espelho da tabela Vixlens"
- "material, índice e desenho da lente"
- Slogan: "1 lente Matriz = 1 lente Vixlens equivalente"
- "portfólio campeão Vixlens"
- "EssilorLuxottica" (never "Essilor" alone)
- "Vix na Prática", "Vix na Estrada", "Vix Academy", "Vix Innovation"
- "Hub Rio", "Freevix", "Astera", "Reflecta Guard", "Reflecta Express", "Reflecta Blue Protect SH", "VixTotal"
- All with their official capitalization preserved

## 15. ⚠️ Forbidden Execution Paths (Global Rules)
- **No Glassmorphism on general cards:** Frosted glass (`backdrop-blur`) is ONLY permitted on the 58×58px Hero Card badge — never on content cards, sections, or navigation
- **No Extra Colors:** Never add colors outside the defined Vixlens palette
- **No Italic:** Never use italic on any element under any circumstance
- **No Pure Black:** Never use `#000000` — the Preto Vixlens is `#1D1D1F`
- **No Blue Dominance:** Blue `#0439D9` is a ~5% accent — never use it in headers, covers, hero sections, or as a dominant background
- **No Spacing Invention:** Never use intermediate spacing values like 35px or 45px — only tokens from the scale
- **No AI / Uncurated Stock:** Never use AI-generated images or uncurated stock photography
- **No Concurrent Black + Blue:** Never use blue and black as simultaneous backgrounds on the same screen
- **No Gray Canvas:** Never use `#F5F5F7` as the dominant page color — it is only for cards and sub-sections
- **Dynamic SVGs:** When an SVG logo is used, construct it as an active React component layer so `fill` can be manipulated dynamically. Never use a generic image placeholder for logos. Source from `ds.vixlens.com.br/assets/marca/`.
- **Logo Version Rules:** dark bg → `negativo` (white + yellow); light bg → `positivo` (black + yellow); colored bg where yellow conflicts → `mono-negativo` (white monochrome); print/light documents → `mono-positivo` (black monochrome).
