import { NavLink } from "react-router-dom";
import { useThemeColor } from "../../../../themeColorContextProvider/ThemeColorContextProvider";
import styles from "./RestaurantTab.module.css";
import classNames from "classnames";
import RestaurantPopupContainer from "./restaurantPopup/RestaurantPopupContainer";
import { usePopup } from "./usePopup";
import { useCallback, useRef } from "react";
import PopupPageOffsetContextProvider from "./popupPageOffsetContextProvider/PopupPageOffsetContextProvider";

function getElementPageOffset(element) {
  const rect = element.getBoundingClientRect();

  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
  };
}

export default function RestaurantTab({ id, name }) {
  const { themeColor } = useThemeColor();

  const { popupState, showPopup, setLeft, setTop, resetPopup } = usePopup();

  const isPopupHiddenRef = useRef(popupState.isHidden);

  isPopupHiddenRef.current = popupState.isHidden;

  const onPointerEnter = useCallback(
    (event) => {
      if (!isPopupHiddenRef.current) return;

      const tab = event.target;

      if (tab.classList.contains(styles["tab--disabled"])) return;

      const tabPageOffset = getElementPageOffset(tab);
      const popupLeft = tabPageOffset.left - tab.offsetWidth;
      const popupTop = tabPageOffset.top + tab.offsetHeight;

      showPopup();
      setLeft(popupLeft);
      setTop(popupTop);
    },
    [showPopup, setLeft, setTop]
  );

  const onPointerLeave = useCallback(() => {
    if (isPopupHiddenRef.current) return;

    resetPopup();
  }, [resetPopup]);

  const onPointerCancel = useCallback(
    (event) => {
      event.preventDefault();

      if (isPopupHiddenRef.current) return;

      resetPopup();
    },
    [resetPopup]
  );

  const onClick = useCallback(() => {
    if (isPopupHiddenRef.current) return;

    resetPopup();
  }, [resetPopup]);

  return (
    <>
      <NavLink
        to={`/restaurants/${id}`}
        className={({ isActive }) =>
          classNames(styles.tab, styles[`tab--theme-color-${themeColor}`], {
            [styles["tab--disabled"]]: isActive,
            [styles[`tab--disabled--theme-color-${themeColor}`]]: isActive,
          })
        }
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerCancel={onPointerCancel}
        onClick={onClick}
      >
        {name}
      </NavLink>
      {!isPopupHiddenRef.current ? (
        <PopupPageOffsetContextProvider
          offset={{ popupLeft: popupState.left, popupTop: popupState.top }}
        >
          <RestaurantPopupContainer restaurantId={id} restaurantName={name} />
        </PopupPageOffsetContextProvider>
      ) : null}
    </>
  );
}
