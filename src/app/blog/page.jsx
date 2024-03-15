import React from "react";
import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <div className={styles.articleContainer}>
      <a href="/blog/article" className={styles.article}>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
        <div className={styles.articleContent}>
          <h3>Titre</h3>
          <h5>Date</h5>
          <p>
            Une sélection de vêtements Vintage, ainsi que Nos Séries Limitées,
            fabriquées en France à partir de stocks de tissus dormants ou
            upcyclées.Une sélection de vêtements Vintage, ainsi que Nos Séries
            Limitées, fabriquées en France à partir de stocks de tissus dormants
            ou upcyclées.
          </p>
        </div>
      </a>
      <a href="/blog/article" className={styles.article}>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
        <div className={styles.articleContent}>
          <h3>Titre</h3>
          <h5>Date</h5>
          <p>
            Une sélection de vêtements Vintage, ainsi que Nos Séries Limitées,
            fabriquées en France à partir de stocks de tissus dormants ou
            upcyclées.Une sélection de vêtements Vintage, ainsi que Nos Séries
            Limitées, fabriquées en France à partir de stocks de tissus dormants
            ou upcyclées.
          </p>
        </div>
      </a>
    </div>
  );
}
