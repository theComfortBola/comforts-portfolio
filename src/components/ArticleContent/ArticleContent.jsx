import styles from "./ArticleContent.module.css";

export default function ArticleContent({ content }) {
  if (!content) return null;

  return (
    <div 
      className={styles.articleBody}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
