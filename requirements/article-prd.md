# Article Page — PRD + FRD
**Feature:** Individual Article Page (`/blog/[slug]`)
**Status:** Design complete — ready to build
**Read alongside:** `project.md`, `blog-prd.md`, `.agent/skills/design.md`

---

## 1. Purpose

The article page is where the reading happens. It is the most important page on the site for SEO and for leaving a lasting impression. A visitor who reads a full article here is a warm lead — they've given Comfort their time and attention.

It must be a pleasure to read. It must rank on Google. It must load fast.

---

## 2. Content Source

All article content comes from Substack RSS (`content:encoded` field). The portfolio renders the full article — the visitor never needs to leave to Substack to read.

A link to the original Substack post is included on the page (for attribution and for subscribers who prefer Substack).

---

## 3. Page Structure

Build exactly in this order, top to bottom:

### 3.1 Article Intro (Plain Background)
- Clean, minimal opening
- Article title: large, Cormorant Garamond
- Category tag + read time + date published
- Author: Comfort's name + small avatar/photo (static asset)
- View count (if Supabase view tracking is implemented — see 5.5)
- No hero image here — image appears in section 3.2

### 3.2 Hero Block (PDP Layout)
- Two-column layout on desktop:
  - **Left:** Cover image (from Substack, `object-fit: cover`)
  - **Right:** Article title (repeated, large), view count, date, author
- Single column on mobile (image above, details below)
- This is the visual anchor of the page — make it strong

### 3.3 Article Body
- Full article content rendered from `content:encoded`
- Must render correctly: paragraphs, headings, bold, italic, lists, blockquotes, inline code
- Images within the article: full width, lazy loaded, `alt` text preserved from Substack
- Links within the article: open in new tab
- Videos: if a YouTube or Vimeo link is embedded in the Substack content, render as an iframe embed (not a raw link)
- Code blocks: monospace font (`--font-mono`), subtle background
- Max width for body text: `--max-width-prose` (680px) — centred
- Line height: `--leading-relaxed` (1.75)

### 3.4 Table of Contents (TOC)
- **Desktop:** Sticky sidebar on the left or right of the article body
  - Collapsible (open by default, can be hidden)
  - Lists all H2 and H3 headings in the article
  - Active heading highlights as user scrolls
  - Clicking a heading smooth-scrolls to that section
- **Mobile:** Collapsible accordion above the article body (after the hero block)
  - Collapsed by default
  - Tap to expand

> TOC is generated dynamically from the article's heading structure. If an article has no headings, TOC does not render.

### 3.5 Related Articles
- Heading: "More from Comfort" or similar
- Show 3 articles from the same category
- If fewer than 3 in category, fill with most recent articles
- Same card design as blog page grid
- Clicking → opens that article page

### 3.6 Bottom CTAs (Split Layout)
- Two side-by-side sections on desktop, stacked on mobile:
  - **Left:** Substack subscribe CTA — "Get articles like this in your inbox"
  - **Right:** Contact CTA — "Want to work together?"
- Each has a short line of copy and one action button
- Gold button for Substack. Red button for Contact (or vice versa — follow design spec)

### 3.7 Footer
- Same footer as blog page (consistent across site)

---

## 4. Functional Requirements

### 4.1 Article Fetching
- On page load, fetch the specific article by matching slug to Substack RSS entries
- Parse full content from `content:encoded`
- If article not found: show a clean 404 state ("This article doesn't exist — but these ones do") + show 3 recent articles
- Cache RSS fetch: 1 hour (same as blog page — reuse the same cached response)

### 4.2 Content Rendering
- Strip any Substack-specific wrapper HTML that conflicts with the portfolio's styles
- Apply portfolio typography styles to rendered content (do not let Substack's inline styles override tokens)
- Preserve: headings, paragraphs, bold, italic, lists, blockquotes, links, images, code
- Transform YouTube/Vimeo links to embedded iframes:
  - Detect URLs in the format `youtube.com/watch?v=` or `youtu.be/`
  - Replace with responsive iframe embed
  - 16:9 aspect ratio, full width of content column

### 4.3 Table of Contents Generation
- Parse all `<h2>` and `<h3>` tags from rendered content
- Generate anchor IDs for each heading (slugified: lowercase, hyphens)
- Build TOC list from these headings
- Highlight active heading on scroll using IntersectionObserver

### 4.4 Slug Routing
- URL: `/blog/[slug]`
- Slug derived from Substack article URL (same logic as blog page)
- Static generation preferred (if framework supports it) — generate pages at build time from RSS feed
- Fallback: server-side render if article is too new for static generation

### 4.5 View Count Tracking (Optional — Flag Before Building)
- On each article page load, increment a view counter in Supabase
- Table: `article_views` — fields: `slug`, `view_count`, `last_viewed`
- Display view count on the page (intro section and hero block)
- If Supabase call fails: fail silently — never break the page for analytics
- **Flag this to Comfort before implementing** — confirm she wants it

### 4.6 SEO Requirements
- Page `<title>`: "[Article Title] — Comfort [Last Name]"
- Meta description: article excerpt (first 155 characters, stripped of HTML)
- Open Graph tags: title, description, cover image URL, article type
- Twitter/X card: summary_large_image
- Canonical URL: `https://[domain]/blog/[slug]`
- Structured data: Article schema (JSON-LD)
  ```json
  {
    "@type": "Article",
    "headline": "[title]",
    "datePublished": "[date]",
    "author": { "@type": "Person", "name": "Comfort [Last Name]" },
    "image": "[cover image URL]",
    "description": "[excerpt]"
  }
  ```
- Semantic HTML: one `<h1>` per page (article title), content headings are `<h2>` and `<h3>`

### 4.7 Performance Requirements
- Article content must not block page render
- Images lazy loaded (except cover image — load eagerly)
- Cover image: use `priority` prop if using Next.js Image, or `loading="eager"` otherwise
- TOC does not block content render

### 4.8 Loading & Error States
- While article loads: show skeleton (title placeholder, content placeholder)
- If fetch fails: clean error state with link back to `/blog`
- If article slug not found: custom 404 with related articles

---

## 5. Responsive Behaviour

| Breakpoint | Behaviour |
|---|---|
| 375px (mobile) | Single column. TOC is collapsed accordion above body. Hero is stacked (image above, details below). |
| 768px (tablet) | Single column. TOC accordion. |
| 1024px+ (desktop) | Two-column hero. Sticky sidebar TOC. Content max-width enforced. |
| 1440px (wide) | Constrained to `--max-width`. Centred. |

---

## 6. What Is Not In Scope For This Feature

- Comments section
- Article editing or publishing (Substack handles this)
- User accounts or authentication
- Likes or reactions
- Any other page

---

## 7. Definition of Done

This page is complete when:
- [ ] Article content renders correctly from RSS for all content types (text, images, links, video embeds)
- [ ] TOC generates from headings, sticky on desktop, accordion on mobile
- [ ] Active heading highlights on scroll
- [ ] Related articles section shows 3 correct articles
- [ ] Both bottom CTAs render and link correctly
- [ ] View count tracked in Supabase (if approved by Comfort)
- [ ] All SEO tags present and correct (title, meta, OG, canonical, JSON-LD)
- [ ] 404 state renders cleanly for unknown slugs
- [ ] Loading and error states work correctly
- [ ] All breakpoints tested and correct
- [ ] Core Web Vitals pass in Vercel preview
- [ ] QA workflow completed and signed off
- [ ] Comfort has reviewed and approved
