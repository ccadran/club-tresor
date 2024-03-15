import React, { useLayoutEffect, useRef } from "react";
import styles from "./concept.module.scss";
import gsap from "gsap";
import { useScroll } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Concept() {
  const container = useRef(null);
  const concept1 = useRef(null);
  const concept2 = useRef(null);
  const concept3 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const coneptAnim = (concept1, concept2) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: concept2.current,
          scrub: true,
          start: "top bottom-=100px",
          end: "+=1000px",
          markers: true,
        },
      });

      //Concept 1
      const imgConcept1 = concept1.current.querySelector(
        `.${styles.imgContainer}`
      );
      const subTitleConcept1 = concept1.current.querySelector(
        `.${styles.conceptText} h3`
      );
      const textConcept1 = concept1.current.querySelector(
        `.${styles.conceptText} p`
      );

      //Concept 2
      const imgConcept2 = concept2.current.querySelector(
        `.${styles.imgContainer}`
      );
      const subTitleConcept2 = concept2.current.querySelector(
        `.${styles.conceptText} h3`
      );
      const textConcept2 = concept2.current.querySelector(
        `.${styles.conceptText} p`
      );

      //Concept 1
      timeline.to(imgConcept1, {
        transform: "rotate(-45deg) translateY(-100%)",
      });
      timeline.to(
        imgConcept1,
        {
          opacity: 0,
          transform: "rotate(-45deg) translateY(-100%)",
        },
        0.15
      );
      timeline.to(
        subTitleConcept1,
        {
          transform: " translateY(-200%)",
        },
        0.1
      );
      timeline.to(
        subTitleConcept1,
        {
          opacity: 0,
        },
        0.1
      );
      timeline.to(
        textConcept1,
        {
          opacity: 0,
          transform: " translateY(-100%)",
        },
        0.35
      );

      //Concept 2

      timeline.fromTo(
        imgConcept2,
        { opacity: 0, transform: "rotate(45deg) translateY(100%) " },
        { opacity: 1, transform: "rotate(0deg) translateY(0%)" }
      );
      timeline.fromTo(
        textConcept2,
        { opacity: 0, transform: " translateY(100%)" },
        { opacity: 1, transform: " translateY(0%)" },
        1
      );
      timeline.fromTo(
        subTitleConcept2,
        { opacity: 0, transform: " translateX(100%)" },
        { opacity: 1, transform: " translateX(0%)" },
        0.8
      );
    };
    coneptAnim(concept1, concept2);
    coneptAnim(concept2, concept3);

    console.log(concept1.current);
  }, []);

  return (
    <div ref={container} className={styles.conceptContainer}>
      <h2>Notre concept</h2>
      <p>
        Club Trésor est une marque de vêtements pour enfants qui utilise
        uniquement l’existant pour vous proposer un look unique et cool. Vous y
        trouverez une sélection de vêtements Vintage, ainsi que Nos Séries
        Limitées, fabriquées en France à partir de stocks de tissus dormants ou
        upcyclées. Zéro nouvelle matière première créée. Impact environnemental
        limité.
      </p>
      <div ref={concept1} className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/limited.png" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>NOS SÉRIES LIMITÉES</h3>
          <p>
            Nous sélectionnons des rouleaux de tissus Vintage (années 50's aux
            années 2000) pour créer des mini-séries en quantités limitées,
            fabriquées en France en atelier de réinsertion à Marseille. <br />{" "}
            Cette pratique permet d’éviter la surproduction, le stockage et le
            gaspillage de textile.
          </p>
        </div>
      </div>
      <div ref={concept2} className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/upcycling.jpg" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>NOS UPCYCLÉS</h3>
          <p>
            Nous vous proposons des pièces vintage que nous avons chinées puis
            revalorisées en y imprimant Bobby, la mascotte Club Trésor, ou en y
            ajoutant notre patch Re-Loved.
            <br />
            <br />
            Chaque pièce a été upcyclée et est donc unique.
          </p>
        </div>
      </div>
      <div ref={concept3} className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/vintage.png" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>NOTRE SELECTION VINTAGE</h3>
          <p>
            Nous vous proposons des vêtements de seconde main vintage (années
            50’s aux années 2000) soigneusement sélectionnés pour correspondre à
            l’ADN et aux critères de qualité de Club Trésor. <br />
            <br /> Tous ces vêtements sont lavés à 30°C puis repassés avant de
            vous les proposer.
          </p>
        </div>
      </div>
      <div className={styles.space}></div>
    </div>
  );
}
