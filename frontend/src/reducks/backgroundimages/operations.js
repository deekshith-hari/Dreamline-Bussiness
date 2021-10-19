import API from "../../API";
import { fetchBimagesAction } from "./actions";

const api = new API();

export const fetchBimages = () => {
  return async (dispatch) => {
    return api
      .getBackgroundimages()
      .then((bimages) => {
        dispatch(fetchBimagesAction(bimages));
      })
      .catch((error) => {
        alert("Failed to connect API: /background_images/");
      });
  };
};
