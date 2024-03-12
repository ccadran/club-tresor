"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import Concept from "./components/Concept/concept";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const imageRef = useRef();

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const timeline = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: "top",
  //       end: "+=300px",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   timeline.to(imageRef.current, { height: "100%", width: "100%" });
  // }, []);

  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Club Trésor</h1>
          <p>Parce que votre amour est indémodable</p>
        </div>
        <div ref={imageRef} className={styles.heroIllustrations}>
          <img src="/images/illu.png" alt="" />
        </div>
      </div>
      <Concept />
      <div className={styles.more}></div>
    </main>
  );
}
