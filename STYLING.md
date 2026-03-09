 Athena Dev — Design System & Styling Guide

> Complete reference for the Athena design system, Tailwind configuration, and custom CSS effects.

---

## 🎨 Design Philosophy

**Athena's design is:**
- **Clean & Minimal** — No unnecessary UI chrome
- **Sharp & Technical** — Zero border-radius, monospace accents
- **Dark & Elegant** — Purple on black with teal accents
- **Animated** — Smooth transitions and purposeful motion
- **Accessible** — High contrast, keyboard navigable, readable

**Inspired by:** Terminal UIs, sci-fi interfaces, premium SaaS products.

---

## 🌈 Color System

### Primary Colors

```css
--color-athena-black: #0C0A16;    /* Deep space black - all backgrounds */
--color-athena-offwhite: #F0EDFF; /* Soft off-white - all text */
--color-athena-purple: #7C6FFF;   /* Electric purple - primary accent, interactive */
--color-athena-teal: #00D4AA;     /* Cyan teal - secondary accent, success states */
--color-athena-border: #1E1B30;   /* Dark purple - all borders */
```

### Color Usage

| Color | Used For | Examples |
|---|---|---|
| **Black** | Backgrounds | `bg-athena-black` |
| **Off-White** | Text, icons | `text-athena-offwhite`, `fill-athena-offwhite` |
| **Purple** | Primary CTAs, links, active states | Buttons, hover effects, badges |
| **Teal** | Success states, secondary accents | Success message, checkmarks |
| **Border** | All borders, dividers, subtle lines | `border border-athena-border` |

### Opacity Modifiers

Use Tailwind opacity syntax for transparency:

```jsx
// Text opacity
<span className="text-athena-purple/40">Secondary text</span>
<span className="text-athena-offwhite/60">Muted text</span>
<span className="text-athena-offwhite/40">Very muted text</span>

// Background opacity
<div className="bg-athena-purple/5">Subtle background</div>
<div className="bg-athena-purple/10">Medium background</div>
<div className="bg-athena-purple/20">Strong background</div>

// Border opacity
<div className="border border-athena-border/30">Subtle border</div>
<div className="border border-athena-border">Full border</div>

// Shadow/glow (via inline styling)
<div style={{ boxShadow: '0 0 30px rgba(124, 111, 255, 0.4)' }}>Glow effect</div>
```

---

## 🔤 Typography

### Font Stack

```css
/* Headings & UI Labels */
font-family: "Sora", sans-serif;
font-weights: 300, 400, 500, 600, 700, 800

/* Body Text */
font-family: "DM Sans", sans-serif;

/* Monospace (code, labels, badges) */
font-family: "DM Mono", monospace;
font-weights: 400, 500
```

### Font Usage

| Element | Font | Size | Weight | Example |
|---|---|---|---|---|
| **Page Title** | Sora | 32-40px | 300-400 | `className="text-3xl sm:text-4xl font-light"` |
| **Section Heading** | Sora | 20-24px | 400-500 | `className="text-xl sm:text-2xl font-medium"` |
| **Body Text** | Sora | 14-16px | 400 | `className="text-sm sm:text-base"` |
| **Small Text** | DM Mono | 12px | 400 | `className="font-mono text-xs"` |
| **Label/Badge** | DM Mono | 10px | 500 | `className="font-mono text-[10px] uppercase tracking-widest"` |
| **Button Text** | DM Mono | 12-14px | 600 | `className="font-mono text-sm font-semibold uppercase"` |

### Responsive Typography

```jsx
// Mobile → Tablet → Desktop
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium">
  Responsive Title
</h1>

<p className="text-sm sm:text-base lg:text-lg">
  Body text scales with screen
</p>
```

---

## 🔲 Layout & Spacing

### Spacing Scale

Tailwind default spacing with multipliers:

```
4px   → p-1
8px   → p-2
12px  → p-3
16px  → p-4
20px  → p-5
24px  → p-6
32px  → p-8
40px  → p-10
48px  → p-12
64px  → p-16
```

### Common Spacing Patterns

```jsx
// Small padding (inputs, small cards)
className="px-3 py-2"  // 12px horizontal, 8px vertical

// Medium padding (cards, containers)
className="px-4 py-3"   // 16px horizontal, 12px vertical
className="p-4"         // 16px all around

// Large padding (sections, modals)
className="px-6 py-8"   // 24px horizontal, 32px vertical
className="p-8"         // 32px all around

// Gap between items
className="gap-2"       // 8px gap
className="gap-4"       // 16px gap
className="gap-6"       // 24px gap
```

### Grid & Flex

