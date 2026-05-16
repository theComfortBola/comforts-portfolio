# Research Skill
> How to validate before you build. Never guess.

---

## The Rule

Before writing a single line of code for any new feature, integration, or library — research first. Assumptions are the most expensive thing you can bring to a build.

---

## When to Research

- Any new npm package (check: weekly downloads, last published date, open issues, GitHub stars)
- Any API integration (check: official docs, rate limits, authentication method, free tier limits)
- Any browser API (check: caniuse.com for support coverage)
- Any architectural decision (check: existing patterns in the codebase first)
- Substack RSS feed structure (check: Combo's actual feed before building the sync)

---

## Research Checklist (Run Before Building)

1. **Find the official source.** GitHub repo or official docs — not a random Medium article.
2. **Check the date.** Is this still maintained? When was the last commit / release?
3. **Check for known issues.** Search GitHub issues for anything related to your use case.
4. **Validate compatibility.** Does it work with the current stack (framework version, Node version)?
5. **Note the finding.** Add what you discovered to `findings.md` before proceeding.

---

## Substack RSS — What to Validate

Before building the Substack sync, fetch Combo's actual RSS feed and confirm:
- Feed URL format: `https://[publication].substack.com/feed`
- Fields available: title, link, pubDate, description, `content:encoded`, `media:content` (cover image)
- Confirm cover image field name — it varies between publications
- Check if tags/categories are included in the feed

---

## What to Log in `findings.md`

```
## [Date] — [What you researched]
- Source: [URL]
- Finding: [What you found]
- Decision: [What you'll do based on it]
- Risk: [Any limitations or gotchas to flag]
```

---

## What You Must Never Do

- Never install a package without checking it first.
- Never assume an API works a certain way — read the docs.
- Never build the Substack sync without validating the actual feed structure.
- Never skip logging your findings. Combo needs to be able to trace decisions.
