import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { swipeInAnimation } from "@/data/constants";
import { useWillChange } from "framer-motion";

function Input({ name, label, direction, delay = 0, required = true }) {
  const [animate, setAnimate] = useState(false);
  const input = useRef(null);
  const willChange = useWillChange();

  return (
    <motion.div {...swipeInAnimation(direction, delay)} style={{ willChange }}>
      <motion.label
        initial={{ y: 20 }}
        animate={animate ? { y: 0 } : undefined}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        style={{ willChange }}
        onClick={() => {
          setAnimate(true);
          input.current.focus();
        }}
        htmlFor={name}
      >
        {label}
      </motion.label>
      <input
        id={name}
        ref={input}
        type={name === "phone" ? "tel" : name === "email" ? "email" : "text"}
        name={name}
        onClick={() => setAnimate(true)}
        onChange={() => setAnimate(true)}
        onFocus={() => setAnimate(true)}
        autoComplete="on"
        required={required}
        placeholder=""
      />
    </motion.div>
  );
}

export default Input;
