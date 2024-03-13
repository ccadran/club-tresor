import React from "react";
import styles from "./engagement2.module.scss";

export default function Engagement2() {
  return (
    <div className={styles.engagementContainer}>
      <h3>
        <span>Un engagement</span>
        <span> de qualité</span>
      </h3>
      <div className={styles.engagementContent}>
        <div className={styles.engagement}>
          <h4>Revaloriser l’ancien</h4>
          <p>
            Avec Notre Sélection Vintage, nous vous proposons des vêtements de
            seconde main, ce qui permet de revaloriser l'ancien et de réutiliser
            des vêtements déjà portés. <br /> L'impact environnemental est très
            limité, puisqu'aucun nouveau vêtement n'est créé.
          </p>
        </div>
        <div className={styles.engagement}>
          <h4>Matières de qualité</h4>
          <p>
            Nous nous efforçons de sélectionner des matières solides et de
            qualité pour nos produits, afin qu'ils soient plus durables.
            <br />
            Notre but est que chaque vêtement puisse être réutilisé et se passe
            d'un enfant à l'autre.
          </p>
        </div>
      </div>
      <div className={styles.engagementBackground}>
        <div className={styles.stickyBg}>
          <div className={styles.sticky}>
            <div className={styles.leftClipPath}></div>
            <div className={styles.rightClipPath}></div>
            <div className={styles.imgContainer}>
              <img src="/images/illu.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
