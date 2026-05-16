"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Mock submission to Supabase
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.contactSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <p className={styles.label}>GET IN TOUCH</p>
          <h2 className={styles.heading}>
            Something worth<br/>talking about? <span className="font-script">Say it.</span>
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formRow}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.inputLabel}>NAME</label>
              <input 
                id="name"
                name="name"
                type="text" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className={styles.input}
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>EMAIL</label>
              <input 
                id="email"
                name="email"
                type="email" 
                placeholder="your@email.com" 
                value={formData.email}
                onChange={handleChange}
                required 
                className={styles.input}
              />
            </div>
          </div>
          
          <div className={styles.inputGroup}>
            <label htmlFor="message" className={styles.inputLabel}>MESSAGE</label>
            <textarea 
              id="message"
              name="message"
              placeholder="What's on your mind?" 
              value={formData.message}
              onChange={handleChange}
              required 
              rows={5}
              className={styles.textarea}
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.button}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send it →"}
          </button>
          
          {status === "success" && (
            <p className={styles.successMessage}>Message sent. Comfort will be in touch.</p>
          )}
          {status === "error" && (
            <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
