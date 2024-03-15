import React, { useLayoutEffect, useRef } from "react";
import styles from "./hero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const imageRef = useRef();
  const hero = useRef();
  const spaceRef = useRef();
  const imageContainer = useRef();
  const imagesRef = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        scrub: true,
        start: "top top",
        end: "bottom bottom",
        markers: true,
      },
    });

    timeline.to(imageRef.current, {
      // opacity: 0.5,
      // width: "60%",
      // height: "80vh",
      // transform: "scale(4.0)",
      duration: 5,
    });
    // timeline.to(imageContainer.current, {
    //   // opacity: 0.5,
    //   // width: "60%",
    //   height: "80vh",
    //   // transform: "scale(4.0)",
    //   // duration: 5,
    // });
    // console.log(imagesRef.current);
    // console.log("reverse", imagesRef.current.reverse());
    imagesRef.current.forEach((image, index) => {
      timeline.to(
        image,
        {
          // display: "none",
          opacity: 0,
          duration: 0,

          delay: index * 1.5,
          onComplete: () => console.log(image + index),
        },
        0
      );
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
          <div ref={imageContainer} className={styles.imgContainer}>
            <img src="/images/about.png" alt="" />

            <img
              ref={(el) => (imagesRef.current[7] = el)}
              src="/images/avril.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[6] = el)}
              src="/images/engagement.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[5] = el)}
              src="/images/limited.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[4] = el)}
              src="/images/popuStore.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[3] = el)}
              src="/images/sarah.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[2] = el)}
              src="/images/tresor.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src="/images/upcycling.png"
              alt=""
            />
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src="/images/vintage.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
