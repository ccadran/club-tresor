import React from "react";
import styles from "./concept.module.scss";

export default function concept() {
  return (
    <div className={styles.conceptContainer}>
      <h2>Notre concept</h2>
      <div className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>Qui sommes-nous</h3>
          <p>
            Une sélection de vêtements Vintage, ainsi que Nos Séries Limitées,
            fabriquées en France à partir de stocks de tissus dormants ou
            upcyclées. Une sélection de vêtements Vintage, ainsi que Nos Séries
            Limitées, fabriquées en France à partir de stocks de tissus dormants
            ou upcyclées.Une sélection de vêtements Vintage, ainsi que Nos
            Séries Limitées, fabriquées en France à partir de stocks de tissus
            dormants ou upcyclées.
          </p>
        </div>
      </div>
    </div>
  );
}
