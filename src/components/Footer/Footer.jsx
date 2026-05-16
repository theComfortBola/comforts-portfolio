import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.logo}>Comfort Bolakale</div>
        
        <div className={styles.links}>
          <div className={styles.navGroup}>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/services" className={styles.link}>Services</Link>
          </div>
          
          <div className={styles.navGroup}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
            <a href="https://substack.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Substack</a>
          </div>
        </div>
        
        <div className={styles.copyright}>
          &copy; {currentYear} &mdash; All rights reserved
        </div>
      </div>
    </footer>
  );
}
