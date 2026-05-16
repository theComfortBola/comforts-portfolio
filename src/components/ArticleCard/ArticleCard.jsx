import Link from "next/link";
import styles from "./ArticleCard.module.css";

const pastelColors = [
  "var(--color-chablis)",
  "var(--color-rosewhite)",
  "var(--color-serenade)",
  "var(--color-springwood)",
  "var(--color-zumthor)",
  "var(--color-satinlinen)",
];

export default function ArticleCard({ article }) {
  // Randomly assign a background color for the image placeholder
  // using a simple hash of the title to keep it consistent on re-renders
  const hash = article.title.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const bgColor = pastelColors[hash % pastelColors.length];

  return (
    <Link href={`/blog/${article.slug}`} className={styles.cardLink}>
      <article className={styles.card}>
        <div 
          className={styles.imageContainer} 
          style={{ backgroundColor: bgColor }}
        >
          {article.coverImage && (
            <img 
              src={article.coverImage} 
              alt={article.title} 
              className={styles.image}
              loading="lazy"
            />
          )}
          <span className={styles.categoryPill}>{article.category}</span>
        </div>
        
        <div className={styles.content}>
          <h2 className={styles.title}>{article.title}</h2>
          <p className={styles.excerpt}>{article.excerpt}</p>
          
          <div className={styles.meta}>
            <time dateTime={article.date}>{article.formattedDate}</time>
            <span className={styles.dot}>&middot;</span>
            <span>{article.readTime} read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
