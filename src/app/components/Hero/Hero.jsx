import React, { useLayoutEffect, useRef } from "react";
import styles from "./hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const imageRef = useRef();
  const hero = useRef();
  const spaceRef = useRef();
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        scrub: true,
        start: "top top",
        end: "bottom center",
        markers: true,
      },
    });

    timeline.to(imageRef.current, {
      opacity: 0.5,
      // width: "100%",
      // height: "100vh",
      transform: "scale(5.0)",
      duration: 5,
    });
    imagesRef.current.forEach((image, index) => {
      timeline.to(image, {
        opacity: 0.5,
        // width: "100%",
        // height: "100vh",
      });
    });
  }, []);

  return (
    <div ref={hero} className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Club Trésor</h1>
        <p>Parce que votre amour est indémodable</p>
      </div>
      <div className={styles.heroAnimations}>
        <div ref={spaceRef} className={styles.space}></div>
        <div ref={imageRef} className={styles.heroIllustrations}>
          <div className={styles.imgContainer}>
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src="/images/illu.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src="/images/illu2.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[2] = el)}
              src="/images/illu.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[3] = el)}
              src="/images/illu2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
