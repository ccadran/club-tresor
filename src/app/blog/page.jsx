import React from "react";
import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <div className={styles.articleContainer}>
      <a href="/blog/article1" className={styles.article}>
        <div className={styles.imgContainer}>
          <img src="/images/upcycling-article1.png" alt="" />
        </div>
        <div className={styles.articleContent}>
          <h3>
            Redonner vie à la mode : L'art de l'upcycling dans l'industrie de la
            mode
          </h3>
          <h5>15/03/2024</h5>
          <p>
            Dans un monde où la mode évolue rapidement et où la conscience
            environnementale devient de plus en plus importante, une pratique
            émergente prend de l'ampleur : l'upcycling.
          </p>
        </div>
      </a>
      <a href="/blog/article1" className={styles.article}>
        <div className={styles.imgContainer}>
          <img src="/images/marseille.jpg" alt="" />
        </div>
        <div className={styles.articleContent}>
          <h3>À la découverte de notre processus de création</h3>
          <h5>24/01/2024</h5>
          <p>
            Chez Club Trésor, nous croyons en une mode qui raconte des
            histoires, une mode qui célèbre le passé tout en regardant vers
            l'avenir. C'est pourquoi nous sommes fiers de vous ouvrir les portes
            de nos usines situées à Marseille, où chaque pièce de notre
            collection vintage pour enfants prend vie à travers un processus
            méticuleux et passionné.
          </p>
        </div>
      </a>
      <a href="/blog/article1" className={styles.article}>
        <div className={styles.imgContainer}>
          <img src="/images/popuStore.png" alt="" />
        </div>
        <div className={styles.articleContent}>
          <h3>Venez découvrir notre premier Pop-Up Store à Paris !</h3>
          <h5>04/11/2023</h5>
          <p>
            Chers amis de Club Trésor, Nous sommes ravis de vous annoncer
            l'ouverture prochaine de notre tout premier Pop-Up Store à Paris !
            Après des mois de préparation et d'excitation, nous sommes
            impatients de vous accueillir dans notre espace éphémère où la magie
            de la mode vintage prendra vie.
          </p>
        </div>
      </a>
    </div>
  );
}
