import { useThemeColor } from "../../components/themeColorContextProvider/ThemeColorContextProvider";
import styles from "./HomePage.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectHomePageContent } from "../../redux/features/home/slice";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { themeColor } = useThemeColor();
  const homePageContent = useSelector(selectHomePageContent);

  const { title, description, linkText } = homePageContent || {};

  return (
    <section>
      <h2
        className={classNames(
          styles.title,
          styles[`title--theme-color-${themeColor}`]
        )}
      >
        {title}
      </h2>
      <p
        className={classNames(
          styles.info,
          styles[`info--theme-color-${themeColor}`]
        )}
      >
        {description}
      </p>
      <Link
        to="/restaurants"
        className={classNames(
          styles.link,
          styles[`link--theme-color-${themeColor}`]
        )}
      >
        {linkText}
      </Link>
    </section>
  );
}
