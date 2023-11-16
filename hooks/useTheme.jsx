import { useEffect } from "react";
import useYPosition from "./useYPosition";

function useTheme() {
  const y = useYPosition();

  useEffect(() => {
    const offset = 0.5;
    const metaThemeColor = document.querySelector("meta[name=theme-color]");
    if (y > offset) {
      if (
        !metaThemeColor ||
        metaThemeColor.getAttribute("content") === "var(--purple)"
      )
        return;
      metaThemeColor.setAttribute("content", "var(--purple)");
    }
    if (y < offset) {
      if (
        !metaThemeColor ||
        metaThemeColor.getAttribute("content") === "#40A2E7"
      )
        return;
      metaThemeColor.setAttribute("content", "#40A2E7");
    }
  }, [y]);
}

export default useTheme;
