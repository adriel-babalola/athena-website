# Athena MVP — Codebase Context

> Use this document as context when prompting an AI to implement features in this codebase.

---

## Workspace Overview

Monorepo with **three independent projects** sharing a unified design system:

| Project | Purpose | Client Port | Server Port | Backend |
|---|---|---|---|---|
| `athena-dev` | AI study companion (text/image → YouTube videos) | 5175 | 3001 | Express + AI |
| `athena-waitlist` | Email waitlist signup with MongoDB | 5173 | 3001 | Express + Vercel serverless |
| `athena-website` | Marketing landing page with login/signup stubs | 5174 | — | None (static) |

---

## Tech Stack

### Shared (All Projects)

| Layer | Technology | Version |
|---|---|---|
| Frontend | React (functional only) | 19.2.0 |
| Build | Vite + `@vitejs/plugin-react` | 7.3.1 / 5.1.1 |
| CSS | Tailwind CSS (v4, via `@tailwindcss/vite`) | 4.2.1 |
| Animation | Motion (`motion/react`, renamed Framer Motion) | 12.34.4 |
| Icons | Lucide React (individual imports) | 0.576.0 |
| Module System | ESM everywhere (`"type": "module"`) | — |
| Fonts | **Sora** (sans/headings), **DM Sans** (body), **DM Mono** (mono) via Google Fonts | — |

### Per-Project

| Project | Server | Key Deps |
|---|---|---|
| `athena-dev` | Express 4.21.0 | `@google/generative-ai`, `node-fetch`, `cors`, `dotenv` |
| `athena-waitlist` | Express 4.21.0 (local) / Vercel Serverless (prod) | `mongodb`, `cors`, `dotenv` |
| `athena-website` | None | `react-router-dom` 7.13.1 |

### Dev Tooling

- **Concurrently 8.2.2** — runs client + server together
- **Nodemon 3.1.0** — auto-restarts server
- **Vite proxy** — forwards `/api` → `http://localhost:3001` in dev

---

## Folder Structure

```
project-name/
├── package.json              # Root: concurrently scripts, install:all
├── README.md
├── client/
│   ├── index.html            # SPA entry, branded loading screen
│   ├── package.json
│   ├── vite.config.js        # Vite + React + Tailwind
│   ├── public/               # logo.svg, favicon.png
│   └── src/
│       ├── main.jsx          # createRoot + StrictMode
│       ├── App.jsx           # Root component
│       ├── index.css          # Tailwind imports + @theme + custom effects
│       ├── App.css            # Only `@import "tailwindcss"` (minimal)
│       ├── components/        # PascalCase.jsx — UI components
│       ├── services/          # camelCase.js — API calls (athena-dev only)
│       └── pages/             # PascalCase.jsx — route pages (athena-website only)
├── server/
│   ├── index.js              # Express entry (inline routes, no router separation)
│   ├── package.json
│   └── [utils].js            # Utility modules (e.g., ytUtils.js)
└── api/                      # Vercel serverless (athena-waitlist only)
    └── waitlist.js
```

**Conventions:**
- Client and server have **separate** `package.json` files (not a monorepo workspace)
- No `src/` on server side — files live directly in `server/`
- No barrel files — all imports specify exact file paths
- Root `package.json` has: `install:all`, `dev`, `dev:client`, `dev:server`

---

## Naming Conventions

| Type | Convention | Examples |
|---|---|---|
| Components | PascalCase `.jsx` | `Header.jsx`, `VideoCard.jsx`, `WaitlistHero.jsx` |
| Pages | PascalCase `.jsx` | `LandingPage.jsx`, `LoginPage.jsx` |
| Services | camelCase `.js` | `geminiAPI.js` |
| Server utils | camelCase `.js` | `ytUtils.js` |
| Server entry | `index.js` | Always |
| Variables/functions | camelCase | `inputText`, `handleSearch`, `setLoading` |
| Env-derived constants | UPPER_SNAKE_CASE | `GEMINI_MODEL`, `MONGODB_URI`, `API_KEY` |
| CSS tokens | `--color-athena-*`, `--font-*` | `--color-athena-purple` |

---

## Component Patterns

### Declaration Style

Always **functional** with **named default export**:

```jsx
export default function ComponentName({ prop1, prop2 }) {
  // hooks at top
  // handler functions
  // return JSX
}
```

Exception: `App.jsx` in `athena-dev` exports at bottom: `export default App;`

### Hooks Used

| Hook | Usage |
|---|---|
| `useState` | All local state (form values, loading, errors, results) |
| `useEffect` | Scroll listeners, fetch on mount, keyboard listeners, body overflow lock |
| `useCallback` | Memoize heavy handlers (`handleSearch`, `handleGlobalKeyDown`) |
| `useRef` | DOM access (file input refs) |

**Not used:** `useReducer`, `useContext`, `useMemo`, custom hooks.

### Props

- **Destructured in signature**: `function Comp({ prop1, prop2 })`
- **Data down, events up**: Parent manages state, passes callbacks (`onSuccess`, `onClose`)
- No prop spreading, no PropTypes, no TypeScript

