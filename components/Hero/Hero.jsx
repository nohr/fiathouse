"use client";

import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { copy } from "@/data";
import PlumMobilePattern from "./PlumMobilePattern";
import PlumDesktopPatternTop from "./PlumDesktopPatternTop";
import PlumDesktopPatternBottom from "./PlumDesktopPatternBottom";
import WhiteMobilePattern from "./WhiteMobilePattern";
import WhiteDesktopPattern from "./WhiteDesktopPattern";
import { motion } from "framer-motion";
import useYPosition from "@/hooks/useYPosition";
import {
  fadeInAnimation,
  sidebarAnimation,
  sidebarAnimationDuration,
} from "@/data/constants";
import Lines from "@/components/Hero/Lines";

function Hero() {
  const y = useYPosition();

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <PlumMobilePattern
          visible={y >= 0}
          first={y < 0.333}
          second={y < 0.4}
          third={y < 0.2}
          opacity={0.18}
        />
        <PlumMobilePattern
          visible={y >= 0.67}
          first={y > 0.57}
          second={y > 0.433}
          third={y > 0.733}
        />
        <PlumDesktopPatternTop
          visible={y >= 0}
          first={y < 0.333}
          second={y < 0.4}
          third={y < 0.2}
          opacity={0.18}
        />
        <PlumDesktopPatternBottom
          visible={y >= 0.67}
          first={y > 0.57}
          second={y > 0.433}
          third={y > 0.733}
        />
        <div className={styles.backgroundImage} />
      </div>
      <motion.div {...sidebarAnimation} className={styles.sidebar}>
        <WhiteMobilePattern
          visible={y >= 0}
          first={y < 0.333}
          second={y < 0.4}
          third={y < 0.2}
        />
        <WhiteMobilePattern
          visible={y >= 0.67}
          first={y > 0.57}
          second={y > 0.433}
          third={y > 0.733}
        />
        <WhiteDesktopPattern
          visible={y >= 0}
          first={y < 0.333}
          second={y < 0.4}
          third={y < 0.2}
          top
        />
        <WhiteDesktopPattern
          visible={y >= 0.67}
          first={y > 0.57}
          second={y > 0.433}
          third={y > 0.733}
        />
        <div className={styles.sidebarGradient} />
      </motion.div>
      <motion.div
        {...fadeInAnimation(sidebarAnimationDuration + 0.75)}
        className={styles.fiatLogo}
      >
        <svg id="fiat-logo" viewBox="0 0 608.6 620.34">
          <path
            d="m260.3.04h133.3c1.2-.2,1.9.4,2.4,1.5,2.7,5.7,5.5,11.3,8.1,17.1,11.6,26.2,19.7,53.5,25.8,81.4,3.3,15.2,6.1,30.4,8.3,45.8,1.6,11,3,22.1,4.2,33.2,1.3,12.1,2.5,24.1,3.4,36.2,1,12.7,1.8,25.4,2.4,38.1.8,18.4,1.5,37,2.1,55.4.4,12.8.5,25.6.7,38.4.2,34.2.4,68.5.6,102.8,0,3,0,5.9.1,8.9v2.2h-59.9c0-.9-.1-1.7-.1-2.5-.1-32.9,0-65.8-.4-98.8-.2-24.7-1-49.4-1.6-74.1-.3-10.7-.9-21.5-1.3-32.1,0-.4-.1-.8-.1-1.4h-70.4v208.9h-57.2c-.9-1.6-.9-458.2-.4-461m57.4,55.8v141.1h66.1c0-.7,0-1.3-.1-1.9-.9-8.4-1.7-16.9-2.8-25.3-2-15.6-4.4-31.2-7.5-46.7-3.9-19.4-8.6-38.5-15-57.2-1.1-3.4-2.4-6.8-3.7-10.1l-37,.1h0Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m0,.14h134.7c.5,1.7.6,52.1.2,55.5h-70.8v141.3c2.5.1,51.5,0,54,0,.5,1.7.7,50.1.2,54.9h-53.9q-.2.2-.3.2s-.1.1-.1.2-.1.3-.1.4v.4c0,69.1,0,138.2-.1,207.3q0,.1-.1.4H.1V.14h-.1Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m493.9,55.74h-50.9V.24h165.6v55.5h-50.2v405.2h-63.9s-.2-270-.2-404.2v-.4q-.1-.1-.4-.6"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m225.4,461.14h-65.7s-.1-.1-.2-.2c0,0-.1-.1-.1-.2,0-153-.1-306-.1-459,0-.4,0-.8.1-1.3,1.8-.5,63.7-.6,66-.1v460.8Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m211,574.74c-2.8,5.5-6.8,9.8-11.7,12.8h0c-5,3-10.9,4.5-17.5,4.5s-12.6-1.5-17.6-4.5c-5-2.9-9-7.2-11.8-12.7-2.9-5.6-4.3-12.3-4.3-19.8s1.4-14.1,4.3-19.7c2.8-5.5,6.8-9.7,11.8-12.6,5.1-2.9,11-4.4,17.6-4.4s12.5,1.5,17.5,4.4,8.9,7.1,11.7,12.6c2.9,5.6,4.3,12.2,4.3,19.7s-1.4,14.1-4.3,19.7m-5.2-61.9c-7.2-4.1-15.3-6.2-24.1-6.2s-16.7,2.1-24,6.2c-7.3,4.1-13.1,9.9-17.3,17.3-4.2,7.3-6.4,15.7-6.4,24.9s2.2,17.7,6.4,25c4.3,7.3,10.1,13.1,17.3,17.3,7.2,4.1,15.3,6.2,24,6.2s16.7-2.1,24-6.2c7.3-4.1,13.1-9.9,17.3-17.3,4.2-7.3,6.3-15.7,6.3-25s-2.1-17.5-6.3-24.9c-4.2-7.4-10-13.2-17.2-17.3"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m228.1,582.94c-4.7,8.2-11.3,14.8-19.5,19.4-8.1,4.6-17.2,7-26.9,7s-18.8-2.4-26.9-7c-8.2-4.6-14.7-11.2-19.5-19.4s-7.2-17.6-7.2-28,2.4-19.6,7.2-27.8,11.3-14.8,19.5-19.4c8.1-4.6,17.2-7,26.9-7s18.9,2.4,27,7c8.1,4.7,14.6,11.2,19.4,19.4,4.7,8.2,7.1,17.6,7.1,27.8,0,10.3-2.4,19.7-7.1,28m10.2-61.5c-5.8-9.9-13.7-17.7-23.6-23.3-9.9-5.6-21-8.4-32.9-8.4s-22.9,2.8-32.8,8.4c-10,5.6-18,13.4-23.8,23.3-5.8,9.9-8.8,21.2-8.8,33.5s3,23.8,8.8,33.7,13.8,17.7,23.8,23.3c9.9,5.6,21,8.4,32.8,8.4s22.9-2.8,32.8-8.4c10-5.6,17.9-13.4,23.7-23.3,5.8-9.9,8.7-21.2,8.7-33.7,0-12.3-2.9-23.6-8.7-33.5"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m275,491.44v79.2c0,7.1,1.5,13.2,4.4,18.1,2.9,4.9,7,8.6,12,11.1,5.1,2.5,10.8,3.7,17,3.7s12.1-1.3,17.2-3.7c5.1-2.5,9.3-6.2,12.3-11.1,3.1-4.9,4.6-11,4.6-18v-79.2h-12.7v78.2c0,7.2-1.8,12.8-5.4,16.4-3.7,3.7-8.8,5.5-15.8,5.5s-12-1.8-15.6-5.5-5.4-9.2-5.4-16.4v-78.2h-12.6v-.1Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m348.5,491.44v79.2c0,8.2-1.9,15.3-5.5,21.2-3.7,5.8-8.6,10.3-14.8,13.2-5.9,2.9-12.6,4.3-19.8,4.3s-13.7-1.5-19.6-4.3c-6.1-3-10.9-7.4-14.5-13.3-3.5-5.8-5.3-12.9-5.3-21.1v-79.2h-12.5v78.1c0,10.9,2.3,20.2,6.9,27.8s10.9,13.5,18.8,17.3c7.8,3.8,16.5,5.7,26,5.7s18.5-1.9,26.3-5.7c8-3.8,14.5-9.7,19.2-17.3,4.8-7.6,7.2-17,7.2-27.9v-78.1h-12.4v.1Z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m394.9,559.84c5,2.3,11.6,4.7,19.6,7,5.6,1.6,10.1,3,13.3,4.3,2.8,1.1,5.2,2.7,7,4.7,1.6,1.7,2.4,3.8,2.4,6.5,0,3.4-1.2,6-3.6,8.1-2.6,2.2-6.4,3.3-11.2,3.3s-8.3-1.1-10.8-3.5c-2.5-2.3-3.9-5.4-4.2-9.5l-.2-3.1h-12.8l.3,4.5c.5,6.9,3.3,12.4,8.2,16.3,4.9,3.9,11.5,5.9,19.4,5.9,5.3,0,10.1-.9,14.2-2.7s7.3-4.4,9.5-7.8c2.3-3.4,3.4-7.4,3.4-12,0-4.9-1.1-8.8-3.3-11.7-2.2-2.9-4.9-5.1-8-6.5-3.2-1.5-7.3-3-12.4-4.5-.3-.1-.6-.2-.9-.3l-6.4-2.1c-.6-.2-1.3-.4-2-.6-5.4-1.6-9.9-3.2-13.3-4.8-4-1.8-7.4-4.6-10.2-8.3-3-3.9-4.5-9.1-4.5-15.2s1.5-10.9,4.4-15.3c2.9-4.3,6.9-7.7,12.1-9.9,4.9-2.2,10.4-3.2,16.6-3.2,9.3,0,17,2.4,23,7.1,6.3,4.9,9.8,11.8,10.4,20.5l.3,4.1h12.9l-.3-3.6c-.9-11.8-5.7-21.1-14.2-27.8-8.4-6.5-19.3-9.8-32.5-9.8-8.7,0-16.7,1.5-23.5,4.5-7,3.1-12.6,7.6-16.5,13.4-3.9,5.9-5.9,12.8-5.9,20.6,0,8.4,2,15.2,6,20.3,3.6,4.8,8.3,8.6,13.7,11.1"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="m463,560.54c-3.9-5-8.6-8.9-14.1-11.4-5.1-2.4-11.7-4.8-19.7-7.1-5.6-1.7-10-3.2-13.1-4.5-2.8-1.2-5.1-2.7-6.9-4.5-1.5-1.5-2.2-3.4-2.2-5.7,0-3.6,1-6.2,3.1-8,2.2-1.9,5.2-2.8,9.2-2.8,4.6,0,8.3,1.1,10.9,3.3,2.6,2.1,3.9,4.7,4.1,7.9l.2,3.2h14.7l-.3-3.7c-.5-6.9-3.3-12.4-8.2-16.3-4.9-3.9-11.5-5.9-19.4-5.9-5.3,0-10.1.9-14.2,2.7-4.1,1.8-7.3,4.4-9.5,7.8-2.3,3.4-3.4,7.4-3.4,12,0,4.9,1.1,8.8,3.3,11.7,2.2,2.9,4.9,5.1,8,6.5,3.2,1.5,7.3,3,12.4,4.5.3.1.6.2.9.3l6.4,2.1c.6.2,1.3.4,2,.6,5.4,1.6,9.9,3.2,13.3,4.8,4,1.8,7.4,4.6,10.2,8.3,3,3.9,4.5,9.1,4.5,15.2s-1.5,10.9-4.4,15.3c-2.9,4.3-6.9,7.7-12.1,9.9-4.9,2.2-10.4,3.2-16.6,3.2-9.3,0-17-2.4-23-7.1-6.3-4.9-9.8-11.8-10.4-20.5l-.4-4.9h-13.8l.1,3.4c.1,8.1,2.4,15.2,6.7,21.2,4.3,5.9,10.1,10.5,17.4,13.6,7.1,3.1,15.3,4.6,24.1,4.6,9.4,0,17.7-1.8,24.6-5.3,7-3.6,12.4-8.5,16.1-14.5,3.7-6.1,5.5-12.7,5.5-19.8,0-8.1-2-14.9-6-20.1"
            fill="#fff"
            strokeWidth="0"
          />
          <rect
            x=".1"
            y="491.44"
            width="12.9"
            height="127.7"
            fill="#fff"
            strokeWidth="0"
          />
          <polygon
            points="18.9 491.44 18.9 551.74 89.1 551.74 89.1 491.44 76.2 491.44 76.2 541.24 31.1 541.24 31.1 491.44 18.9 491.44"
            fill="#fff"
            strokeWidth="0"
          />
          <rect
            x="95"
            y="491.44"
            width="12.2"
            height="127.7"
            fill="#fff"
            strokeWidth="0"
          />
          <polygon
            points="500.2 507.14 500.2 551.24 558.5 551.24 558.5 541.34 512.5 541.34 512.5 517.74 558.5 517.74 558.5 507.14 500.2 507.14"
            fill="#fff"
            strokeWidth="0"
          />
          <polygon
            points="512.5 567.34 558.5 567.34 558.5 557.14 500.2 557.14 500.2 603.44 558.5 603.44 558.5 609.34 494.3 609.34 494.3 501.34 558.5 501.34 558.5 491.24 481.5 491.24 481.5 619.14 558.5 619.14 558.5 592.64 512.5 592.64 512.5 567.34"
            fill="#fff"
            strokeWidth="0"
          />
          <polygon
            points="89.1 619.14 89.1 557.54 18.9 557.54 18.9 619.14 31.1 619.14 31.1 567.64 76.2 567.64 76.2 619.14 89.1 619.14"
            fill="#fff"
            strokeWidth="0"
          />
        </svg>
        <motion.button
          id="cta"
          whileHover={{ scale: 1.1 }}
          onClick={() => (window.location.href = "/#contact")}
          className={styles.button}
        >
          {copy.hero.button}
        </motion.button>
      </motion.div>
      <motion.div {...fadeInAnimation(1.75)} className={styles.leftImage}>
        <Image
          id="image1"
          src="/images/hero/FH Splash Male Mobile.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={100}
        />
        <Image
          id="image1a"
          src="/images/hero/FH Splash Male.png"
          alt=""
          fill
          style={{ display: "none" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={100}
        />
      </motion.div>
      <motion.div {...fadeInAnimation(1.75)} className={styles.rightImage}>
        <Image
          id="image2"
          src="/images/hero/FH Splash Female.png"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          quality={100}
        />
      </motion.div>
      <Lines />
    </div>
  );
}

export default Hero;
