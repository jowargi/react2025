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
      <p
        className={classNames(
          styles.copyright,
          styles[`copyright--theme-color-${themeColor}`]
        )}
      >
        Copyright © 2025 Restaurant App
      </p>
      <address
        className={classNames(
          styles.address,
          styles[`address--theme-color-${themeColor}`]
        )}
      >
        New York, USA
      </address>
    </div>
  );
}
