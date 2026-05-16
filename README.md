# comforts-portfolio
Comfort's portfolio project
Project Brief — Comfort's Portfolio
Last updated: May 2026
Agent: Read this at the start of every session. This is your source of truth for the overall project.

Who This Is For
Comfort — a product leader with 2+ years building AI products in B2B/SaaS. She is thoughtful, discerning, and values excellence above all. This portfolio must reflect that. It should feel like a leader built it — not a job seeker.
Target visitors: Builders. Founders. Product teams. People making real decisions. Anyone who lands here should leave either wanting to hire Comfort or deeply respecting how she thinks.
Dual goal: Every page must do two things simultaneously — demonstrate depth of thinking, and make it easy to take action (book, contact, hire).

What This Site Contains
Blog page - First
Individual article page
Homepage
Contact page
Services page

Rule: Only build what is listed as current priority. Do not touch future pages until instructed.

Stack
Editor - Antigravity (Gemini agent)
Version control - GitHub
Hosting - Vercel
Database - Supabase
CMS - Substack

CMS — How Substack Works Here
Substack is the only content management system for the blog. There is no separate CMS, no admin panel, no manual uploads.
The flow:

Comfort publishes an article on Substack
Substack's RSS feed updates automatically
The portfolio fetches the RSS feed server-side
The article appears on the blog feed with title, date, cover image, excerpt, and tags
Clicking the article opens the full article on the portfolio (not on Substack)