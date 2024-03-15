import React, { useLayoutEffect, useRef } from "react";
import styles from "./hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const imageRef = useRef();
  const spaceRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: spaceRef.current,
        scrub: true,
        start: "top top",
        end: "bottom top",
        markers: true,
      },
    });

    timeline.to(imageRef.current, {
      opacity: 0.5,
      width: "100%",
      height: "100vh",
    });
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Club Trésor</h1>
        <p>Parce que votre amour est indémodable</p>
      </div>
      <div className={styles.heroAnimations}>
        <div ref={spaceRef} className={styles.space}></div>
        <div ref={imageRef} className={styles.heroIllustrations}>
          <img src="/images/illu.png" alt="" />
        </div>
      </div>
    </div>
  );
}
