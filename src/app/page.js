"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Concept from "./components/Concept/Concept";
import Hero from "./components/Hero/Hero";
import Engagement1 from "./components/Engagement1/Engagement1";
import Engagement2 from "./components/Engagement2/Engagement2";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Engagement1 />
      <Engagement2 />
      {/* <div className={styles.test}></div> */}
    </main>
  );
}
