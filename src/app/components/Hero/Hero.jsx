import React, { useRef } from "react";
import styles from "./hero.module.scss";

export default function Hero() {
  const imageRef = useRef();

  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Club Trésor</h1>
        <p>Parce que votre amour est indémodable</p>
      </div>
      <div className={styles.heroAnimations}>
        <div className={styles.space}></div>
        <div ref={imageRef} className={styles.heroIllustrations}>
          <img src="/images/illu.png" alt="" />
        </div>
      </div>
    </div>
  );
}
