import React, { useRef } from "react";
import styles from "./engagement1.module.scss";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Engagement1() {
  const container = useRef();

  return (
    <div ref={container} className={styles.engagementSection}>
      <h2>Nos engagements</h2>
      <div className={styles.engagementContainer}>
        <div className={styles.engagementAnim}>
          <div className={styles.imgContainer}>
            <img src="/images/engagement.png" alt="" />
          </div>
        </div>
        <div className={styles.engagementContent}>
          <div className={styles.engagement}>
            <h4>Upcycling</h4>
            <p>
              En pratiquant l'upcycling, nous transformons un produit existant
              pour en créer un nouveau. <br />
              <br /> Cette pratique permet d'éviter la création de nouveaux
              vêtements et a donc une empreinte carbone beaucoup plus limitée.
            </p>
          </div>
          <div className={styles.engagement}>
            <h4>TISSUS EXISTANTS</h4>
            <p>
              Nos Séries Limitées sont confectionnées à partir de tissus
              existants issus de stocks dormants. Le processus de création se
              fait à partir des tissus que nous trouvons, et non le contraire.
              <br />
              <br />
              Cette pratique permet d’éviter la production de nouveaux matériaux
              et a donc un impact environnemental plus limité.
            </p>
          </div>
          <div className={styles.engagement}>
            <h4>COUPES DURABLES</h4>
            <p>
              La coupe de notre pantalon est conçue pour évoluer avec la taille
              de l'enfant, pour être porté le plus longtemps possible.
            </p>
          </div>
          <div className={styles.engagement}>
            <h4>QUANTITÉS LIMITÉES</h4>
            <p>
              En produisant en Séries Limitées, nous évitons les stocks, les
              soldes et le rythme habituel des collections. Cela permet d'éviter
              la surproduction, le stockage et le gaspillage de textile.
              <br />
              <br />
              Si un produit vous plaît, faites-le nous savoir. Si la quantité de
              tissus le permet, nous pouvons en relancer la production et le
              remettre en vente en quelques semaines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
