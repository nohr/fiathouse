export const sidebarAnimationDuration = 0.75;
export const heroAnimationDuration = 0.75;
export const patternDelay = [0.2, 0.6, 1];

export const fadeInAnimation = (delay) => ({
  initial: { opacity: 0, transition: { duration: 0 } },
  whileInView: {
    opacity: 1,
    transition: { duration: 0.75, delay, ease: "easeOut" },
  },
  viewport: { once: false },
});

export const sidebarAnimation = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: { x: 0, opacity: 1 },
  transition: { duration: sidebarAnimationDuration, delay: 0, ease: "easeOut" },
};

export const patternAnimation = (delay, visible, sidebarAnimated) => ({
  initial: { opacity: 0 },
  animate:
    visible && sidebarAnimated
      ? {
          opacity: 1,
          transition: { duration: 0.5, delay: delay, ease: "easeOut" },
        }
      : { opacity: 0, transition: { duration: 0.5 } },
});

export const swipeInAnimation = (direction, delay = 0) => ({
  initial: { x: direction !== "left" ? "-100%" : "100%", opacity: 0 },
  whileInView: { x: "0", opacity: 1 },
  viewport: { once: false },
  transition: { duration: 0.75, delay, ease: "easeOut" },
});

export const mobileLines = [
  {
    initial: { opacity: 0, x: "100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--green)",
      left: 0,
      top: 0,
      width: "46%",
      height: "0.76%",
      zIndex: -1,
    },
  },
  {
    initial: { opacity: 0, x: "100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.95, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--blue)",
      left: "46%",
      top: "0.76%",
      width: "19%",
      height: "0.76%",
      zIndex: -1,
    },
  },
  {
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.5, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--yellow )",
      left: "77.27%",
      top: "6.9%",
      width: "23%",
      height: "0.5%",
      zIndex: -1,
    },
  },
  {
    id: "image1-line-offset",
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.5, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--light-purple )",
      left: "10.6%",
      top: "13.67%",
      width: "37%",
      height: "0.65%",
      zIndex: 0,
    },
  },
  {
    id: "image1-line-bottom",
    initial: { opacity: 0, x: "-99%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.65, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: 0,
      top: "14.33%",
      width: "10.6%",
      height: "0.65%",
      zIndex: 0,
    },
  },
  {
    id: "top-line-right",
    initial: { opacity: 0, x: "99%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: sidebarAnimationDuration + 0.65,
      },
    },
    style: {
      backgroundColor: "var(--red )",
      left: "78.5%",
      top: "15.4%",
      width: "21.5%",
      height: "0.9789%",
      zIndex: 1,
    },
  },
  {
    initial: { opacity: 0, x: "100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--blue )",
      left: 0,
      top: "16.4%",
      width: "21.1%",
      height: "0.6%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--blue )",
      left: "88.8%",
      top: "18.4%",
      width: "11.4%",
      height: "0.4%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.85, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--green )",
      left: "10.6%",
      top: "19%",
      width: "10.5%",
      height: "1%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "100%" },
    whileInView: { opacity: 1, x: "0%", transition: { delay: 0.85 } },
    style: {
      backgroundColor: "var(--green )",
      left: "74.2%",
      top: "20.4%",
      width: "18.5%",
      height: "1%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.85, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--red )",
      left: 0,
      top: "21.9%",
      width: "10.6%",
      height: "0.8%",
      zIndex: -1,
    },
  },
  {
    id: "center-line-left",
    initial: { opacity: 0, x: "-99%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: sidebarAnimationDuration + 0.75,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: 0,
      top: "23.52%",
      width: "21.1%",
      height: "0.55%",
      zIndex: 0,
    },
  },
  {
    id: "center-line-right",
    initial: { opacity: 0, x: "99%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: sidebarAnimationDuration + 0.75,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: "74.2%",
      top: "23.52%",
      width: "25.8%",
      height: "0.55%",
      zIndex: 0,
    },
  },
  {
    id: "bottom-line-left",
    initial: { opacity: 0, x: 50 },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: sidebarAnimationDuration + 0.95, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--blue )",
      left: "10.6%",
      top: "25.85%",
      width: "10.4%",
      height: "0.47%",
      zIndex: 0,
    },
  },
  {
    id: "bottom-line-right",
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        delay: sidebarAnimationDuration + 0.95,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--red )",
      left: "74.2%",
      top: "25.85%",
      width: "125.2%",
      height: "0.47%",
      zIndex: 0,
    },
  },
  {
    id: "image2-line-above",
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: 1.25,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--blue )",
      left: "60.4%",
      top: "36.1%",
      width: "30.4%",
      height: "0.7%",
      zIndex: 1,
    },
  },
  {
    id: "image2-line-offset",
    initial: { opacity: 0, x: "-100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1.25, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--green )",
      left: "47.3%",
      top: "36.7%",
      width: "13.1%",
      height: "0.7%",
      zIndex: 0,
    },
  },
  {
    id: "image2-line-bottom",
    initial: { opacity: 0, x: 30 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { delay: 1, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: "56%",
      top: "42.4%",
      width: "45%",
      height: "0.6%",
      zIndex: 1,
    },
  },
  {
    id: "sub-hero-line-right",
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    style: {
      backgroundColor: "var(--red )",
      left: "80.74%",
      top: "50.35%",
      width: "25.5%",
      height: "0.6%",
      zIndex: 0,
    },
  },
  {
    id: "sub-hero-line-left",
    initial: { opacity: 0, x: "100%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: "10.57%",
      top: "53.93%",
      width: "36.41%",
      height: "0.39%",
      zIndex: 0,
    },
  },
  {
    id: "sub-hero-line-bottom",
    initial: { opacity: 0, x: "-99%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--light-purple)",
      left: 0,
      top: "54.32%",
      width: "10.6%",
      height: "0.39%",
      zIndex: 0,
    },
  },
];

