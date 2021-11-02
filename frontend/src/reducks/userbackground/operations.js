import API from "../../API";
import { fetchUimagesAction } from "./actions";

const api = new API();

export const fetchBimages = () => {
  return async (dispatch) => {
    return api
      .getUserbackground()
      .then((uimages) => {
        dispatch(fetchUimagesAction(uimages));
      })
      .catch((error) => {
        alert("Failed to connect API: /background_images/");
      });
  };
};
