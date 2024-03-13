"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import { useScroll, motion, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import Concept from "./components/Concept/Concept";
import Hero from "./components/Hero/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      {/* <div className={styles.test}></div> */}
    </main>
  );
}
