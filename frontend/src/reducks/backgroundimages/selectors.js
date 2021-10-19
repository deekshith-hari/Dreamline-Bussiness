import { createSelector } from "reselect";

const bimagesSelector = (state) => state.bimages;

export const getBimages = createSelector(
  [bimagesSelector],
  (state) => state.list
);
