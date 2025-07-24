import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./FooterContent.module.css";
import classNames from "classnames";

export default function FooterContent() {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["footer-content"],
        styles[`footer-content--theme-color-${themeColor}`]
      )}
    >
      FOOTER
    </div>
  );
}
