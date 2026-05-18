import Parser from "rss-parser";

const SUBSTACK_RSS_URL = "https://comfortbolakale.substack.com/feed";

const parser = new Parser({
  customFields: {
    item: [
      ["content:encoded", "content"],
      ["dc:creator", "creator"],
      ["description", "excerpt"],
    ],
  },
});

/**
 * Estimates read time based on 200 words per minute.
 */
function estimateReadTime(text) {
  if (!text) return "1 min";
  const words = text.replace(/<[^>]*>?/gm, "").split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}

/**
 * Processes HTML content to:
 * 1. Add IDs to <h2> and <h3> tags for TOC
 * 2. Extract the list of headings
 * 3. Ensure YouTube links/iframes are wrapped for responsive styling
 */
function processContent(html) {
  if (!html) return { processedHtml: "", headings: [] };

  const headings = [];
  let processedHtml = html;

  // Regex to find <h2> and <h3> tags and their content
  const headingRegex = /<(h[23])>(.*?)<\/\1>/gi;
  
  processedHtml = processedHtml.replace(headingRegex, (match, tag, innerText) => {
    // Create a URL-friendly slug
    const id = innerText
      .toLowerCase()
      .replace(/<[^>]*>?/gm, "") // remove any inner html
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    headings.push({
      id,
      title: innerText.replace(/<[^>]*>?/gm, ""), // clean text for TOC
      level: parseInt(tag.charAt(1)),
    });

    return `<${tag} id="${id}">${innerText}</${tag}>`;
  });

  // Wrap iframes for responsive video
  processedHtml = processedHtml.replace(
    /(<iframe[^>]*youtube\.com[^>]*><\/iframe>)/gi,
    '<div class="video-container">$1</div>'
  );

  return { processedHtml, headings };
}

/**
 * Fetches and parses the Substack RSS feed.
 */
export async function fetchSubstackArticles() {
  try {
    // Next.js fetch with revalidation (cache for 1 hour)
    const response = await fetch(SUBSTACK_RSS_URL, {
      next: { revalidate: 3600 },
    });
    
    if (!response.ok) {
      console.error("Failed to fetch Substack RSS");
      return [];
    }
    
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    
    return feed.items.map((item, index) => {
      // Create a slug from the link or title
      let slug = "";
      if (item.link) {
        const urlParts = new URL(item.link).pathname.split("/");
        slug = urlParts[urlParts.length - 1] || urlParts[urlParts.length - 2];
      } else {
        slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      }

      // Extract cover image from enclosure or first img tag in content
      let coverImage = null;
      if (item.enclosure && item.enclosure.url) {
        coverImage = item.enclosure.url;
      } else if (item.content) {
        const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) coverImage = imgMatch[1];
      }

      // Format date
      const dateObj = new Date(item.isoDate || item.pubDate);
      const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      // Categories (Substack tags)
      const category = item.categories && item.categories.length > 0 
        ? item.categories[0] 
        : "Product";

      const { processedHtml, headings } = processContent(item.content);

      return {
        id: item.guid || String(index),
        slug,
        title: item.title,
        excerpt: item.excerpt || item.contentSnippet?.substring(0, 150) + "...",
        coverImage,
        category,
        date: dateObj.toISOString().split("T")[0],
        formattedDate,
        readTime: estimateReadTime(item.content),
        headings,
        content: processedHtml,
      };
    });
  } catch (error) {
    console.error("Error fetching or parsing Substack feed:", error);
    return [];
  }
}

/**
 * Gets a single article by its slug.
 */
export async function getArticleBySlug(slug) {
  const articles = await fetchSubstackArticles();
  return articles.find((a) => a.slug === slug) || null;
}

