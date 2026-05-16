// Mock data for the Substack RSS feed

export const mockArticles = [
  {
    id: "1",
    slug: "the-spec-nobody-reads",
    title: "The spec nobody reads and the decision that ships anyway",
    excerpt: "Why written specs fail before engineering even opens them.",
    coverImage: null,
    category: "Product",
    date: "2025-04-28",
    formattedDate: "Apr 28, 2025",
    readTime: "8 min",
    headings: [
      { id: "the-myth-of-the-spec", title: "The myth of the spec", level: 2 },
      { id: "why-engineers-stop-reading", title: "Why engineers stop reading", level: 2 },
      { id: "the-meeting-that-decided", title: "The meeting that decided", level: 2 },
      { id: "what-actually-works", title: "What actually works", level: 2 },
      { id: "the-uncomfortable-truth", title: "The uncomfortable truth", level: 2 }
    ],
    content: `
      <h2 id="the-myth-of-the-spec">The myth of the spec</h2>
      <p>There is a belief in product culture that a well-written spec is the unit of alignment. That if you document the what, the why, and the how with enough clarity, engineering will read it, design will read it, and the right thing will get built.</p>
      <p>This belief is almost entirely fictional. Not because people are lazy. Because the spec arrives after the decision, not before it.</p>
      <blockquote>The document is the alibi. The meeting was the real product work.</blockquote>
      
      <h2 id="why-engineers-stop-reading">Why engineers stop reading</h2>
      <p>Attention inside your team.</p>
      <p>Engineers are not ignoring your spec because they are undisciplined. They are reading the Slack thread from the meeting two weeks ago, where the actual tradeoffs were made by three people and the spec was written afterward to reflect the conclusion.</p>
      <p>This isn't dysfunction. It's rational. The spec is downstream of reality.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Team meeting" />
        <figcaption>The real product work happens here.</figcaption>
      </figure>

      <h2 id="the-meeting-that-decided">The meeting that decided</h2>
      <p>Power dynamics in spec culture.</p>
      <p>In most B2B product orgs, decisions happen in three places: the leadership sync, the hallway conversation, and the Slack DM. The spec is the fourth place — where decisions get a postal address so they can be referenced later.</p>
      
      <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h2 id="what-actually-works">What actually works</h2>
      <p>Short documents that describe the problem, not the solution. Decision logs that record what was considered and what was chosen. Direct conversations with engineers before the spec exists, not after.</p>

      <h2 id="the-uncomfortable-truth">The uncomfortable truth</h2>
      <p>The spec is useful — just not for alignment. It's useful for onboarding people who weren't in the room, for resolving disputes three months later, for giving the PM something to point to. It's documentation infrastructure, not thinking infrastructure.</p>
      <p>The thinking happened before. If you're writing the spec, the hard work is either done or it wasn't done at all.</p>
    `
  },
  {
    id: "2",
    slug: "elegance-is-a-product-decision",
    title: "Elegance is a product decision, not a design one",
    excerpt: "When UX becomes the product team's alibi.",
    coverImage: null,
    category: "Design & Experience",
    date: "2025-04-14",
    formattedDate: "Apr 14, 2025",
    readTime: "869"
  },
  {
    id: "3",
    slug: "your-second-product-is-harder",
    title: "Your second product is harder. Here's why.",
    excerpt: "The false confidence of early product-market fit.",
    coverImage: null,
    category: "Startup",
    date: "2025-03-30",
    formattedDate: "Mar 30, 2025",
    readTime: "2.1k"
  },
  {
    id: "4",
    slug: "b2b-isnt-boring",
    title: "B2B isn't boring — you're just building the wrong thing",
    excerpt: "The customer who pays and the customer who uses are not the same person.",
    coverImage: null,
    category: "Business",
    date: "2025-03-15",
    formattedDate: "Mar 15, 2025",
    readTime: "654"
  },
  {
    id: "5",
    slug: "positioning-is-the-product",
    title: "Positioning is the product. Not the other way.",
    excerpt: "Most positioning fails because it describes features, not beliefs.",
    coverImage: null,
    category: "Marketing",
    date: "2025-03-05",
    formattedDate: "Mar 5, 2025",
    readTime: "1.5k"
  },
  {
    id: "6",
    slug: "ai-features-nobody-asked-for",
    title: "AI features nobody asked for and everyone shipped anyway",
    excerpt: "On the pressure to add intelligence and the cost of doing it wrong.",
    coverImage: null,
    category: "Product",
    date: "2025-02-20",
    formattedDate: "Feb 20, 2025",
    readTime: "3.2k"
  },
  {
    id: "7",
    slug: "the-empty-state-is-where",
    title: "The empty state is where most products lose their nerve",
    excerpt: "What you show when there's nothing to show is a character test.",
    coverImage: null,
    category: "Design & Experience",
    date: "2025-02-08",
    formattedDate: "Feb 8, 2025",
    readTime: "741"
  },
  {
    id: "8",
    slug: "founder-mode-is-pm-mode",
    title: "Founder mode is just PM mode with the org chart removed",
    excerpt: "What PMs can learn from watching founders operate.",
    coverImage: null,
    category: "Startup",
    date: "2025-01-25",
    formattedDate: "Jan 25, 2025",
    readTime: "1.4k"
  },
  {
    id: "9",
    slug: "another-mock-article",
    title: "When metrics become the product",
    excerpt: "Goodhart's law in modern SaaS development.",
    coverImage: null,
    category: "Business",
    date: "2025-01-10",
    formattedDate: "Jan 10, 2025",
    readTime: "1.1k"
  }
];

export async function fetchSubstackArticles() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockArticles;
}

export async function getArticleBySlug(slug) {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockArticles.find(article => article.slug === slug) || null;
}
