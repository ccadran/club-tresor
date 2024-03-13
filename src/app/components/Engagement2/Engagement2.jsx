import React, { useLayoutEffect, useRef } from "react";
import styles from "./engagement2.module.scss";
import gsap from "gsap";
import { useScroll } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Engagement2() {
  const title = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: title.current,
        scrub: true,
        start: "top center+=200px",
        end: "top top+=200px",
        markers: true,
      },
    });
    timeline.to(title.current, { margin: "0 30vw" });
  }, []);

  return (
    <div className={styles.engagementContainer}>
      <h3 ref={title}>
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

      <div className={styles.imgContainer}>
        <img src="/images/illu.png" alt="" />
      </div>
      <div className={styles.space}>
        <h4>test</h4>
      </div>
      <div className={styles.history}>
        <h3>Comment est né Club Trésor ?</h3>
      </div>
    </div>
  );
}
