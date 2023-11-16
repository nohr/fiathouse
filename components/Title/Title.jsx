"use client";

import React from "react";
import { motion } from "framer-motion";
import { useWillChange } from "framer-motion";
import { swipeInAnimation } from "@/data/constants";

function Title({ light, bold, onChange = undefined, element = "h1" }) {
  const willChange = useWillChange();
  return (
    <>
      {element === "h1" ? (
        <h1>
          <motion.span
            onUpdate={onChange}
            {...swipeInAnimation("left")}
            style={{ willChange }}
          >
            {light}
          </motion.span>
          <motion.span
            onUpdate={onChange}
            {...swipeInAnimation("right")}
            style={{ willChange }}
          >
            {bold}
          </motion.span>
        </h1>
      ) : (
        <h2>
          <motion.span {...swipeInAnimation("right")} style={{ willChange }}>
            {light}
          </motion.span>{" "}
          <motion.span {...swipeInAnimation("left")} style={{ willChange }}>
            {bold}
          </motion.span>
        </h2>
      )}
    </>
  );
}

export default Title;