const imageAnimationDuration = 2.5;
export const desktopLines = [
  {
    initial: { opacity: 0, x: "99.99vw", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        delay: imageAnimationDuration,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--red)",
      left: 0,
      top: 0,
      width: "12%",
      height: "1.38%",
      zIndex: 1,
    },
  },
  {
    id: "top-line-right",
    initial: { opacity: 0, x: "46.7%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        delay: imageAnimationDuration + 1.75,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--red )",
      left: "80.42%",
      top: "3.88%",
      width: "21.5%",
      height: "1.91%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "-160%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration + 1.75,
      },
    },
    style: {
      backgroundColor: "var(--light-purple)",
      left: "13.07%",
      top: "7.41%",
      width: "21.61%",
      height: "1.38%",
      zIndex: -1,
    },
  },
  {
    initial: { opacity: 0, x: "118.5%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration + 0.75,
      },
    },
    style: {
      backgroundColor: "var(--green)",
      left: "63.26%",
      top: "7.51%",
      width: "30%",
      height: "1.38%",
      zIndex: 0,
    },
  },
  {
    initial: { opacity: 0, x: "-490%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration + 0.75,
      },
    },
    style: {
      backgroundColor: "var(--blue )",
      left: "27.66%",
      top: "13.52%",
      width: "7.08%",
      height: "1.01%",
      zIndex: 1,
    },
  },
  {
    initial: { opacity: 0, x: "12.5%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration + 0.85,
      },
    },
    style: {
      backgroundColor: "var(--blue)",
      left: "90.55%",
      top: "10.22%",
      width: "10%",
      height: "1.38%",
      zIndex: 1,
    },
  },
  {
    initial: { opacity: 0, x: "-99.9%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration + 1.25,
      },
    },
    style: {
      backgroundColor: "var(--green)",
      left: "27.66%",
      top: "16.66%",
      width: "6.5%",
      height: "1.01%",
      zIndex: 1,
    },
  },
  {
    id: "center-line-left",
    initial: { opacity: 0, x: "-173.7%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: imageAnimationDuration + 1.25,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: "14.53%",
      top: "19.88%",
      width: "19.66%",
      height: "0.98%",
      zIndex: 1,
    },
  },
  {
    id: "center-line-right",
    initial: { opacity: 0, x: "88%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: imageAnimationDuration,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--orange )",
      left: "63.2%",
      top: "19.88%",
      width: "23.7%",
      height: "0.98%",
      zIndex: -1,
    },
  },
  {
    initial: { opacity: 0, x: "100.9%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: "easeOut",
        delay: imageAnimationDuration,
      },
    },
    style: {
      backgroundColor: "var(--red )",
      left: "84.72%",
      top: "22.8%",
      width: "9%",
      height: "1.23%",
      zIndex: 1,
    },
  },
  {
    id: "bottom-line-left",
    initial: { opacity: 0, x: "-99.8%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: imageAnimationDuration,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--red)",
      left: 0,
      top: "24%",
      width: "34.22%",
      height: "0.86%",
      zIndex: -1,
    },
  },
  {
    id: "bottom-line-right",
    initial: { opacity: 0, x: "160.3%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: {
        delay: imageAnimationDuration + 1.75,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--green)",
      left: "63.19%",
      top: "24%",
      width: "21.61%",
      height: "0.86%",
      zIndex: 3,
    },
  },
  {
    initial: { opacity: 0, x: "100%", transition: { duration: 0 } },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        delay: imageAnimationDuration,
        duration: 0.5,
        ease: "easeOut",
      },
    },
    style: {
      backgroundColor: "var(--green )",
      left: 0,
      top: "25%",
      width: "11%",
      height: "1.01%",
      zIndex: 1,
    },
  },
  {
    id: "image1-line-offset",
    initial: { opacity: 0, x: "-90%" },
    whileInView: { opacity: 1, x: "0%", transition: { ease: "easeOut" } },
    viewport: { margin: "0%" },
    style: {
      backgroundColor: "var(--yellow)",
      left: 0,
      top: "32.15%",
      width: "14.53%",
      height: "1.23%",
      zIndex: 1,
    },
  },
  {
    id: "image1-line-bottom",
    initial: { opacity: 0, x: "400%" },
    whileInView: { opacity: 1, x: "0%", transition: { ease: "easeOut" } },
    viewport: { margin: "0%" },
    style: {
      backgroundColor: "var(--green)",
      left: "14.53%",
      top: "33.02%",
      width: "6%",
      height: "1.23%",
      zIndex: 1,
    },
  },
  {
    id: "image2-line-bottom",
    initial: { opacity: 0, x: "10%" },
    whileInView: { opacity: 1, x: "0%", transition: { ease: "easeOut" } },
    viewport: { margin: "0%" },
    style: {
      backgroundColor: "var(--light-purple)",
      left: "66.46%",
      top: "33.25%",
      width: "22%",
      height: "1.23%",
      zIndex: 1,
    },
  },
  {
    id: "sub-hero-line-right",
    initial: { opacity: 0, x: "10%" },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { ease: "easeOut" },
    },
    style: {
      backgroundColor: "var(--red )",
      left: "80.74%",
      top: "50.35%",
      width: "12.224%",
      height: "0.6%",
      zIndex: 0,
    },
  },
  {
    id: "sub-hero-line-left",
    // initial: { opacity: 1, x: "201.999%" },
    initial: { opacity: 0, x: "51.999%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    viewport: { margin: "0%" },
    style: {
      backgroundColor: "var(--orange )",
      left: "32.97%",
      top: "55.93%",
      width: "36.41%",
      height: "0.56%",
      zIndex: 0,
    },
  },
  {
    id: "sub-hero-line-bottom",
    initial: { opacity: 0, x: "-99%" },
    whileInView: {
      opacity: 1,
      x: "0%",
      transition: { delay: 0.75, ease: "easeOut" },
    },
    viewport: { margin: "0%" },
    style: {
      backgroundColor: "var(--light-purple)",
      left: 0,
      width: "32.97%",
      height: "1.48%",
      zIndex: 0,
    },
  },
];
