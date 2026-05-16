import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="font-script">Comfort B.</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/blog" className={styles.navLink}>Writing</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/contact" className={styles.ctaButton}>Say hello</Link>
        </nav>
      </div>
    </header>
  );
}
