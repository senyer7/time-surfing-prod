import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} ${styles.frame}`}>
      <div className={styles.footerContent}>
        <h3 className={styles.footerText}>
          И ещё пример — чтобы экономить время и всё держать под рукой, я все
          свои проекты объединил на одной платформе, которую сам и создал
          <span className={styles.senyerNet}>
            <a
              href="https://senyer7.ru/senyernet"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.senyerNetLink}
            >
              Senyer<span className={styles.netAccent}>NET</span>
            </a>
          </span>
        </h3>
        <h2 className={styles.footerTitle}>enjoy surf</h2>
      </div>
    </footer>
  );
};

export default Footer;
