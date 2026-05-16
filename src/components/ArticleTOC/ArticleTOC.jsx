"use client";

import { useState, useEffect } from "react";
import styles from "./ArticleTOC.module.css";

export default function ArticleTOC({ headings }) {
  const [activeId, setActiveId] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Set up intersection observer to track active heading
  useEffect(() => {
    if (!headings || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -80% 0px", // Trigger when heading is near the top
        threshold: 1.0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings || headings.length === 0) return null;

  return (
    <nav className={`${styles.toc} ${isCollapsed ? styles.collapsed : ""}`}>
      <div className={styles.header}>
        <h3 className={styles.title}>Contents</h3>
        <button
          className={styles.collapseButton}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Table of Contents"
        >
          {isCollapsed ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          )}
        </button>
      </div>

      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {headings.map((heading) => (
            <li key={heading.id} className={styles.listItem}>
              <a
                href={`#${heading.id}`}
                className={`${styles.link} ${
                  activeId === heading.id ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
