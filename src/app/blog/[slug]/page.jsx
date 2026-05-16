import { notFound } from "next/navigation";
import { getArticleBySlug, fetchSubstackArticles } from "@/lib/substack";
import ArticleTOC from "@/components/ArticleTOC/ArticleTOC";
import ArticleContent from "@/components/ArticleContent/ArticleContent";
import RelatedArticles from "@/components/RelatedArticles/RelatedArticles";
import Newsletter from "@/components/Newsletter/Newsletter";
import styles from "./page.module.css";

// Generate metadata dynamically
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Comfort Bolakale`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Fetch all articles for the "Related Articles" section
  const allArticles = await fetchSubstackArticles();
  const relatedArticles = allArticles.filter((a) => a.slug !== slug).slice(0, 3);

  // Generate a random pastel background color for the hero placeholder
  const pastelColors = [
    "var(--color-chablis)",
    "var(--color-rosewhite)",
    "var(--color-serenade)",
    "var(--color-springwood)",
    "var(--color-zumthor)",
    "var(--color-satinlinen)",
  ];
  const hash = article.title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const bgColor = pastelColors[hash % pastelColors.length];

  return (
    <div className={styles.page}>
      <article className="container">
        {/* Hero Section */}
        <header className={styles.hero}>
          {/* First Section: Text comes first */}
          <div className={styles.heroTopSection}>
            <p className={styles.metaTop}>
              <span className={styles.category}>{article.category}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </p>
            <h2 className={styles.heroExcerpt}>{article.excerpt}</h2>
          </div>

          {/* Second Section: Image + Title + Details */}
          <div className={styles.heroBottomSection}>
            <div 
              className={styles.heroImagePlaceholder}
              style={{ backgroundColor: bgColor }}
            >
              {article.coverImage && (
                <img src={article.coverImage} alt={article.title} className={styles.heroImage} />
              )}
            </div>
            
            <div className={styles.heroDetails}>
              <h1 className={styles.title}>{article.title}</h1>
              
              <div className={styles.metaDataGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>DATE</span>
                  <span className={styles.metaValue}>{article.formattedDate}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>VIEWS</span>
                  <span className={styles.metaValue}>1,240 reads</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>LENGTH</span>
                  <span className={styles.metaValue}>{article.readTime}</span>
                </div>
              </div>

              <div className={styles.author}>
                <div className={styles.authorAvatar}>C</div>
                <span className={styles.authorName}>Written by Comfort B.</span>
              </div>
            </div>
          </div>
        </header>

        {/* Body Section */}
        <div className={styles.bodyLayout}>
          <aside className={styles.sidebar}>
            {article.headings && article.headings.length > 0 && (
              <ArticleTOC headings={article.headings} />
            )}
          </aside>
          <div className={styles.mainContent}>
            {article.content ? (
              <ArticleContent content={article.content} />
            ) : (
              <div className={styles.comingSoon}>
                <p>Full article content is coming soon.</p>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
