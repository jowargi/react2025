import { useThemeColor } from "../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./SidebarContent.module.css";
import classNames from "classnames";

export default function SidebarContent() {
  const { themeColor } = useThemeColor();

  return (
    <div
      className={classNames(
        styles["sidebar-content"],
        styles[`sidebar-content--theme-color-${themeColor}`]
      )}
    >
      SIDEBAR
    </div>
  );
}
