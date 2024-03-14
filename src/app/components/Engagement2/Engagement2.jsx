import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./engagement2.module.scss";
import gsap from "gsap";
import { useScroll } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Engagement2() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  const title = useRef(null);
  const container = useRef(null);
  const backgroundImage1 = useRef();
  const backgroundImage2 = useRef();
  const backgroundImageContainer = useRef();
  const histortTitle = useRef();
  const historyText = useRef();

  const historyContent =
    "Rencontre des deux co-fondatrices à New York il y a 15 ans.Plusieurs années d'amitié et de travail dans le secteur de la mode.Une envie aujourd'hui de se lancer dans la création d'une marque en pensant la mode autrement.Madeleine de Proust de leur enfance, les années 80's et 90's, sont au cœur de leur source d'inspiration.";
  const historyContentSplit = historyContent.split(".");
  console.log(historyContentSplit);
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

    const timelineImage = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top bottom",
        end: "bottom bottom-=100px",
        markers: true,
      },
    });
    timelineImage.to(backgroundImage1.current, {
      clipPath: "inset(0% 49% 0 0 round 0 0% 0 0)",
    });
    timelineImage.to(
      backgroundImage2.current,
      {
        // clipPath: "inset(0% 0 0 100% round 0 0% 0 0)",
        clipPath: "inset(0% 0 0 49% round 0% 0 0 0)",
      },
      0
    );

    const textHistoryTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "bottom bottom-=100px",
        end: "bottom bottom-=1000px",
        markers: true,
      },
    });
    textHistoryTimeline.fromTo(
      backgroundImageContainer.current,
      {
        filter: "brightness(1)",
      },
      {
        filter: "brightness(0.4)",
      },
      0.5
    );

    textHistoryTimeline.fromTo(
      histortTitle.current,
      {
        transform: "translateY(150%)",
        opacity: 0,
      },
      { transform: "translateY(0%)", opacity: 1 },
      2
    );

    const lines = historyText.current.querySelectorAll("span");

    lines.forEach((line, index) => {
      console.log(line);
      textHistoryTimeline.fromTo(
        line,
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0%)" },
        3 + index * 1 // Ajoute un délai de 0.5 secondes entre chaque animation
      );
    });
  }, []);

  return (
    <div className={styles.engagementContainer}>
      <h3 ref={title}>
        <span>Un engagement</span>
        <span> de qualité</span>
      </h3>
      <div className={styles.engagementContent}>
        <div className={styles.engagement} data-scroll data-scroll-speed="0.1">
          <h4>Revaloriser l’ancien</h4>
          <p>
            Avec Notre Sélection Vintage, nous vous proposons des vêtements de
            seconde main, ce qui permet de revaloriser l'ancien et de réutiliser
            des vêtements déjà portés. <br /> L'impact environnemental est très
            limité, puisqu'aucun nouveau vêtement n'est créé.
          </p>
        </div>
        <div className={styles.engagement} data-scroll data-scroll-speed="0.2">
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
      <div ref={container} className={styles.historyTransition}>
        <div ref={backgroundImageContainer} className={styles.imgContainer}>
          <img ref={backgroundImage1} src="/images/illu.png" alt="" />
          <img ref={backgroundImage2} src="/images/illu.png" alt="" />
        </div>
        <div className={styles.history}>
          <h2 ref={histortTitle}>Comment est né Club Trésor ?</h2>
          <p ref={historyText}>
            {historyContentSplit.map((phrase, index) => (
              <span key={index}>{phrase}</span>
            ))}
          </p>
        </div>
      </div>
      <div className={styles.space}></div>
    </div>
  );
}
