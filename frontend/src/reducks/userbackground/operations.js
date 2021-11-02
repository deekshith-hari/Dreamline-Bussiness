import API from "../../API";
import { fetchUimagesAction } from "./actions";

const api = new API();

export const fetchUimages = () => {
  return async (dispatch) => {
    return api
      .getUserbackgrounds()
      .then((uimages) => {
        dispatch(fetchUimagesAction(uimages));
      })
      .catch((error) => {
        alert("Failed to connect API: /background_images/");
      });
  };
};
