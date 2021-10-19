import * as Actions from "./actions";
import initialState from "../store/initialState";

export const BimagesReducer = (state = initialState.bimages, action) => {
  switch (action.type) {
    case Actions.FETCH_BIMAGES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
