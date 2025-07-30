import ScrollProgressBar from "./scrollProgressBar/ScrollProgressBar";
import styles from "./Layout.module.css";
import classNames from "classnames";
import { useThemeColor } from "../themeColorContextProvider/ThemeColorContextProvider";
import ThemeColorToggle from "./themeColorToggle/ThemeColorToggle";
import { Outlet } from "react-router-dom";
import HeaderContent from "../app/headerContent/HeaderContent";
import FooterContent from "../app/footerContent/FooterContent";
import SidebarContent from "../app/sidebarContent/SidebarContent";

export default function Layout() {
  const { themeColor } = useThemeColor();

  return (
    <>
      <ScrollProgressBar />
      <ThemeColorToggle />
      <div className={styles.layout}>
        <header
          className={classNames(
            styles.header,
            styles[`header--theme-color-${themeColor}`]
          )}
        >
          <HeaderContent />
        </header>
        <main
          className={classNames(
            styles.main,
            styles[`main--theme-color-${themeColor}`]
          )}
        >
          <Outlet />
        </main>
        <footer
          className={classNames(
            styles.footer,
            styles[`footer--theme-color-${themeColor}`]
          )}
        >
          <FooterContent />
        </footer>
      </div>
      <aside
        className={classNames(
          styles.sidebar,
          styles[`sidebar--theme-color-${themeColor}`]
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
