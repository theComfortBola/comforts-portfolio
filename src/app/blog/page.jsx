import BlogView from "@/components/BlogView/BlogView";
import Newsletter from "@/components/Newsletter/Newsletter";
import ContactForm from "@/components/ContactForm/ContactForm";
import { fetchSubstackArticles } from "@/lib/substack";
import styles from "./page.module.css";

export const metadata = {
  title: "Blog — Comfort Bolakale",
  description: "Frameworks, real decisions, and uncomfortable truths about building in B2B SaaS.",
  openGraph: {
    title: "Blog — Comfort Bolakale",
    description: "Frameworks, real decisions, and uncomfortable truths about building in B2B SaaS.",
    url: "https://comfort-portfolio.vercel.app/blog",
  }
};

export default async function BlogPage() {
  const articles = await fetchSubstackArticles();

  return (
    <div className={styles.page}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.breadcrumb}>
              <span className={styles.dot}>•</span> PM • BUILDER • THINKER
            </p>
            <h1 className="text-hero">
              Where product <br/> thinking meets <br/>
              <span className={`font-script ${styles.accentWord}`}>honest</span> craft.
            </h1>
            <p className={`text-body ${styles.heroSubtext}`}>
              Frameworks, real decisions, and uncomfortable truths about building in B2B SaaS. Written for people who are actually shipping things.
            </p>
          </div>
        </section>

        {/* Blog View (Filter + Grid) */}
        <BlogView initialArticles={articles} />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Contact */}
      <ContactForm />
    </div>
  );
}
