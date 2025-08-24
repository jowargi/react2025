import { useCallback, useEffect, useRef } from "react";
import { useThemeColor } from "../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantsCarousel.module.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function RestaurantsCarousel({ restaurantsWithImage }) {
  const { themeColor } = useThemeColor();

  const restaurantsWithImageUrl = restaurantsWithImage.map((restaurant) => ({
    ...restaurant,
    img: URL.createObjectURL(restaurant.img),
  }));

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
    (event) => {
      event.preventDefault();

      const restaurantIdHost = event.target.closest("[data-restaurant-id]");

      if (!restaurantIdHost) return;

      const restaurantId = restaurantIdHost.dataset.restaurantId;

      if (!restaurantId) return;

      navigate(`/restaurants/${restaurantId}`);
    },
    [navigate]
  );

  const moveTooltip = useCallback((event) => {
    event.preventDefault();

    const tooltipHost = event.target.closest("[data-tooltip]");

    if (!tooltipHost) return;

    if (!tooltipRef.current) return;

    tooltipRef.current.style.left = event.clientX + 5 + "px";
    tooltipRef.current.style.top = event.clientY + 5 + "px";
  }, []);

  const addTooltip = useCallback(
    (event) => {
      event.preventDefault();

      const tooltipText = event.currentTarget.dataset.tooltip;

      if (!tooltipText) return;

      if (tooltipRef.current) return;

      tooltipRef.current = document.createElement("div");

      tooltipRef.current.className = classNames(
        styles.tooltip,
        styles[`tooltip--theme-color-${themeColor}`]
      );

      tooltipRef.current.innerHTML = tooltipText;

      document.body.append(tooltipRef.current);
    },
    [themeColor]
  );

  const removeTooltip = useCallback((event) => {
    event.preventDefault();

    const tooltipHost = event.currentTarget;

    if (!tooltipHost.dataset.tooltip) return;

    if (!tooltipRef.current) return;

    tooltipRef.current.remove();

    tooltipRef.current = null;
  }, []);

  const cancelTooltip = useCallback((event) => {
    event.preventDefault();

    const isTooltipRelated = !!event.target.closest("[data-tooltip]");

    if (!isTooltipRelated || !tooltipRef.current) return;

    tooltipRef.current.remove();

    tooltipRef.current = null;
  }, []);

  return (
    <div
      id="carousel"
      className={styles.carousel}
      onClick={selectRestaurant}
      onPointerMove={moveTooltip}
    >
      <ul className={styles.container}>
        {restaurantsWithImageUrl.map((restaurant) => (
          <li
            key={restaurant.id}
            className={classNames(
              styles.item,
              styles[`item--theme-color-${themeColor}`]
            )}
          >
            <img
              src={restaurant.img}
              onDragStart={(event) => event.preventDefault}
              onPointerOver={addTooltip}
              onPointerOut={removeTooltip}
              onPointerCancel={cancelTooltip}
              data-restaurant-id={restaurant.id}
              data-tooltip={restaurant.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
