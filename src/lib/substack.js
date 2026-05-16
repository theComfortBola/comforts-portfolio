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
    readTime: "1.2k"
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
