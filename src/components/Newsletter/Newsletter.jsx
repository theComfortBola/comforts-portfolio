"use client";

import styles from "./Newsletter.module.css";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, error, success

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !isValidEmail(email)) {
      setStatus("error");
      return;
    }

    // Connects to Substack's embed subscribe form later
    console.log("Subscribed:", email);
    setStatus("success");
    setEmail("");
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (status === "error") {
      setStatus("idle");
    }
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
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            <input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={handleChange}
              className={`${styles.input} ${status === "error" ? styles.inputError : ""}`}
            />
            <button type="submit" className={styles.button}>Subscribe &rarr;</button>
          </form>
          {status === "error" && (
            <p className={styles.errorMessage}>please double check your email</p>
          )}
          {status === "success" && (
            <p className={styles.successMessage}>Thank you for subscribing</p>
          )}
        </div>
      </div>
    </section>
  );
}
