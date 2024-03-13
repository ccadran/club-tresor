import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerNav}>
        <div className={styles.social}>
          <p>FB</p>
          <p>Insta</p>
        </div>
        <div className={styles.navigation}>
          <ul>
            <a href="">
              <li>Shop</li>
            </a>
            <a href="">
              <li>Galeries</li>
            </a>
            <a href="">
              <li>Le club</li>
            </a>
            <a href="">
              <li>Outfit</li>
            </a>
          </ul>
        </div>
      </div>
      <h1>Club Trésor</h1>
    </div>
  );
}
