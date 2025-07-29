import { createSlice } from "@reduxjs/toolkit";
import { homePageContent } from "../../../../materials/home-content";

const initialState = {
  homePageContent,
};

export const homeSlice = createSlice({
  name: "home",
  initialState,

  selectors: {
    selectHomePageContent: (state) => state.homePageContent,
  },
});

export const { selectHomePageContent } = homeSlice.selectors;
