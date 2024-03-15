"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import Concept from "./components/ConceptTest/Concept.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Engagement1 from "./components/Engagement1/Engagement1.jsx";
import Engagement2 from "./components/Engagement2/Engagement2.jsx";
import About from "./components/About/About.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <Concept />
      <Engagement1 />
      <Engagement2 />
      <About />
    </main>
  );
}
