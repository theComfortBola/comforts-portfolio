import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./RelatedArticles.module.css";

export default function RelatedArticles({ articles }) {
  if (!articles || articles.length === 0) return null;

  // Take up to 3 articles
  const displayArticles = articles.slice(0, 3);

  return (
    <section className={styles.relatedSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>YOU MAY ALSO LIKE</h2>
        
        <div className={styles.grid}>
          {displayArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
