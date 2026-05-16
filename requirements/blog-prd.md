# Blog Page — PRD + FRD
**Feature:** Blog Index Page (`/blog`)
**Status:** Design complete — ready to build
**Read alongside:** `project.md`, `.agent/skills/design.md`

---

## 1. Purpose

The blog page is the intellectual centre of Comfort's portfolio. It is where her thinking lives. Every visitor who lands here should leave with one of two reactions: *I want to hire her* or *I need to keep reading.*

It must rank on Google. It must load fast. It must look nothing like a generic developer blog.

---

## 2. What This Page Does

- Displays all articles published by Comfort on Substack
- Filters articles by category
- Captures email subscribers (Substack newsletter)
- Provides a contact entry point
- Ranks on Google for Comfort's name and topic areas

---

## 3. Content Source

All articles come from Substack via RSS feed. See `project.md` → CMS section and `.agent/workflows/substack-sync-workflow.md` for full technical detail.

**Categories (used as filter tabs):**
- All
- Case Studies
- Product
- Business
- Design & Experience
- Startup
- Marketing

> Categories must map to Substack tags. When Comfort tags an article on Substack, it must appear under the correct tab on the blog page.

---

## 4. Page Structure

Build exactly in this order, top to bottom:

### 4.1 Hero Section
- Large display heading — Comfort's blog name or positioning statement
- Short subheading (1–2 lines max)
- Font: Cormorant Garamond, large, confident
- No buttons. No stock images. Typography leads.

### 4.2 Category Filter Tabs
- Horizontal tab row: All / Case Studies / Product / Business / Design & Experience / Startup / Marketing
- Default selected: All
- Clicking a tab filters the article grid below
- Active tab: gold underline or gold text
- Smooth filter transition (no page reload)

### 4.3 Article Grid
- 8 articles shown on load
- Grid layout: 2 columns desktop, 1 column mobile
- Each article card displays:
  - Cover image (from Substack)
  - Category tag (pill — mapped from Substack tags)
  - Article title
  - Short excerpt (max 2 lines)
  - Date published
  - Read time (calculated: avg 200 words/min)
- Cards have slight rotation (1–2deg) — editorial feel
- Hover state: lift + gold accent
- Clicking card → opens `/blog/[article-slug]`

### 4.4 Load More
- Button below the grid: "Load more"
- Loads next 8 articles
- No full page reload — append to grid
- Hide button when no more articles exist

### 4.5 Substack Subscribe Section
- Heading: invite to subscribe
- Subtext: what they'll get (Comfort's thinking, direct)
- Email input + Subscribe button
- Connects to Substack's embed subscribe form
- Background: slightly different from page bg (use `--color-bg-alt`)

### 4.6 Contact Form
- Fields: Name, Email, Message
- Submit button
- On success: show confirmation message (do not redirect)
- On error: show specific field errors
- Form submissions → Supabase table (`contact_submissions`)
- Fields to store: name, email, message, timestamp, source page

### 4.7 Footer
- Comfort's name
- Navigation links: Blog, About (future), Services (future)
- Social links (LinkedIn, Substack — URLs to be provided by Comfort)
- Copyright line

---

## 5. Functional Requirements

### 5.1 RSS Feed Sync
- Fetch Substack RSS server-side on page load
- Cache response: 1 hour
- Parse fields: title, slug (from link), date, excerpt, cover image, tags, content
- If cover image missing: use a warm gradient fallback (using token colours)
- If tags missing: article appears under "All" only
- Sort: newest first by default

### 5.2 Category Filtering
- Filtering happens client-side (already fetched data — no re-fetch)
- Selecting a tab shows only articles with matching tag
- "All" shows everything
- Article count updates per tab (optional — add if straightforward)

### 5.3 Article Slugs
- Slug derived from the Substack article URL
- Format: `/blog/[slug]`
- Must be URL-safe (lowercase, hyphens, no special characters)

### 5.4 SEO Requirements
- Page `<title>`: "Blog — Comfort [Last Name]"
- Meta description: short description of the blog's focus
- Open Graph tags: title, description, image (use a default OG image)
- Canonical URL: `https://[domain]/blog`
- Semantic HTML: page has one `<h1>` (hero heading), article titles are `<h2>`

### 5.5 Performance Requirements
- Core Web Vitals must pass (LCP, CLS, FID)
- Images: lazy load below the fold, defined dimensions to prevent layout shift
- Fonts: loaded via Google Fonts with `font-display: swap`
- RSS fetch must not block page render — use loading state

### 5.6 Loading & Error States
- While RSS is fetching: show skeleton card placeholders (same grid layout)
- If RSS fetch fails: show a clean error message ("Articles unavailable right now. Try again shortly.")
- Never show a blank page or a raw error

### 5.7 Contact Form
- Client-side validation before submit (required fields, valid email format)
- On submit: POST to Supabase
- Success state: "Message sent. Comfort will be in touch."
- Error state: "Something went wrong. Please try again."
- Disable submit button while submitting (prevent double submit)

---

## 6. Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| 375px (mobile) | Single column grid. Category tabs scroll horizontally. |
| 768px (tablet) | Single or 2-col grid depending on card width. |
| 1024px+ (desktop) | 2-column grid. Full layout. |
| 1440px (wide) | Content constrained to `--max-width` (1200px). Centred. |

---

## 7. What Is Not In Scope For This Feature

- Homepage
- Individual article page (separate PRD)
- Services page
- About page
- Authentication of any kind
- Comfort's admin interface (Substack handles publishing)

---

## 8. Definition of Done

This page is complete when:
- [ ] All 7 sections render correctly at all breakpoints
- [ ] RSS feed fetches, parses, and displays real articles from Substack
- [ ] Category filtering works without page reload
- [ ] Load more appends articles correctly
- [ ] Contact form submits to Supabase and shows correct states
- [ ] Substack subscribe form is live
- [ ] All SEO tags are present and correct
- [ ] Core Web Vitals pass in Vercel preview
- [ ] QA workflow has been completed and signed off
- [ ] Comfort has reviewed and approved
