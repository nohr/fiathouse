import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useDimensions from "../../hooks/useDimensions";
import { useWillChange } from "framer-motion";
import { desktopLines, mobileLines } from "@/data/constants";
import { AnimatePresence } from "framer-motion";

export function resizeSubHero1Line(h1Size) {
  const subHero1 = document.querySelector("h1").children[0];
  const subHeroLineRight = document.getElementById("sub-hero-line-right");
  if (!subHero1 || !subHeroLineRight) return;

  const subHero1Bottom =
    subHero1.getBoundingClientRect().bottom -
    subHeroLineRight.clientHeight * (1 + h1Size) -
    subHero1.getBoundingClientRect().height / 7.5 +
    window.scrollY;

  subHeroLineRight.style.top = `${subHero1Bottom}px`;

  const subHero1Right = subHero1.getBoundingClientRect().right;

  subHeroLineRight.style.left = `${
    h1Size !== 0.15
      ? subHero1Right * (1 + h1Size) - subHero1Right / 6
      : subHero1Right * (1 + h1Size) - subHero1Right / 6
  }px`;
}

export function resizeSubHero2Lines(margin) {
  const subHero2 = document.querySelector("h1").children[1];
  const subHeroLineLeft = document.getElementById("sub-hero-line-left");
  const subHeroLineBottom = document.getElementById("sub-hero-line-bottom");

  if (!subHero2 || !subHeroLineLeft || !subHeroLineBottom) return;

  const subHero2Bottom =
    subHero2.getBoundingClientRect().bottom + window.scrollY;
  const subHeroLineLeftHeight = (mod) =>
    subHero2Bottom -
    subHeroLineLeft.clientHeight * mod -
    subHero2.getBoundingClientRect().height / 14.5;

  if (margin !== "10.6vw") {
    subHeroLineLeft.style.top = ` ${subHero2Bottom}px`;
  } else {
    subHeroLineLeft.style.top = `${subHeroLineLeftHeight(0.15)}px`;
  }

  const subHero2Width = subHero2.getBoundingClientRect().width;
  subHeroLineLeft.style.width = `calc(var(--global-padding-left) + ${
    margin !== "10.6vw"
      ? subHero2Width - subHero2Width / 1.85
      : subHero2Width - subHero2Width / 2
  }px)`;
  if (margin === "10.6vw") subHeroLineLeft.style.left = margin;

  subHeroLineBottom.style.top = `${
    margin !== "10.6vw"
      ? subHero2Bottom + subHeroLineLeft.clientHeight * 1.14
      : subHeroLineLeftHeight(0.15) + subHeroLineLeft.clientHeight * 1.15
  }px`;
}

