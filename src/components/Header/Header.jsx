"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="font-script">Comfort B.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link href="/blog" className={styles.navLink}>Writing</Link>
          <Link href="/contact" className={styles.ctaButton}>Say hello</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.lineOpen1 : ""}`}></span>
          <span className={`${styles.hamburgerLine} ${isMenuOpen ? styles.lineOpen2 : ""}`}></span>
        </button>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <Link href="/blog" className={styles.mobileNavLink} onClick={toggleMenu}>Writing</Link>
              <Link href="/contact" className={styles.mobileCtaButton} onClick={toggleMenu}>Say hello</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
