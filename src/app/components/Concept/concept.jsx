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
      <div className={styles.conceptIntro}>
        <h2>Notre concept</h2>
        <p>
          Club Trésor est une marque de vêtements pour enfants qui utilise
          uniquement l’existant pour vous proposer un look unique et cool. Vous
          y trouverez une sélection de vêtements Vintage, ainsi que Nos Séries
          Limitées, fabriquées en France à partir de stocks de tissus dormants
          ou upcyclées. Zéro nouvelle matière première créée. Impact
          environnemental limité.
        </p>
      </div>
      <div ref={concept1} className={styles.concept}>
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
      <div ref={concept2} className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>Qui sommes-nous 2</h3>
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
      <div ref={concept3} className={styles.concept}>
        <div className={styles.imgContainer}>
          <img src="/images/illu.png" alt="" />
        </div>
        <div className={styles.conceptText}>
          <h3>Qui sommes-nous 2</h3>
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
      <div className={styles.space}></div>
    </div>
  );
}
