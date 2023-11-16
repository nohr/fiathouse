import React, { useEffect } from "react";

function useDimensions() {
  const [dimensions, setDimensions] = React.useState({
    height: 1920,
    width: 1080,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: document.body.offsetHeight,
        width: document.body.offsetWidth,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
}

export default useDimensions;