```jsx
// Two-column grid with gap
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* responsive grid */}
</div>

// Three-column on desktop
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* items */}
</div>

// Flex horizontally with center alignment
<div className="flex items-center justify-between gap-4">
  {/* content */}
</div>

// Flex vertically (column)
<div className="flex flex-col gap-3">
  {/* stacked items */}
</div>
```

---

## 🖱️ Interactive Elements

### Buttons

**Primary Button (CTA):**
```jsx
<button className="
  bg-athena-purple text-white
  font-mono text-sm uppercase font-semibold tracking-widest
  px-8 py-4
  hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] hover:bg-athena-purple/90
  transition-all duration-300
  group relative overflow-hidden
  cursor-pointer
">
  <div className="
    absolute inset-0 bg-white/20
    translate-y-full group-hover:translate-y-0
    transition-transform duration-300 ease-out
  " />
  <span className="relative z-10">BUTTON TEXT</span>
</button>
```

**Secondary Button:**
```jsx
<button className="
  border border-athena-border
  text-athena-offwhite hover:text-athena-purple
  font-mono text-xs uppercase tracking-widest
  px-6 py-3
  hover:border-athena-purple hover:bg-athena-purple/5
  transition-all duration-300
">
  SECONDARY
</button>
```

**Small Button:**
```jsx
<button className="
  bg-athena-purple text-white
  font-mono text-[11px] uppercase tracking-widest px-3 py-1.5
  hover:shadow-lg transition-all duration-300
  cursor-pointer
">
  SMALL
</button>
```

### Input Fields

**Text Input / Textarea:**
```jsx
<input
  type="text"
  placeholder="Enter text..."
  className="
    w-full
    bg-athena-black border border-athena-border
    text-athena-offwhite placeholder:text-athena-offwhite/20
    font-mono text-sm
    px-4 py-3
    focus:outline-none focus:border-athena-purple focus:shadow-[0_0_30px_rgba(124,111,255,0.15)]
    transition-all duration-200
    rounded-none
  "
/>

<textarea
  placeholder="Type here..."
  className="
    w-full h-40
    bg-athena-black border border-athena-border
    text-athena-offwhite placeholder:text-athena-offwhite/20
    font-mono text-sm
    px-4 py-3
    focus:outline-none focus:border-athena-purple focus:ring-1 focus:ring-athena-purple/50
    transition-all duration-200 resize-none
  "
/>
```

### Select/Dropdown

```jsx
<select className="
  bg-athena-black border border-athena-border
  text-athena-offwhite
  font-mono text-sm
  px-3 py-2
  focus:outline-none focus:border-athena-purple
  transition-all duration-200
  cursor-pointer
  appearance-none
  pr-8
  bg-no-repeat
  bg-right
  bg-[url('data:image/svg+xml;...')] /* custom chevron */
">
  <option value="">Select option</option>
  <option value="1">Option 1</option>
</select>
```

### Hover Effects

```jsx
// Subtle background change
className="hover:bg-athena-black/80 transition-colors duration-200"

// Border highlight
className="hover:border-athena-purple/60 transition-colors duration-300"

// Scale on hover (lift effect)
className="hover:scale-105 hover:-translate-y-0.5 transition-transform duration-300"

// Shadow glow
className="hover:shadow-[0_0_20px_rgba(124,111,255,0.3)] transition-shadow duration-300"

// Combined effect
className="
  hover:border-athena-purple hover:shadow-[0_0_30px_rgba(124,111,255,0.2)]
  hover:bg-athena-purple/5
  transition-all duration-300
  cursor-pointer
"
```

---

## 📦 Card & Container Patterns

### Standard Card

```jsx
<div className="
  border border-athena-border
  bg-athena-black/50
  p-4 sm:p-6
  hover:border-athena-purple/40 hover:bg-athena-black/70
  transition-all duration-300
  group
">
  {/* card content */}
</div>
```

### Large Container

```jsx
<div className="
  max-w-6xl mx-auto
  px-4 sm:px-6 lg:px-8
  py-8 sm:py-12 lg:py-16
">
  {/* content */}
</div>
```

### Full-Height Section

```jsx
<section className="
  min-h-screen
  bg-athena-black
  text-athena-offwhite
  flex items-center justify-center
  py-20
">
  {/* content */}
</section>
```

### Modal/Overlay

```jsx
<div className="
  fixed inset-0
  bg-black/80 backdrop-blur-sm
  flex items-center justify-center
  z-50
">
  <div className="
    bg-athena-black border border-athena-border
    w-full max-w-md mx-4
    p-6 sm:p-8
  ">
    {/* modal content */}
  </div>
</div>
```

---

## ✨ Custom CSS Effects

All custom effects defined in `client/src/index.css`.

### 1. Grain Overlay (`.bg-grain`)

Animated film grain effect on top of all pages.

