import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UimagesReducer = (state = initialState.uimages, action) => {
  switch (action.type) {
    case Actions.FETCH_UIMAGES:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
