# Plushify UI — Implementation Plan

## Overview
This plan transforms the generic Next.js boilerplate into the Plushify SaaS UI. All work is UI-only — no backend logic, no real AI calls. Mock data simulates the live experience. Phases are ordered to build from foundation outward.

---

## Phase 0: Cleanup — Remove Boilerplate Files

Remove all starter-kit-specific files that have no place in Plushify.

- [ ] Delete `src/app/chat/page.tsx`
- [ ] Delete `src/app/chat/error.tsx`
- [ ] Delete `src/app/chat/loading.tsx`
- [ ] Delete `src/app/api/chat/route.ts`
- [ ] Delete `src/app/api/diagnostics/route.ts`
- [ ] Delete `src/components/setup-checklist.tsx`
- [ ] Delete `src/components/starter-prompt-modal.tsx`
- [ ] Delete `src/components/ui/github-stars.tsx`
- [ ] Delete `src/hooks/use-diagnostics.ts`
- [ ] Run `pnpm run lint && pnpm run typecheck` — confirm zero errors after cleanup

---

## Phase 1: Brand & Design System

Establish the Plushify visual identity before touching any page.

### 1.1 Color Palette
- [x] Update `src/app/globals.css` — replace the neutral color palette with Plushify pastels:
  - Primary: Soft pink (`oklch(0.75 0.18 350)`)
  - Secondary: Lavender (`oklch(0.82 0.12 290)`)
  - Accent: Warm yellow (`oklch(0.92 0.14 90)`)
  - Background: Warm off-white (`oklch(0.99 0.01 60)`)
  - Dark mode: Deep purple-navy tones for background/card/muted

### 1.2 Typography
- [x] Add **Nunito** via `next/font/google` in `src/app/layout.tsx`
- [x] Expose Nunito as a CSS variable (e.g. `--font-nunito`)
- [x] Apply Nunito to headings globally via `globals.css`

### 1.3 Mock Data File
- [x] Create `src/lib/mock-data.ts` with:
  - `MOCK_GALLERY_ITEMS` — 6 plushie records with `id`, `createdAt`, `inputImageUrl`, `outputImageUrl`, `style`, `status`
  - `MOCK_USER_STATS` — `{ totalGenerated: 12, creditsRemaining: 18, plan: "Basic" }`
  - `MOCK_BEFORE_AFTER_PAIRS` — 3 pairs with `beforeUrl`, `afterUrl`, `label`
  - `MOCK_EXAMPLE_GALLERY` — 8 items with `url`, `alt`, `label`
  - All image URLs use `https://placehold.co/` with size and descriptive alt text

---

## Phase 2: Global Shell

Update the app-wide chrome so every page has the correct Plushify branding.

### 2.1 Site Header
- [x] Rewrite `src/components/site-header.tsx`:
  - [x] Plushify logo (🧸 icon + "Plushify" wordmark in pink gradient)
  - [x] Nav links: Features (anchor `/#features`), Pricing (`/pricing`), Docs (`/docs`)
  - [x] Conditional "Dashboard" link when user is authenticated
  - [x] Reuse existing `UserProfile` component for auth menu
  - [x] Reuse existing `ModeToggle` component
  - [x] Mobile-responsive layout (collapse nav links on small screens)

### 2.2 Site Footer
- [x] Rewrite `src/components/site-footer.tsx`:
  - [x] Column 1 — Product: Features, Pricing
  - [x] Column 2 — Docs: Getting Started, How to Upload, FAQ
  - [x] Column 3 — Legal: Privacy Policy, Terms of Service, Cookie Policy
  - [x] Column 4 — Brand: Plushify logo, tagline, placeholder social icon links
  - [x] Copyright line at bottom

---

## Phase 3: Landing Page

Complete rewrite of `src/app/page.tsx`.

### 3.1 New Component — Before/After Slider
- [x] Create `src/components/before-after-slider.tsx`:
  - [x] Accepts `beforeUrl`, `afterUrl`, `beforeAlt`, `afterAlt` props
  - [x] Vertical drag handle using `useState` + pointer events
  - [x] CSS `clip-path` or absolute overlay to reveal before/after
  - [x] "Before" / "After" labels overlaid on each side

### 3.2 Landing Page Sections
- [x] **Hero section**:
  - [x] Large headline: "Turn Anyone Into a Plushie"
  - [x] Sub-headline explaining the product
  - [x] "Get Started" button → `/register`
  - [x] "See Examples" button → `#examples` anchor
  - [x] Hero illustration (placeholder image or SVG)

- [x] **Before/After showcase** (id="examples"):
  - [x] 3 `BeforeAfterSlider` instances side by side using `MOCK_BEFORE_AFTER_PAIRS`
  - [x] Labels below each (Person, Pet, Family)

- [x] **How It Works** section:
  - [x] 3-step flow: Upload Photo → Choose Style → Download Plushie
  - [x] Each step: numbered circle, icon, title, description

- [x] **Example Gallery** section:
  - [x] Responsive grid (2 cols mobile, 3–4 cols desktop)
  - [x] 8 example cards from `MOCK_EXAMPLE_GALLERY`

- [x] **Features** section (id="features"):
  - [x] 4 tiles: Lightning Fast, HD Quality, Pet Friendly, Secure & Private
  - [x] Each with icon, title, short description

- [x] **CTA Banner**:
  - [x] Full-width pink/gradient background
  - [x] "Ready to create your plushie?" heading
  - [x] "Get Started Free" button → `/register`

- [x] **SEO metadata**:
  - [x] Update `metadata` export: title, description, keywords, openGraph, twitter card

---

## Phase 4: Authenticated Dashboard

Complete rewrite of `src/app/dashboard/page.tsx`.

