"use client";

import React, { useEffect } from "react";
import styles from "./SubHero.module.scss";
import { copy } from "@/data";
import { motion } from "framer-motion";
import { swipeInAnimation } from "@/data/constants";
import { useWillChange } from "framer-motion";
import useDimensions from "@/hooks/useDimensions";
import { resizeSubHero1Line, resizeSubHero2Lines } from "../Hero/Lines";

function SubHero() {
  const willChange = useWillChange();
  const { width } = useDimensions();
  useEffect(() => {
    const handleResize = () => {
      const h1 = document.querySelector("h1");
      const h3 = document.querySelector("h3");
      if (!h1 || !h3) return;
      const height = h1.getBoundingClientRect().height;
      const width = h1.getBoundingClientRect().width;
      h3.style.top = `${h1.offsetTop + height / 1.6}px`;
      h3.style.left = `${h1.offsetLeft + width / 1.55}px`;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  function handleTopLine() {
    const subHeroLineRight = document.getElementById("sub-hero-line-right");
    if (!subHeroLineRight) return;
    subHeroLineRight.style.opacity = 1;
    subHeroLineRight.style.transform = "translateX(0)";
    resizeSubHero1Line(width > 992 ? 0.16 : 0.15);
  }

  function handleBottomLine() {
    const subHeroLineLeft = document.getElementById("sub-hero-line-left");
    const subHeroLineBottom = document.getElementById("sub-hero-line-bottom");
    if (!subHeroLineLeft || !subHeroLineBottom) return;
    subHeroLineLeft.style.opacity = 1;
    subHeroLineLeft.style.transform = "translateX(0)";
    subHeroLineBottom.style.opacity = 1;
    subHeroLineBottom.style.transform = "translateX(0)";
    resizeSubHero2Lines(width > 992 ? `30.66vw` : "10.6vw");
  }

  return (
    <div className={styles.container}>
      <h1>
        <motion.span
          onUpdate={handleTopLine}
          {...swipeInAnimation("left")}
          style={{ willChange }}
        >
          {copy.subHero.title.split(" ")[0]}
        </motion.span>
        <motion.span
          onUpdate={handleBottomLine}
          {...swipeInAnimation("right")}
          style={{ willChange }}
        >
          {copy.subHero.title.split(" ")[1]}
        </motion.span>
      </h1>
      <motion.h3
        initial={{ opacity: 0, transition: { duration: 0.1 } }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
        }}
      >
        {copy.subHero.subtitle}
      </motion.h3>
    </div>
  );
}

export default SubHero;
