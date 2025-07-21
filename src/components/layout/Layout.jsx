import ScrollProgressBar from "./scrollProgressBar/ScrollProgressBar";
import styles from "./Layout.module.css";
import classNames from "classnames";

export default function Layout({
  children,
  header,
  footer,
  sidebar,
  themeColor = "light",
}) {
  return (
    <>
      <ScrollProgressBar themeColor={themeColor} />
      <div className={styles.layout}>
        <header
          className={classNames(
            styles.header,
            styles[`header--theme-color-${themeColor}`]
          )}
        >
          {header}
        </header>
        <main
          className={classNames(
            styles.main,
            styles[`main--theme-color-${themeColor}`]
          )}
        >
          {children}
        </main>
        <footer
          className={classNames(
            styles.footer,
            styles[`footer--theme-color-${themeColor}`]
          )}
        >
          {footer}
        </footer>
      </div>
      <aside
        className={classNames(
          styles.sidebar,
          styles[`sidebar--theme-color-${themeColor}`]
        )}
      >
        {sidebar}
      </aside>
    </>
  );
}
