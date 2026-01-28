# Klassy Design System

## 1. Design Tokens: Colors
*Extração exata da imagem de referência da marca.*

### Brand / Primary
| Token | Value (HEX) | Usage |
|-------|-------------|-------|
| `--primary-900` | #710014 | Cor principal da marca, backgrounds primários, elementos de destaque |
| `--primary-700` | #712d1f | Cor secundária da marca, variações de marrom-avermelhado |

### Neutrals
| Token | Value (HEX) | Usage |
|-------|-------------|-------|
| `--neutral-0` | #FFFFFF | Texto em fundos escuros, ícones, logo alternativo |
| `--neutral-50` | #f2f1ed | Background claro, superfícies secundárias, cards em modo claro |
| `--neutral-900` | #161616 | Texto principal, backgrounds escuros, logo em fundo claro |
| `--neutral-800` | #1f1f1f | Backgrounds de cards escuros, superfícies elevadas |

### Semantic Colors
| Token | Value (HEX) | Usage |
|-------|-------------|-------|
| `--surface-light` | #f2f1ed | Superfícies em modo claro |
| `--surface-dark` | #161616 | Superfícies em modo escuro |
| `--overlay-red` | rgba(113, 0, 20, 0.85) | Overlay vermelho sobre imagens |

---

## 2. Typography

### Font Families
- **Display/Headings:** Codec Pro (Fallback: 'Arial Black', sans-serif)
- **Body/Text:** TT Norms (Fallback: 'Helvetica Neue', Arial, sans-serif)

### Type Scale
| Role | Font Family | Size | Weight | Line Height | Letter Spacing | Usage |
|------|-------------|------|--------|-------------|----------------|-------|
| **Large Heading** | Codec Pro | 72px (4.5rem) | Bold (700) | 1.0 | -0.02em | Hero titles, main brand displays |
| **H1 Display** | Codec Pro | 48px (3rem) | Bold (700) | 1.1 | -0.015em | Page titles |
| **H2** | Codec Pro | 36px (2.25rem) | Bold (700) | 1.2 | -0.01em | Section headings |
| **H3** | Codec Pro | 24px (1.5rem) | Bold (700) | 1.3 | 0 | Subsection titles |
| **Sub-heading** | Codec Pro | 18px (1.125rem) | Medium (500) | 1.4 | 0.02em | Supporting headings |
| **Body Large** | TT Norms | 18px (1.125rem) | Regular (400) | 1.6 | 0 | Large body text, introductions |
| **Body Default** | TT Norms | 16px (1rem) | Regular (400) | 1.5 | 0 | Main body text, paragraphs |
| **Body Small** | TT Norms | 14px (0.875rem) | Regular (400) | 1.5 | 0 | Secondary text, captions |
| **Caption** | TT Norms | 12px (0.75rem) | Regular (400) | 1.4 | 0.01em | Fine print, metadata |
| **Label/Button** | TT Norms | 14px (0.875rem) | Medium (500) | 1.2 | 0.05em | Buttons, labels, UI elements |

### Typography Usage Notes
- **Headings:** Always use Codec Pro for maximum brand impact
- **Body Text:** Use TT Norms for readability and modern aesthetic
- **Color Pairing:** White text (#FFFFFF) on dark backgrounds (#710014, #161616)
- **Color Pairing:** Dark text (#161616) on light backgrounds (#f2f1ed)

---

## 3. Spacing & Layout

### Base Unit
- **Grid Base:** 8px
- **Micro Adjustments:** 4px (for fine-tuning)

### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Micro spacing, icon gaps |
| `--space-2` | 8px | Tight spacing, compact layouts |
| `--space-3` | 12px | Small gaps between related elements |
| `--space-4` | 16px | Default spacing, button padding |
| `--space-5` | 20px | Medium spacing |
| `--space-6` | 24px | Section spacing, card padding |
| `--space-8` | 32px | Large spacing between sections |
| `--space-10` | 40px | Extra large spacing |
| `--space-12` | 48px | Major section breaks |
| `--space-16` | 64px | Hero section padding |
| `--space-20` | 80px | Maximum spacing |

### Container Widths
| Token | Value | Usage |
|-------|-------|-------|
| `--container-sm` | 640px | Narrow content, forms |
| `--container-md` | 768px | Standard content width |
| `--container-lg` | 1024px | Wide content areas |
| `--container-xl` | 1280px | Maximum content width |
| `--container-full` | 100% | Full-width sections |

---

## 4. Shape & Effects

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 8px | Small elements, tags |
| `--radius-md` | 12px | Buttons, inputs, small cards |
| `--radius-lg` | 16px | Cards, modals |
| `--radius-xl` | 24px | Large cards, hero sections |
| `--radius-2xl` | 32px | Feature cards, app icons |
| `--radius-full` | 9999px | Pills, avatars, circular elements |

### Shadows / Elevation
| Token | CSS Value | Usage |
|-------|-----------|-------|
| `--shadow-sm` | 0 1px 2px 0 rgba(0, 0, 0, 0.05) | Subtle elevation, hover states |
| `--shadow-md` | 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) | Cards, dropdowns |
| `--shadow-lg` | 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) | Modals, popovers |
| `--shadow-xl` | 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) | Large elevated surfaces |
| `--shadow-brand` | 0 8px 24px 0 rgba(113, 0, 20, 0.15) | Brand-colored shadow for primary elements |

