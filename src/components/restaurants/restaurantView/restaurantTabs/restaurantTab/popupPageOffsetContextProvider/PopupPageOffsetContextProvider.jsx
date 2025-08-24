import { createContext, useContext } from "react";

const PopupPageOffsetContext = createContext({ popupLeft: 0, popupTop: 0 });

export const usePopupPageOffset = () => useContext(PopupPageOffsetContext);

export default function PopupPageOffsetContextProvider({
  children,
  offset = { popupLeft: 0, popupTop: 0 },
}) {
  return (
    <PopupPageOffsetContext.Provider value={offset}>
      {children}
    </PopupPageOffsetContext.Provider>
  );
}
