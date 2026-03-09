# Plushify UI — Requirements

## Overview
Plushify is a SaaS application that allows users to upload photos of themselves, friends, family, or pets and receive AI-generated plushie versions of the subjects. This document covers requirements for the **UI-only phase** — no backend logic, no real AI processing. All dynamic content is simulated with mock data.

---

## Functional Requirements

### FR-01: Public Landing Page
- The landing page must be accessible without authentication
- Must include a hero section with a clear value proposition headline and two call-to-action buttons (Get Started, See Examples)
- Must include a before/after image comparison section showing at least 3 example pairs (person, pet, family) using a draggable slider
- Must include a "How It Works" section explaining the 3-step flow: Upload → Choose Style → Download
- Must include an examples gallery showing at least 6 static plushie outputs in a responsive grid
- Must include a features section highlighting key product benefits
- Must include a full-width CTA banner at the bottom
- Must have SEO-optimised metadata (title, description, keywords, Open Graph tags)

### FR-02: Navigation Header
- Must display the Plushify logo and brand name
- Must include navigation links: Features (anchor), Pricing (`/pricing`), Docs (`/docs`)
- When the user is authenticated, must show a "Dashboard" link
- Must include a user profile menu (authenticated) or Sign In / Sign Up buttons (unauthenticated)
- Must include a dark/light mode toggle

### FR-03: Footer
- Must include 4 columns: Product, Docs, Legal, Brand
- Product links: Features, Pricing
- Docs links: Getting Started, How to Upload, FAQ
- Legal links: Privacy Policy, Terms of Service, Cookie Policy
- Brand column: Logo, tagline, placeholder social links

### FR-04: Authentication Pages
- Login and Register pages must display Plushify branding above the form
- Existing email/password and Google OAuth flows must remain functional
- No structural changes to auth logic

### FR-05: Authenticated Dashboard
- Must redirect unauthenticated users to `/login`
- Must display a stats bar showing: credits remaining, total generated, current plan (from mock data)
- Must display a drag-and-drop image upload zone
- Must display a style selector with at least 4 options: Classic, Kawaii, Chibi, Realistic
- Must display a "Generate Plushie" button that shows a "Coming soon" toast on click
- Must display a "My Plushies" gallery grid populated with mock plushie cards
- Must display an empty state when no items are present
- Each plushie card must show: thumbnail, generation date, Download button (toast), Delete button (toast)

### FR-06: Pricing Page (`/pricing`)
- Must be publicly accessible
- Must display 3 pricing tiers side by side (stacked on mobile):
  - **Basic** — $9/mo — 30 credits
  - **Pro** — $19/mo — 100 credits (highlighted as "Most Popular")
  - **Elite** — $29/mo — 200 credits
- Each tier must list included features with checkmarks
- Each tier must have a CTA button linking to `/register`
- Must include a monthly/annual billing toggle (UI only)

### FR-07: Docs Section (`/docs`)
- Must include a sidebar navigation with sections: Getting Started, Guides (How to Upload), FAQ
- Must include at least 3 doc pages: Getting Started, How to Upload, FAQ
- Sidebar must highlight the currently active page
- Must be readable and well-structured with headings, paragraphs, and lists
- Must be responsive (sidebar collapses on mobile)

### FR-08: Legal Pages
- Must include: Privacy Policy (`/privacy`), Terms of Service (`/terms`), Cookie Policy (`/cookies`)
- Each page must have a consistent prose layout with clear sections and headings
- Content must be realistic placeholder text (not lorem ipsum)

### FR-09: Mock Data
- All dynamic-looking content must be driven by a single `src/lib/mock-data.ts` file
- Must include: gallery items, user stats (credits, plan), before/after pairs, example gallery
- Placeholder images use `https://placehold.co/` URLs
- Non-functional action buttons (Generate, Download, Delete) must show an informative `toast()` message

### FR-10: Boilerplate Cleanup
- The following boilerplate-only files must be removed:
  - `src/app/chat/` (entire folder)
  - `src/app/api/chat/route.ts`
  - `src/app/api/diagnostics/route.ts`
  - `src/components/setup-checklist.tsx`
  - `src/components/starter-prompt-modal.tsx`
  - `src/components/ui/github-stars.tsx`
  - `src/hooks/use-diagnostics.ts`

---

## Non-Functional Requirements

### NFR-01: Design & Aesthetics
- Visual style must be playful and colorful: pastel pinks, purples, and yellows
- Must use soft shadows and rounded/bubbly shapes throughout
- Must use the Nunito Google Font for headings to reinforce the playful brand
- All components must support both light mode and dark mode

### NFR-02: Responsiveness
- All pages must be fully responsive across mobile (≥320px), tablet (≥768px), and desktop (≥1280px)
- Navigation must adapt to mobile (hamburger or simplified layout)
- Pricing cards must stack vertically on mobile

### NFR-03: Performance
- No new heavy dependencies should be introduced
- Before/after slider must use CSS transforms rather than JavaScript-heavy libraries
- Images use `next/image` with appropriate `width`, `height`, and `alt` attributes

### NFR-04: Accessibility
- All interactive elements must be keyboard-navigable
- All images must have descriptive `alt` text
- Colour contrast must meet WCAG AA standards in both light and dark modes
- Form elements must have associated labels

### NFR-05: Code Quality
- All new files must be TypeScript with proper types (no `any`)
- Must pass `pnpm run lint` and `pnpm run typecheck` with zero errors
- Components follow the existing pattern in `src/components/ui/` (client/server separation)
- No duplication — shared UI logic extracted into reusable components

### NFR-06: SEO
- Landing page must export a `metadata` object with: `title`, `description`, `keywords`, `openGraph`, `twitter`
- Pricing and Docs pages must have their own `metadata` exports
- `robots.ts` and `sitemap.ts` already exist and remain unchanged

---

## Acceptance Criteria

| ID | Criteria | Pass Condition |
|----|----------|----------------|
| AC-01 | Landing page hero is visible without auth | Page loads at `/` with headline, sub-headline, and 2 CTA buttons |
| AC-02 | Before/after slider is interactive | Drag handle moves and reveals before/after images |
| AC-03 | Header nav renders correct links | Features, Pricing, Docs links visible; Dashboard appears when logged in |
| AC-04 | Google sign-in button visible on login and register | "Continue with Google" button present on both pages |
| AC-05 | Dashboard requires authentication | Unauthenticated visit to `/dashboard` redirects to `/login` |
| AC-06 | Dashboard upload zone renders | Drag-and-drop zone with icon and instructions is visible |
| AC-07 | Style selector renders | 4 pill-style option buttons (Classic, Kawaii, Chibi, Realistic) visible |
| AC-08 | Generate button shows toast | Clicking "Generate Plushie" shows a "Coming soon" toast notification |
| AC-09 | Dashboard gallery shows mock items | At least 6 plushie cards rendered from mock data |
| AC-10 | Pricing page shows 3 tiers | Basic, Pro (highlighted), Elite cards render with correct prices and credits |
| AC-11 | Docs sidebar navigation works | Clicking sidebar links navigates between doc pages; active link is highlighted |
| AC-12 | Legal pages render | `/privacy`, `/terms`, `/cookies` all return 200 with structured content |
| AC-13 | Dark mode works across all pages | Toggling dark mode updates background, text, and component colours on every page |
| AC-14 | Mobile responsive | All pages usable at 375px width without horizontal overflow |
| AC-15 | Zero lint/type errors | `pnpm run lint && pnpm run typecheck` exits with code 0 |
| AC-16 | Boilerplate pages removed | `/chat` returns 404; boilerplate components no longer importable |
