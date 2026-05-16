"use client";

import styles from "./Newsletter.module.css";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Connects to Substack's embed subscribe form later
    console.log("Subscribed:", email);
    alert("Subscribed! (Mock)");
    setEmail("");
  };

  return (
    <section className={styles.newsletter}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.label}>NEWSLETTER</p>
          <h2 className={styles.heading}>Stay in the <br/><span className="font-script">conversation.</span></h2>
          <p className={styles.subtext}>
            No roundups. No noise. Just thinking, <br/>
            when there's something worth saying.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <input 
            type="email" 
            placeholder="your@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className={styles.input}
          />
          <button type="submit" className={styles.button}>Subscribe &rarr;</button>
        </form>
      </div>
    </section>
  );
}