### 4.1 New Component — Image Upload Zone
- [x] Create `src/components/image-upload.tsx`:
  - [x] Dashed border drop zone
  - [x] Upload icon + "Drag & drop or click to upload" text
  - [x] Hidden `<input type="file" accept="image/*">` behind styled button
  - [x] Visual feedback on drag-over state (border colour change)
  - [x] Displays selected file name when a file is chosen (no actual upload)

### 4.2 New Component — Plushie Card
- [x] Create `src/components/plushie-card.tsx`:
  - [x] Image thumbnail (output plushie image)
  - [x] Style badge (Classic / Kawaii / etc.)
  - [x] Date generated
  - [x] "Download" button → shows `toast("Coming soon — backend not connected yet")`
  - [x] "Delete" button → shows same toast
  - [x] Hover effect with soft shadow

### 4.3 Dashboard Page
- [x] Keep existing auth session check (redirect to `/login` if unauthenticated)
- [x] **Stats bar**: Credits remaining, total generated, plan name — from `MOCK_USER_STATS`
- [x] **Upload section**:
  - [x] `ImageUpload` component
  - [x] Style selector: 4 pill-style radio buttons (Classic, Kawaii, Chibi, Realistic)
  - [x] "Generate Plushie" button → `toast("Coming soon...")`
- [x] **Gallery section**:
  - [x] "My Plushies" heading + count badge
  - [x] Responsive grid of `PlushieCard` components from `MOCK_GALLERY_ITEMS`
  - [x] Empty state component (icon + message + "Generate your first plushie" button)

---

## Phase 5: Pricing Page

- [x] Create `src/components/pricing-card.tsx`:
  - [x] Props: `tier`, `price`, `credits`, `features[]`, `isPopular`, `ctaLabel`
  - [x] Popular tier has distinct background/border treatment
  - [x] "Popular" badge on Pro tier
  - [x] Checkmark list of features
  - [x] CTA button → `/register`

- [x] Create `src/app/pricing/page.tsx`:
  - [x] Page heading + sub-heading
  - [x] Monthly / Annual toggle (`useState`, UI only — no price change logic needed)
  - [x] 3 `PricingCard` components:
    - Basic: $9/mo, 30 credits
    - Pro: $19/mo, 100 credits (isPopular)
    - Elite: $29/mo, 200 credits
  - [x] Each card includes feature list:
    - Basic: HD downloads, Email support, 30-day history
    - Pro: Everything in Basic + Priority processing, 90-day history, API access
    - Elite: Everything in Pro + Dedicated support, Unlimited history, Commercial licence
  - [x] Export `metadata` with pricing page SEO

---

## Phase 6: Docs Section

### 6.1 Docs Sidebar Component
- [x] Create `src/components/docs-sidebar.tsx`:
  - [x] Static nav structure with sections and links
  - [x] Highlight active link using `usePathname()`
  - [x] Mobile: collapsible with toggle button

### 6.2 Docs Layout
- [x] Create `src/app/docs/layout.tsx`:
  - [x] Two-column layout: `DocsSidebar` (240px) + main content area
  - [x] Single column on mobile (sidebar above content or toggled)

### 6.3 Docs Pages
- [x] Create `src/app/docs/page.tsx` — redirect to `/docs/getting-started`
- [x] Create `src/app/docs/getting-started/page.tsx`:
  - [x] What is Plushify
  - [x] Creating an account
  - [x] Understanding credits
  - [x] Quick start steps
- [x] Create `src/app/docs/how-to-upload/page.tsx`:
  - [x] Supported image formats and size limits
  - [x] Step-by-step upload instructions
  - [x] Tips for best results (lighting, framing, single subject)
  - [x] Style options explained
- [x] Create `src/app/docs/faq/page.tsx`:
  - [x] 8–10 common Q&A pairs in an accordion or styled list
  - [x] Topics: credits, supported animals, image quality, privacy, refunds

---

## Phase 7: Legal Pages

- [x] Create `src/app/(legal)/layout.tsx`:
  - [x] Centered, max-width prose layout
  - [x] Consistent heading + "Last updated" date

- [x] Create `src/app/(legal)/privacy/page.tsx` — Privacy Policy:
  - [x] Sections: Data We Collect, How We Use Your Data, Data Storage, Third-Party Services, Your Rights, Contact

- [x] Create `src/app/(legal)/terms/page.tsx` — Terms of Service:
  - [x] Sections: Acceptance, Service Description, User Accounts, Acceptable Use, Credits & Payments, Intellectual Property, Termination, Disclaimer

- [x] Create `src/app/(legal)/cookies/page.tsx` — Cookie Policy:
  - [x] Sections: What Are Cookies, How We Use Cookies, Types of Cookies, Managing Cookies, Contact

---

## Phase 8: Auth Page Branding

Minor updates only — no logic changes.

- [x] Update `src/app/(auth)/login/page.tsx`:
  - [x] Add Plushify logo (🧸 + "Plushify") above the card
  - [x] Update card title to "Welcome back to Plushify"

- [x] Update `src/app/(auth)/register/page.tsx`:
  - [x] Add Plushify logo above the card
  - [x] Update card title to "Create your Plushify account"

---

## Phase 9: Final QA & Polish

- [x] Run `pnpm run lint && pnpm run typecheck` — fix all errors
- [x] Check all internal links navigate correctly (no broken routes)
- [x] Verify dark mode on every page
- [x] Verify mobile layout at 375px on:
  - [x] Landing page
  - [x] Dashboard
  - [x] Pricing page
  - [x] Docs page
  - [x] Legal pages
- [x] Verify auth flow: login → dashboard → logout → landing
- [x] Confirm all toast messages fire on non-functional buttons
- [ ] Commit all changes with descriptive message
- [ ] Push to GitHub
