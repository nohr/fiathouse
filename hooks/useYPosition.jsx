import { useScroll } from "framer-motion";
import React, { useState } from "react";

function useYPosition() {
  const [y, setY] = useState(0);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (latest) => {
    setY(latest);
  });

  return y;
}

export default useYPosition;
