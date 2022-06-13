import { useEffect, useState } from "react";

type width = number | undefined;

export default function Window(): width {
  const hasWindow = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState<width>(undefined);
  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return (): void => window.removeEventListener("resize", handleResize);
  }, [hasWindow]);

  return windowWidth;
}