function Lines() {
  const willChange = useWillChange();
  const { width } = useDimensions();
  const [lines, setLines] = useState([]);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (width > 992) setLines(() => [...desktopLines]);
    else setLines(() => [...mobileLines]);
  }, [width]);

  const resizeTopLineRight = useCallback(function (logoWidth) {
    const logo = document.getElementById("fiat-logo");
    const topLineRight = document.getElementById("top-line-right");
    if (!logo || !topLineRight) return;

    if (logoWidth !== 0.58) {
      // const image1 = document.getElementById("image1");
      // if (!image1) return;
      // const headLocation =
      //   width - image1.parentElement.getBoundingClientRect().width / 2.75;
      // topLineRight.style.left = `${headLocation}px`;
      return;
    }

    const logoTop = logo.getBoundingClientRect().top + window.scrollY;
    topLineRight.style.top = `${logoTop}px`;
    const logoTextThickness =
      logo.children[4].getBoundingClientRect().width * logoWidth;
    topLineRight.style.height = `${logoTextThickness}px`;
  }, []);

  function resizeBottomLines(mod) {
    const logo = document.getElementById("fiat-logo");
    const bottomLineLeft = document.getElementById("bottom-line-left");
    const bottomLineRight = document.getElementById("bottom-line-right");
    if (!logo || !bottomLineLeft || !bottomLineRight) return;
    const logoBottom = logo.getBoundingClientRect().bottom + window.scrollY;

    const logoTextThickness =
      logo.children[5].getBoundingClientRect().height * 0.2072;
    bottomLineLeft.style.height = `${logoTextThickness}px`;
    bottomLineRight.style.height = `${logoTextThickness}px`;

    bottomLineLeft.style.top = `${
      logoBottom - bottomLineLeft.clientHeight - mod
    }px`;
    bottomLineRight.style.top = `${
      logoBottom - bottomLineRight.clientHeight - mod
    }px`;
  }

  function resizeCenterLines() {
    const logo = document.getElementById("fiat-logo");
    const centerLineLeft = document.getElementById("center-line-left");
    const centerLineRight = document.getElementById("center-line-right");

    if (!logo || !centerLineLeft || !centerLineRight) return;
    const centerLineHeight =
      logo.children[5].getBoundingClientRect().top +
      window.scrollY -
      (logo.children[0].getBoundingClientRect().bottom + window.scrollY);
    const logoCenter =
      logo.children[0].getBoundingClientRect().bottom + window.scrollY;

    centerLineLeft.style.top = `${logoCenter}px`;
    centerLineRight.style.top = `${logoCenter}px`;

    centerLineLeft.style.height = `${centerLineHeight}px`;
    centerLineRight.style.height = `${centerLineHeight}px`;
  }

  function resizeImage1Lines(image) {
    const image1 = document.getElementById(image);
    const image1LineOffset = document.getElementById("image1-line-offset");
    const image1LineBottom = document.getElementById("image1-line-bottom");

    if (!image1 || !image1LineOffset || !image1LineBottom) return;

    const image1Bottom = image1.getBoundingClientRect().bottom + window.scrollY;

    image1LineOffset.style.top = `${
      image !== "image1"
        ? image1Bottom - image1LineBottom.clientHeight * 1
        : image1Bottom - image1LineBottom.clientHeight * 0
    }px`;

    image1LineBottom.style.top = `${
      image !== "image1"
        ? image1Bottom - image1LineBottom.clientHeight / 0.5
        : image1Bottom - image1LineBottom.clientHeight / 1
    }px`;
  }

  function resizeImage2Lines() {
    const image2 = document.getElementById("image2");
    const image2LineAbove = document.getElementById("image2-line-above");
    const image2LineOffset = document.getElementById("image2-line-offset");
    const image2LineBottom = document.getElementById("image2-line-bottom");

    if (!image2 || !image2LineBottom) return;

    const image2Bottom = image2.getBoundingClientRect().bottom + window.scrollY;
    image2LineBottom.style.top = `${
      image2Bottom - image2LineBottom.clientHeight / 1
    }px`;

    if (!image2LineAbove || !image2LineOffset) return;

    image2LineAbove.style.top = `${
      image2Bottom - image2LineBottom.clientHeight * 9
    }px`;

    image2LineOffset.style.top = `${
      image2Bottom - image2LineBottom.clientHeight * 8
    }px`;
  }

  const handleResize = useCallback(() => {
    resizeTopLineRight(width > 992 ? 31.7 : 0.58);
    resizeBottomLines(width > 992 ? 1 : 0);
    resizeCenterLines();
    resizeImage1Lines(width > 992 ? "image1a" : "image1");
    resizeImage2Lines();
    resizeSubHero1Line(width > 992 ? 0.16 : 0.15);
    resizeSubHero2Lines(width > 992 ? `30.66vw` : "10.6vw");
  }, [resizeTopLineRight, width]);

  useEffect(() => {
    if (!first) {
      handleResize();
    } else {
      setTimeout(() => {
        handleResize();
        setFirst(false);
      }, 100);
    }
  }, [handleResize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width, handleResize]);

  return (
    <AnimatePresence>
      {lines.length > 0 &&
        lines.map((line, i) => (
          <motion.div
            key={line.style.backgroundColor + line.style.left + i}
            {...line}
            exit={{ opacity: 0, x: "-100vw", transition: { duration: 0 } }}
            viewport={{
              amount: 0.000001,
              margin: width > 992 ? line.viewport?.margin ?? "70%" : "0%",
              ...line.viewport,
            }}
            style={{
              ...line.style,
              willChange,
              opacity: 0,
              // transition: "0.25s",
              position: "absolute",
            }}
          />
        ))}
    </AnimatePresence>
  );
}

export default Lines;