---

## State Management

**Local `useState` only — no external state library.**

- All state in the nearest common ancestor
- `athena-dev`: All state in `App.jsx`
- `athena-waitlist`: State split between `App.jsx` (modal, count) and `WaitlistHero.jsx` (form)
- `athena-website`: State in individual page components

No Redux, Zustand, Jotai, or Context API.

---

## API Communication

### Frontend → Backend

**athena-dev** — centralized service layer:
```js
// services/geminiAPI.js
const API_URL = import.meta.env.VITE_API_URL || '';
export async function findVideosForText(text) { /* fetch POST */ }
export async function findVideosForImage(base64Image) { /* fetch POST */ }
```

**athena-waitlist** — inline `fetch()` in components (no service layer):
```js
fetch('/api/waitlist')          // GET count
fetch('/api/waitlist', { ... }) // POST signup
```

**athena-website** — no API calls (static).

### Backend

- RESTful `/api/*` prefix
- `express.json()` with size limits (`50mb` for images, `16kb` for forms)
- `cors()` middleware (open in dev, whitelist in waitlist)
- JSON request/response
- HTTP codes: `200`, `201`, `400`, `401`, `409`, `429`, `500`, `503`
- Routes defined inline in `index.js` (no router separation)

**athena-dev endpoints:**

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/health` | Health check |
| POST | `/api/find-videos` | Text → AI Analysis → YouTube videos |
| POST | `/api/find-videos-image` | Image → AI Analysis → YouTube videos |

**athena-waitlist endpoints:**

| Method | Path | Purpose |
|---|---|---|
| GET | `/api/waitlist` | Get waitlist count |
| POST | `/api/waitlist` | Join waitlist |

---

## Styling

### Approach

**Tailwind CSS v4 utility classes inline in JSX** — no CSS Modules, no styled-components.

### Design System (`@theme` in every `index.css`)

```css
@theme {
  --color-athena-black: #0C0A16;
  --color-athena-offwhite: #F0EDFF;
  --color-athena-purple: #7C6FFF;        /* Primary accent (purple) */
  --color-athena-border: #1E1B30;
  --color-athena-teal: #00D4AA;

  --font-sans: "Sora", sans-serif;
  --font-mono: "DM Mono", monospace;
  --font-serif: "Sora", sans-serif;
}
```

### Design Rules

- **Zero `border-radius`** — all elements have sharp edges
- **`border border-athena-border`** on all card-like elements
- **Opacity modifiers**: `text-athena-offwhite/40`, `bg-athena-purple/5`
- **Transitions**: `transition-all duration-300` is the standard
- **Labels/badges**: `font-mono text-[10px] uppercase tracking-widest text-athena-purple`
- **Hover effects**: border color changes, background tints, transforms
- **`backdrop-blur-sm`** / `backdrop-blur-md` on overlapping elements

### Custom CSS Effects (defined in `index.css`)

| Class | Effect |
|---|---|
| `.bg-grain` | Animated film grain SVG overlay (fixed, z-50, opacity 0.03) |
| `.ambient-orb` | Blurred decorative background glow (purple + teal) |
| `.scroll-progress` | Top scroll progress bar via CSS variable `--scroll` |
| `.corner-brackets` | Decorative `::before`/`::after` corner brackets |
| `.terminal-line` | Staggered terminal line animation (loading) |
| `.progress-bar-loading` / `.progress-bar-complete` | Keyframe loading bar |
| `.card-enter` | Staggered card reveal animation |
| `.section-appear` | Section fade-in animation |
| `.input-glow` | Pulsing glow on input areas |
| `.concept-tag` | Hover effect for concept badges |

### Root Layout (every project)

```jsx
<div className="min-h-screen bg-athena-black text-athena-offwhite selection:bg-athena-purple selection:text-white">
  <div className="bg-grain" />
  <div className="ambient-orb ambient-orb-1" />
  <div className="ambient-orb ambient-orb-2" />
  {/* content */}
</div>
```

---

## Common UI Patterns

### CTA Button

```jsx
<button className="bg-athena-purple text-white font-mono text-sm uppercase tracking-widest px-8 py-4 hover:shadow-[0_0_30px_rgba(124,111,255,0.4)] transition-all duration-300 group relative overflow-hidden">
  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
  <span className="relative z-10">BUTTON TEXT</span>
</button>
```

### Section Label

```jsx
<div className="font-mono text-[10px] uppercase tracking-widest text-athena-purple">
  LABEL TEXT
</div>
```

### Motion Entrance Animation

```jsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

### Footer

All footers include: `© 2026 Athena · RIEL Inc`.

---

## Server Patterns

### Express Server Template

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

/* ─── MIDDLEWARE ─── */
app.use(cors());
app.use(express.json({ limit: '50mb' }));

/* ─── ROUTES ─── */
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

/* ─── START ─── */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Error Handling (Server)

```js
try {
  // route logic
} catch (error) {
  console.error('[Tag] Error:', error.message);
  if (error.message?.includes('API key')) return res.status(401).json({ error: '...' });
  res.status(500).json({ error: 'Internal server error', details: error.message });
}
```

