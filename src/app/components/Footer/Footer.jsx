import React from "react";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.primaryFooter}>
        <div className={styles.footerNav}>
          <div className={styles.social}>
            <a href="https://www.facebook.com/weloveclubtresor">
              <img src="/icons/facebook.svg" alt="" />
            </a>
            <a href="https://www.instagram.com/clubtresor/">
              <img src="/icons/instagram.svg" alt="" />
            </a>
          </div>
          <div className={styles.navigation}>
            <ul>
              <a href="/">
                <li>Accueil</li>
              </a>
              <a href="https://club-tresor.com/">
                <li>Shop</li>
              </a>
              <a href="">
                <li>Galeries</li>
              </a>
              <a href="/blog">
                <li>Le Blog</li>
              </a>
              <a href="/outfit">
                <li>Outfit</li>
              </a>
            </ul>
          </div>
        </div>
        <h1>Club Trésor</h1>
      </div>
      <div className={styles.sconfFooter}>
        <div className={styles.newsletter}>
          <h4>Rejoignez le club</h4>
          <p>Inscrivez-vous pour ne louper aucune nouveauté</p>
          <div className={styles.email}>
            <input
              type="email"
              name=""
              id=""
              placeholder="Votre adresse mail"
            />
            <input type="submit" value="S'abonner" />
          </div>
        </div>
      </div>
    </div>
  );
}
