import { createSelector } from "reselect";

const uimagesSelector = (state) => state.uimages;

export const getUimages = createSelector(
  [uimagesSelector],
  (state) => state.list
);
