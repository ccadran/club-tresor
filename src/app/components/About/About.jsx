import React from "react";
import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.about} ${styles.about1}`}>
        <div className={styles.imgContainer}>
          <img src="/images/illu2.png" alt="" />
        </div>
        <div className={styles.textContent}>
          <h3>Avril</h3>
          <p>
            Avril a travaillé 15 ans en tant que Designer au sein de Maisons de
            luxe et de mode dont Balenciaga, Phillip Lim, Missoni, Lanvin et
            Courrèges.
            <br />
            <br />
            Depuis son plus jeune âge, elle chine vêtements, accessoires et
            bijoux vintage, les mixe et les revisite pour créer des looks
            uniques.
            <br />
            <br />
            Débordante d'énergie, d'humour et de créativité, Avril va vous
            dénicher et assembler les plus beaux Trésors pour vos enfants.
          </p>
        </div>
      </div>
      <div className={`${styles.about} ${styles.about2}`}>
        <div className={styles.textContent}>
          <h3>Avril</h3>
          <p>
            Avril a travaillé 15 ans en tant que Designer au sein de Maisons de
            luxe et de mode dont Balenciaga, Phillip Lim, Missoni, Lanvin et
            Courrèges.
            <br />
            <br />
            Depuis son plus jeune âge, elle chine vêtements, accessoires et
            bijoux vintage, les mixe et les revisite pour créer des looks
            uniques.
            <br />
            <br />
            Débordante d'énergie, d'humour et de créativité, Avril va vous
            dénicher et assembler les plus beaux Trésors pour vos enfants.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
      </div>
    </div>
  );
}