### Borders
| Token | Value | Usage |
|-------|-------|-------|
| `--border-width-thin` | 1px | Default borders, dividers |
| `--border-width-medium` | 2px | Emphasized borders, focus states |
| `--border-width-thick` | 4px | Strong emphasis, decorative |
| `--border-color-light` | rgba(0, 0, 0, 0.1) | Borders on light backgrounds |
| `--border-color-dark` | rgba(255, 255, 255, 0.1) | Borders on dark backgrounds |

---

## 5. Component Blueprints

### Logo / Brand Mark
- **Primary Logo:** White barbell icon + "Klassy" wordmark
- **Icon Dimensions:** Approximately 80px × 40px (barbell icon)
- **Wordmark:** Codec Pro, Bold
- **Spacing:** 8px gap between icon and wordmark
- **Variants:**
  - Light version: White on dark backgrounds (#710014, #161616)
  - Dark version: Black (#161616) on light backgrounds (#f2f1ed)
  - Icon-only: For app icons, favicons (rounded square with `--radius-2xl`)

### Primary Button
- **Height:** 48px
- **Padding:** 16px 32px (vertical horizontal)
- **Border Radius:** `--radius-md` (12px)
- **Typography:** TT Norms, 14px, Medium (500), Letter-spacing: 0.05em
- **Normal State:**
  - Background: `--primary-900` (#710014)
  - Text: `--neutral-0` (#FFFFFF)
  - Border: None
- **Hover State:**
  - Background: Lighten `--primary-900` by 10% or use opacity 0.9
  - Transform: translateY(-1px)
  - Shadow: `--shadow-md`
- **Active/Pressed State:**
  - Background: Darken `--primary-900` by 5%
  - Transform: translateY(0)
- **Disabled State:**
  - Background: `--neutral-300` or opacity 0.5
  - Text: `--neutral-500`
  - Cursor: not-allowed

### Secondary Button
- **Height:** 48px
- **Padding:** 16px 32px
- **Border Radius:** `--radius-md` (12px)
- **Typography:** TT Norms, 14px, Medium (500)
- **Normal State:**
  - Background: Transparent
  - Text: `--primary-900` (#710014)
  - Border: 2px solid `--primary-900`
- **Hover State:**
  - Background: `--primary-900`
  - Text: `--neutral-0` (#FFFFFF)
  - Border: 2px solid `--primary-900`

### Card / Surface
- **Background (Light Mode):** `--neutral-50` (#f2f1ed)
- **Background (Dark Mode):** `--neutral-800` (#1f1f1f)
- **Border:** None (uses shadow for elevation)
- **Border Radius:** `--radius-lg` (16px)
- **Shadow:** `--shadow-md`
- **Padding:** 24px (`--space-6`)
- **Hover State:** `--shadow-lg`, subtle scale transform (1.02)

### Input Field
- **Height:** 48px
- **Padding:** 12px 16px
- **Border Radius:** `--radius-md` (12px)
- **Typography:** TT Norms, 16px, Regular (400)
- **Normal State:**
  - Background: `--neutral-0` (#FFFFFF)
  - Border: 1px solid rgba(0, 0, 0, 0.15)
  - Text: `--neutral-900` (#161616)
  - Placeholder: rgba(22, 22, 22, 0.5)
- **Focus State:**
  - Border: 2px solid `--primary-900` (#710014)
  - Shadow: 0 0 0 3px rgba(113, 0, 20, 0.1) (focus ring)
  - Outline: none
- **Error State:**
  - Border: 2px solid #DC2626 (red)
  - Shadow: 0 0 0 3px rgba(220, 38, 38, 0.1)

### Icon Button
- **Size:** 40px × 40px
- **Padding:** 8px
- **Border Radius:** `--radius-sm` (8px) or `--radius-full` for circular
- **Icon Size:** 24px
- **Normal State:**
  - Background: Transparent
  - Icon Color: `--neutral-900` or `--neutral-0` (depending on background)
- **Hover State:**
  - Background: rgba(0, 0, 0, 0.05) on light / rgba(255, 255, 255, 0.1) on dark

### App Icon / Logo Badge
- **Size:** 120px × 120px (or scalable)
- **Border Radius:** `--radius-2xl` (32px)
- **Background:** `--primary-900` (#710014) or `--neutral-900` (#161616)
- **Icon:** White barbell centered
- **Padding:** 24px internal spacing

---

## 6. Layout Patterns

### Hero Section
- **Background:** Dark image with `--overlay-red` (rgba(113, 0, 20, 0.85))
- **Text Color:** `--neutral-0` (#FFFFFF)
- **Heading:** Large Heading (72px, Codec Pro)
- **Logo Placement:** Centered or top-left
- **Padding:** `--space-16` (64px) vertical, `--space-8` (32px) horizontal

### Content Section
- **Background:** `--neutral-50` (#f2f1ed) or `--neutral-0` (#FFFFFF)
- **Max Width:** `--container-lg` (1024px)
- **Padding:** `--space-8` (32px) vertical
- **Text Color:** `--neutral-900` (#161616)

### Grid Layout
- **Columns:** 12-column grid
- **Gap:** `--space-6` (24px)
- **Responsive Breakpoints:**
  - Mobile: < 640px (1 column)
  - Tablet: 640px - 1024px (2-3 columns)
  - Desktop: > 1024px (3-4 columns)

---

## 7. Brand Guidelines

### Color Usage
- **Primary Brand Color (#710014):** Use for CTAs, primary actions, brand moments
- **Secondary Brand Color (#712d1f):** Use for accents, hover states, secondary elements
- **Light Background (#f2f1ed):** Default page background, light mode
- **Dark Background (#161616):** Dark mode, hero sections, high-contrast areas

### Typography Hierarchy
1. **Codec Pro:** Reserved for headings, titles, and brand statements
2. **TT Norms:** All body text, UI elements, descriptions

### Logo Usage
- **Minimum Size:** 120px width
- **Clear Space:** Minimum 16px around logo
- **Backgrounds:** Use white logo on dark/brand colors, dark logo on light backgrounds
- **Do Not:** Distort, rotate, or change logo colors outside approved palette

### Accessibility
- **Contrast Ratios:**
  - White text on #710014: 7.2:1 (AAA)
  - White text on #161616: 19.6:1 (AAA)
  - Black text on #f2f1ed: 17.8:1 (AAA)
- **Focus States:** Always visible with 2px border and focus ring
- **Touch Targets:** Minimum 44px × 44px for interactive elements

---

## 8. Motion & Animation

### Timing Functions
- **Ease-out:** For entrances and reveals
- **Ease-in-out:** For state transitions
- **Spring:** For playful, brand-aligned interactions

### Duration Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions, hover states |
| `--duration-normal` | 250ms | Standard transitions, button clicks |
| `--duration-slow` | 400ms | Page transitions, modal open/close |

### Common Animations
- **Hover Lift:** `transform: translateY(-2px)` + shadow increase
- **Button Press:** `transform: scale(0.98)`
- **Fade In:** `opacity: 0 → 1` over `--duration-normal`
- **Slide Up:** `transform: translateY(20px) → translateY(0)` + fade in

---

## 9. Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Typography Scaling
- **Mobile:** Reduce heading sizes by 25-30%
- **Tablet:** Reduce by 15-20%
- **Desktop:** Use full scale as defined

### Spacing Adjustments
- **Mobile:** Use `--space-4` (16px) for section padding
- **Tablet:** Use `--space-6` (24px)
- **Desktop:** Use `--space-8` (32px) or larger

---

## 10. CSS Custom Properties (Implementation)

```css
:root {
  /* Colors - Brand */
  --primary-900: #710014;
  --primary-700: #712d1f;
  
  /* Colors - Neutrals */
  --neutral-0: #FFFFFF;
  --neutral-50: #f2f1ed;
  --neutral-800: #1f1f1f;
  --neutral-900: #161616;
  
  /* Typography */
  --font-display: 'Codec Pro', 'Arial Black', sans-serif;
  --font-body: 'TT Norms', 'Helvetica Neue', Arial, sans-serif;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  
  /* Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-brand: 0 8px 24px 0 rgba(113, 0, 20, 0.15);
  
  /* Borders */
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
  
  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
}
```

---

## 11. Component Examples (HTML + CSS)

### Primary Button
```html
<button class="btn-primary">Get Started</button>
```

```css
.btn-primary {
  height: 48px;
  padding: 16px 32px;
  background: var(--primary-900);
  color: var(--neutral-0);
  border: none;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all var(--duration-normal) ease-in-out;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
  opacity: 0.9;
}

.btn-primary:active {
  transform: translateY(0);
}
```

### Card Component
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content goes here with proper spacing and typography.</p>
</div>
```

```css
.card {
  background: var(--neutral-50);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) ease-in-out;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: scale(1.02);
}

.card h3 {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 700;
  color: var(--neutral-900);
  margin-bottom: var(--space-3);
}

.card p {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  color: var(--neutral-900);
}
```

---

## 12. Design Principles

### 1. Bold & Confident
- Use strong typography (Codec Pro) for impactful statements
- High contrast color palette (#710014 vs #FFFFFF)
- Clear visual hierarchy

### 2. Modern & Clean
- Generous white space using 8px grid system
- Minimal borders, shadow-based elevation
- Rounded corners for approachability

### 3. Brand-Centric
- Red (#710014) as the hero color for all primary actions
- Barbell icon as the core brand symbol
- Consistent use of Codec Pro for brand voice

### 4. Accessible & Inclusive
- AAA contrast ratios across all text combinations
- Clear focus states for keyboard navigation
- Minimum 44px touch targets for mobile

---

**Version:** 1.0  
**Last Updated:** 2026-01-27  
**Maintained by:** Design Team
