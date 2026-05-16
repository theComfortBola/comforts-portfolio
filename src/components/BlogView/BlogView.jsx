"use client";

import { useState } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import styles from "./BlogView.module.css";

const CATEGORIES = [
  "All",
  "Design & Experience",
  "Business",
  "Product",
  "Marketing",
  "Startup"
];

const ARTICLES_PER_PAGE = 8;

export default function BlogView({ initialArticles }) {
  const [activeTab, setActiveTab] = useState("All");
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const filteredArticles = activeTab === "All" 
    ? initialArticles 
    : initialArticles.filter(article => article.category === activeTab);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleTabClick = (category) => {
    setActiveTab(category);
    setVisibleCount(ARTICLES_PER_PAGE);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ARTICLES_PER_PAGE);
  };

  return (
    <div className={styles.blogView}>
      {/* Category Tabs */}
      <div className={styles.tabsContainer}>
        <div className={styles.tabsScroll}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`${styles.tab} ${activeTab === category ? styles.activeTab : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Article Grid */}
      <div className={styles.grid}>
        {visibleArticles.length > 0 ? (
          visibleArticles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <div className={styles.emptyState}>
            No articles found in this category.
          </div>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className={styles.loadMoreContainer}>
          <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
            Load more articles
          </button>
        </div>
      )}
    </div>
  );
}
