import { useState, useEffect } from "react";
import { useThrottle } from "./useThrottle";

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = useThrottle(() => {
      setWindowWidth(window.innerWidth);
    }, 300);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize.cancel);
  }, []);

  return { windowWidth };
}