```jsx
// Apply to root container
<div className="bg-grain" />

// Properties
// - Fixed position, z-50, opacity-0.03
// - Animated with 8s staggered translation
// - Non-interactive (pointer-events-none)
```

### 2. Ambient Orbs (`.ambient-orb`)

Blurred decorative background glow.

```jsx
// Apply two orbs to root
<div className="ambient-orb ambient-orb-1" />  // Purple, top-left
<div className="ambient-orb ambient-orb-2" />  // Teal, bottom-right

// Properties
// - blur(120px) filter
// - Semi-transparent (rgba with low alpha)
// - Fixed position behind content (z-0)
```

### 3. Scroll Progress Bar (`.scroll-progress`)

Top-of-page progress indicator.

```jsx
// Usage: Update CSS variable on scroll
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  document.documentElement.style.setProperty('--scroll', scrollPercent);
});

// CSS applies gradient based on --scroll value
<div className="scroll-progress" />
```

### 4. Corner Brackets (`.corner-brackets`, `.corner-brackets-inner`)

Decorative corner borders on elements.

```jsx
<div className="corner-brackets corner-brackets-inner px-4 py-3">
  Framed content
</div>

// Creates pseudo-element borders at corners with ::before/::after
```

### 5. Terminal Loader (`.terminal-line`)

Staggered line animation for loading states.

```jsx
<div className="flex flex-col gap-2 my-4">
  <div className="terminal-line h-2 bg-athena-purple/20 w-full" />
  <div className="terminal-line h-2 bg-athena-purple/20 w-3/4" />
  <div className="terminal-line h-2 bg-athena-purple/20 w-1/2" />
</div>

// Each line fades in with increasing delay
// Create smooth loading effect
```

### 6. Progress Bar Animations

```jsx
// Loading animation
<div className="progress-bar-loading bg-athena-purple h-1 w-0" />

// Complete animation (transitions from 80% to 100%)
<div className="progress-bar-complete bg-athena-purple h-1 w-4/5" />
```

### 7. Card Enter Animation (`.card-enter`)

Staggered card reveal.

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {videos.map((video, i) => (
    <div key={i} className="card-enter">
      {/* card */}
    </div>
  ))}
</div>

// Each card fades in and slides up with 80ms stagger
```

### 8. Section Appear (`.section-appear`)

Section fade-in animation.

```jsx
<section className="section-appear py-12">
  {/* content */}
</section>

// Smoother easing than card-enter
```

### 9. Input Glow (`.input-glow`)

Pulsing glow on input fields.

```jsx
<div className="input-glow">
  <textarea className="w-full..." />
</div>

// 4s pulse animation with purple glow
```

### 10. Concept Tag Hover (`.concept-tag`)

Interactive badge hover effect.

```jsx
<div className="concept-tag px-2 py-1 border border-athena-border/30 text-xs">
  Concept
</div>

// Hover: background highlight, lift transform
```

---

## 📱 Responsive Design

### Breakpoints (Tailwind)

```
sm: 640px  (tablets)
md: 768px  (small laptops)
lg: 1024px (laptops)
xl: 1280px (desktops)
2xl: 1536px (wide screens)
```

### Mobile-First Approach

Always start with mobile styles, then layer on larger screens:

```jsx
<div className="
  text-sm              // mobile: 14px
  sm:text-base         // tablet+: 16px
  lg:text-lg           // desktop+: 18px
  p-2                  // mobile: 8px padding
  sm:p-4               // tablet+: 16px padding
  lg:p-6               // desktop+: 24px padding
">
  Responsive text
</div>
```

### Common Responsive Patterns

```jsx
// Single column on mobile, multi-column on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* items */}
</div>

// Hide on mobile, show on tablet+
<div className="hidden md:block">
  Desktop only content
</div>

// Show on mobile, hide on tablet+
<div className="md:hidden">
  Mobile only content
</div>

// Responsive spacing
<div className="p-4 md:p-6 lg:p-8">
  {/* spacing increases on larger screens */}
</div>

// Responsive text size
<h1 className="text-2xl md:text-3xl lg:text-4xl">
  Large heading
</h1>
```

---

## 🌈 Motion Animations

### Using Motion (Framer Motion)

```jsx
import { motion } from 'motion/react';

// Simple fade-in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>

// Slide & fade
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Slides up while fading in
</motion.div>

// Stagger children
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.1, duration: 0.3 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>

// Exit animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  Fades out when unmounted
</motion.div>
```

### Transition Standards

```
Fast:     duration-200, duration-300
Standard: duration-500
Slow:     duration-700, duration-1000
```

### Easing Functions

```
ease-linear
ease-in
ease-out
ease-in-out
cubic-bezier(0.22, 1, 0.36, 1)  // Spring effect
```

---

## 🔤 Text Styling

### Common Text Classes

```jsx
// Text size
className="text-xs"    // 12px
className="text-sm"    // 14px
className="text-base"  // 16px
className="text-lg"    // 18px
className="text-xl"    // 20px
className="text-2xl"   // 24px
className="text-3xl"   // 30px

