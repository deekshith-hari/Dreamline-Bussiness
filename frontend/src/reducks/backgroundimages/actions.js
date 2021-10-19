export const FETCH_BIMAGES = "FETCH_BIMAGES";
export const fetchBimagesAction = (bimages) => {
  return {
    type: "FETCH_BIMAGES",
    payload: bimages,
  };
};
