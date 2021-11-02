export const FETCH_UIMAGES = "FETCH_UIMAGES";
export const fetchUimagesAction = (bimages) => {
  return {
    type: "FETCH_UIMAGES",
    payload: bimages,
  };
};
