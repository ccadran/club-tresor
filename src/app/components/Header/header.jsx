"use client";

import React, { useEffect, useState } from "react";
import styles from "./header.module.scss";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > scrollPosition) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [scrollPosition]);
  return (
    <div className={styles.headerContainer}>
      <div
        className={`${styles.header} ${
          scrollDirection === "down" ? styles.hide : styles.show
        }`}
      >
        {" "}
        <ul>
          <a href="/">
            <li>Accueil</li>
          </a>
          <a href="https://club-tresor.com/">
            <li>Shop</li>
          </a>
          <a href="">
            <li>Galeries</li>
          </a>
          <a href="/blog/article">
            <li>Le Blog</li>
          </a>
          <a href="">
            <li>Outfit</li>
          </a>
        </ul>
      </div>
    </div>
  );
}