### Error Handling (Client)

```js
try {
  const response = await fetch(url, options);
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || 'Request failed');
  // use data
} catch (err) {
  setError(err.message);
}
```

### Console Logging

Prefixed with bracketed tags: `[Gemini]`, `[YouTube]`, `[Verify]`, `[Speed]`, `[Image]`

---

## Environment Variables

### athena-dev

| Variable | Purpose | Default |
|---|---|---|
| `GEMINI_API_KEY` | Google Gemini API key (required) | — |
| `YOUTUBE_API_KEY` | YouTube Data API v3 key | — |
| `GEMINI_MODEL` | Gemini model name | `gemini-2.0-flash` |
| `SKIP_VERIFICATION` | Skip video relevance check | `false` |
| `PORT` | Server port | `3001` |
| `VITE_API_URL` | Client API base URL | `''` (uses proxy) |

### athena-waitlist

| Variable | Purpose | Default |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string (required) | — |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins | `http://localhost:5173` |
| `NODE_ENV` | Environment flag | `development` |
| `PORT` | Server port | `3001` |

---

## Import/Export Conventions

### Client Components

```jsx
// 1. React hooks
import { useState, useEffect, useCallback, useRef } from 'react';

// 2. Third-party
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { IconName } from 'lucide-react';

// 3. Local components
import Header from './components/Header';

// 4. Local services
import { findVideosForText } from './services/geminiAPI';

// 5. CSS
import './index.css';
```

### Server

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// .js extension REQUIRED for ESM Node imports
import { searchMultipleQueries } from './ytUtils.js';
```

### Export Rules

- Components: `export default function Name() {}`
- Services: **named exports** (`export async function findVideosForText()`)
- Server utils: **named exports** (`export async function searchMultipleQueries()`)

---

## Code Formatting

| Aspect | Convention |
|---|---|
| Semicolons | Always used (server); mostly used (client) |
| Quotes | **Single quotes** everywhere |
| Indentation | **2 spaces** |
| Trailing commas | Yes (function params, arrays, objects) |
| Line length | No strict limit (Tailwind classes can be long) |
| Components | Named `function` declaration |
| Callbacks | Arrow functions |
| Template literals | For interpolation, URL construction, logging |
| JSX conditionals | Ternary inline or `{condition && <Component />}` |
| Comments | `/* ─── SECTION ─── */` on server; `{/* ... */}` in JSX |
| No Prettier/ESLint config | None present in repo |

---

## Routing (athena-website only)

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

<BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignUpPage />} />
  </Routes>
</BrowserRouter>
```

In-page scrolling uses a local `scrollTo(id)` helper:
```js
const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
```

---

## Quick Reference: New Feature Checklist

When adding a new feature, follow this checklist:

### New Component
1. Create `ComponentName.jsx` in `client/src/components/`
2. Use `export default function ComponentName({ props }) {}`
3. Hooks at top, handlers in middle, return JSX
4. Style with Tailwind inline — use `athena-*` design tokens
5. Zero border-radius, `border border-athena-border` for cards
6. Use `motion` for entrance animations
7. Use `lucide-react` for icons

### New API Endpoint
1. Add route inline in `server/index.js`
2. Use `/* ─── SECTION ─── */` comment dividers
3. Wrap in try/catch, return JSON, use proper HTTP codes
4. Log with `[Tag]` prefix: `console.log('[Feature] ...')`
5. Add env vars to `.env` and document defaults

### New Page (athena-website)
1. Create `PageName.jsx` in `client/src/pages/`
2. Add `<Route>` in `App.jsx`
3. Include root layout wrapper (bg-grain, ambient-orbs)
4. Include `<Navbar />` and `<Footer />`

### New Service (API client)
1. Create `serviceName.js` in `client/src/services/`
2. Use named async exports
3. Use `fetch()` with relative URLs (Vite proxy handles routing)
4. Parse JSON response, throw descriptive errors

---

## Dependencies Table

| Dependency | athena-dev | athena-waitlist | athena-website |
|---|---|---|---|
| react / react-dom | 19.2.0 | 19.2.0 | 19.2.0 |
| react-router-dom | — | — | 7.13.1 |
| vite | 7.3.1 | 7.3.1 | 7.3.1 |
| tailwindcss | 4.2.1 | 4.2.1 | 4.2.1 |
| motion | 12.34.4 | 12.34.4 | 12.34.4 |
| lucide-react | 0.576.0 | 0.576.0 | 0.576.0 |
| express | 4.21.0 | 4.21.0 | — |
| cors | 2.8.5 | 2.8.5 | — |
| dotenv | 16.4.5 | 16.4.5 | — |
| mongodb | — | 6.12.0 | — |
| @google/generative-ai | 0.24.1 | — | — |
| node-fetch | 3.3.2 | — | — |
| concurrently | 8.2.2 | 8.2.2 | — |
| nodemon | 3.1.0 | 3.1.0 | — |
