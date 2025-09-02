import { useCallback, useEffect, useMemo, useRef } from "react";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantsCarousel.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const partialBind = (func, ...boundArgs) => {
  return function (...args) {
    return func.call(this, ...boundArgs, ...args);
  };
};

export default function RestaurantsCarousel({ restaurantsWithImage }) {
  const { themeColor } = useThemeColor();

  const restaurantsWithImageUrl = useMemo(
    () =>
      restaurantsWithImage.map((restaurant) => ({
        ...restaurant,
        img: URL.createObjectURL(restaurant.img),
      })),
    [restaurantsWithImage]
  );

  useEffect(
    () => () =>
      restaurantsWithImageUrl.forEach((restaurant) =>
        URL.revokeObjectURL(restaurant.img)
      ),
    [restaurantsWithImageUrl]
  );

  const tooltipRef = useRef(null);

  useEffect(
    () => () => {
      if (tooltipRef.current) {
        tooltipRef.current.remove();

        tooltipRef.current = null;
      }
    },
    []
  );

  const navigate = useNavigate();

  const selectRestaurant = useCallback(
    (restaurantId, event) => {
      event.preventDefault();

      navigate(`/restaurants/${restaurantId}`);
    },
    [navigate]
  );

  const moveTooltip = useCallback((event) => {
    event.preventDefault();

    if (!tooltipRef.current) return;

    const item = event.currentTarget;
    const itemRect = item.getBoundingClientRect();
    const tooltipLeft = event.clientX - itemRect.left - item.clientLeft;
    const tooltipTop = event.clientY - itemRect.top - item.clientTop;

    tooltipRef.current.style.left = tooltipLeft + 10 + "px";
    tooltipRef.current.style.top = tooltipTop + 10 + "px";
  }, []);

  const addTooltip = useCallback(
    (tooltipText, event) => {
      if (tooltipRef.current) return;

      const item = event.currentTarget;

      tooltipRef.current = document.createElement("div");

      tooltipRef.current.className = classNames(
        styles.tooltip,
        styles[`tooltip--theme-color-${themeColor}`]
      );

      tooltipRef.current.innerHTML = tooltipText;

      item.append(tooltipRef.current);
    },
    [themeColor]
  );

  const removeTooltip = useCallback(() => {
    if (!tooltipRef.current) return;

    tooltipRef.current.remove();

    tooltipRef.current = null;
  }, []);

  const cancelTooltip = useCallback((event) => {
    event.preventDefault();

    if (!tooltipRef.current) return;

    tooltipRef.current.remove();

    tooltipRef.current = null;
  }, []);

  return (
    <div id="carousel" className={styles.carousel}>
      <ul className={styles.container}>
        {restaurantsWithImageUrl.map((restaurant) => (
          <li
            key={restaurant.id}
            className={classNames(
              styles.item,
              styles[`item--theme-color-${themeColor}`]
            )}
            onPointerEnter={partialBind(addTooltip, restaurant.name)}
            onPointerLeave={removeTooltip}
            onPointerMove={moveTooltip}
            onPointerCancel={cancelTooltip}
            onClick={partialBind(selectRestaurant, restaurant.id)}
          >
            <img
              src={restaurant.img}
              onDragStart={(event) => event.preventDefault()}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
