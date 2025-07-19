import { useEffect, useState } from "react";
import styles from "./ScrollProgressBar.module.css";
import classNames from "classnames";

export default function ScrollProgressBar({ themeColor = "light" }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress =
        totalHeight > 0 ? (window.pageYOffset / totalHeight) * 100 : 0;

      setScrollProgress(scrollProgress);
    };

    window.addEventListener("scroll", onProgress);
    window.addEventListener("resize", onProgress);

    return () => {
      window.removeEventListener("scroll", onProgress);
      window.removeEventListener("resize", onProgress);
    };
  }, []);

  return (
    <div
      className={classNames(
        styles["scroll-progress-bar"],
        styles[`scroll-progress-bar--theme-color-${themeColor}`]
      )}
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
