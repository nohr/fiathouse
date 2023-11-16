import { sidebarAnimationDuration } from "@/data/constants";
import React, { useEffect, useState } from "react";

function useAnimated(visible) {
  // stop animating until sidebar is done (1s) and in view
  const [sidebarAnimated, setSidebarAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (visible) setSidebarAnimated(true);
    }, sidebarAnimationDuration * 1000);
  }, [visible]);

  return sidebarAnimated;
}

export default useAnimated;
