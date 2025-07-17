import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress =
        totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;

      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: `${scrollProgress}%`,
        height: "4px",
        backgroundColor: "red",
        transitionProperty: "width",
        transitionDuration: "10ms",
        transitionTimingFunction: "ease-out",
      }}
    />
  );
}
