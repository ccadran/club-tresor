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
            <img src="/images/illu.png" alt="" />
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
            <h4>Upcycling</h4>
            <p>
              En pratiquant l'upcycling, nous transformons un produit existant
              pour en créer un nouveau. <br />
              <br /> Cette pratique permet d'éviter la création de nouveaux
              vêtements et a donc une empreinte carbone beaucoup plus limitée.
            </p>
          </div>
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
            <h4>Upcycling</h4>
            <p>
              En pratiquant l'upcycling, nous transformons un produit existant
              pour en créer un nouveau. <br />
              <br /> Cette pratique permet d'éviter la création de nouveaux
              vêtements et a donc une empreinte carbone beaucoup plus limitée.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
