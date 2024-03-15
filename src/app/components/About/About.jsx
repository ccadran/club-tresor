import React from "react";
import styles from "./about.module.scss";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={`${styles.about} ${styles.about1}`}>
        <div className={styles.imgContainer}>
          <img src="/images/avril.png" alt="" />
        </div>
        <div className={styles.textContent}>
          <h3>Avril Loufrani</h3>
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
          <h3>Sarah Morizet</h3>
          <p>
            Sarah a travaillé 13 ans dans le secteur de la mode sur le
            développement Wholesale, Retail et les achats au sein de marques
            telles que Jean Paul Gaultier, Helmut Lang, Theory et Kenzo.
            <br />
            <br />
            Dès ses premiers pas, elle s'empressait d'aller piquer les tenues de
            ses parents pour se déguiser et créer des styles extraordinaires.
            <br />
            <br />
            Passionnée de mode, esprit entrepreneurial et convaincue de la
            nécessité de changer nos façons de consommer, le projet de Club
            Trésor a pris tout son sens.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/sarah.png" alt="" />
        </div>
      </div>
    </div>
  );
}
