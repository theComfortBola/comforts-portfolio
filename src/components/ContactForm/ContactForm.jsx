"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error, validationError

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Custom validation
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim()
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus("validationError");
      return;
    }

    setStatus("submitting");

    // Mock submission to Supabase
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: false, email: false, message: false });
      
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear individual error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
    if (status === "validationError" || status === "error") {
      setStatus("idle");
    }
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
        
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
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
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
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
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
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
              rows={5}
              className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
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
            <p className={styles.successMessage}>Thanks for reaching out, I will be in touch soon.</p>
          )}
          {status === "validationError" && (
            <p className={styles.errorMessage}>Please fill out all required fields correctly.</p>
          )}
          {status === "error" && (
            <p className={styles.errorMessage}>Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
