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
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"],
  // });
  // window.addEventListener("scroll", () => {
  //   console.log(scrollYProgress);
  // });
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const coneptAnim = (concept1, concept2) => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: concept2.current,
          scrub: true,
          start: "top bottom-=100px",
          end: "+=300px",
          markers: true,
        },
      });

      const imgContainerConcept1 = concept1.current.querySelector(
        `.${styles.imgContainer}`
      );
      const imgContainerConcept2 = concept2.current.querySelector(
        `.${styles.imgContainer}`
      );

      timeline.to(
        imgContainerConcept1,
        {
          opacity: 0,
          transform: "rotate(-45deg) translateY(-100%)",
        },
        0.25
      );

      timeline.fromTo(
        imgContainerConcept2,
        { opacity: 0, transform: "rotate(45deg) translateY(100%)" },
        { opacity: 1, transform: "rotate(0deg) translateY(0%)" }
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