// Font weight
className="font-light"     // 300
className="font-normal"    // 400
className="font-medium"    // 500
className="font-semibold"  // 600
className="font-bold"      // 700

// Text color
className="text-athena-offwhite"      // Default
className="text-athena-purple"        // Accent
className="text-athena-purple/60"     // 60% opacity

// Text alignment
className="text-left"
className="text-center"
className="text-right"

// Text decoration
className="underline"
className="line-through"
className="no-underline"

// Letter spacing (monospace labels)
className="tracking-widest"  // Uppercase labels
className="tracking-wider"   // Normal wider
className="tracking-normal"  // Default

// Line clamp (truncate)
className="line-clamp-1"    // One line ellipsis
className="line-clamp-2"    // Two lines ellipsis
className="line-clamp-3"    // Three lines ellipsis
```

---

## 🖼️ Images & Icons

### Icon Usage (Lucide React)

```jsx
import { Search, ChevronDown, BookMarked, Settings } from 'lucide-react';

// Icon component
<Search size={20} className="text-athena-purple" strokeWidth={1.5} />

// In button
<button className="flex items-center gap-2">
  <Search size={18} />
  <span>Search</span>
</button>

// Icon sizes: 16, 18, 20, 24, 28, 32
// Stroke width: 1, 1.5, 2 (for visual weight)
```

### Image Styling

```jsx
// Responsive image
<img
  src="/logo.png"
  alt="Logo"
  className="w-full max-w-[200px] h-auto"
/>

// Avatar
<img
  src="/avatar.jpg"
  alt="User"
  className="w-10 h-10 rounded-full border border-athena-border"
/>

// Background image
<div className="
  bg-cover bg-center
  bg-[url('/image.jpg')]
  w-full h-64
">
  {/* overlay content */}
</div>
```

---

## 🌙 Dark Mode

Athena is **dark-only** by default. No light mode toggle needed.

All colors assume dark background. If light mode is ever needed:

```jsx
// Add color scheme toggle (future)
// Switch CSS variables in @theme
// Update opacity values
```

---

## ♿ Accessibility

### Keyboard Navigation

```jsx
// Always use semantic HTML
<button className="...">  {/* Not <div> */}
<a href="/">Home</a>      {/* Not <span> */}

// Focus visible (browser default override)
focus:outline-none focus:ring-2 focus:ring-athena-purple

// Tab index
<div tabIndex={0} role="button" onClick={handler}>
  Keyboard accessible div
</div>
```

### Color Contrast

- **Off-white on black**: ✅ High contrast (7:1 ratio)
- **Purple on black**: ✅ Meets WCAG AA (4.5:1 ratio)
- **Teal on black**: ✅ Meets WCAG AA
- **Faded text** (`/40`, `/60`): ⚠️ Use for secondary only

### ARIA Attributes

```jsx
// Buttons
<button aria-label="Close modal">×</button>

// Icons
<Search aria-hidden="true" size={20} />

// Forms
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Navigation
<nav aria-label="Primary navigation">
  {/* links */}
</nav>

// Live regions
<div aria-live="polite" aria-atomic="true">
  {message}
</div>
```

---

## 📐 Z-Index Scale

```
0      - Default stacking
10     - Relative (cards, buttons)
40     - Sticky headers
50     - Grain overlay, fixed elements
100    - Scroll progress bar
500+   - Modals, dropdowns
1000   - Toast notifications
```

---

## 🧪 Testing Styles

```jsx
// Test by checking computed styles
const element = screen.getByRole('button');
expect(window.getComputedStyle(element).backgroundColor).toBe('...');

// Test animations exist
expect(element).toHaveClass('transition-all');

// Test responsive
// Use `window.matchMedia` or test at different viewport sizes
```

---

## 🚀 Performance Tips

1. **Limit animations** — Only animate on user interactions
2. **Use `will-change` sparingly** — Can hurt performance
3. **Debounce scroll effects** — Don't update on every pixel
4. **Lazy load images** — Use `loading="lazy"`
5. **Optimize icons** — Lucide icons are small, but render only what's needed

---

## 📚 Tailwind Configuration

Located in `client/vite.config.js`. Extends default Tailwind with:

```js
// Custom colors in @theme
--color-athena-black: #0C0A16;
--color-athena-purple: #7C6FFF;
// ... etc

// Plugins: none required (using v4 defaults)
```

No custom Tailwind plugins needed. All custom effects in `index.css`.

---

Last updated: March 5, 2026
