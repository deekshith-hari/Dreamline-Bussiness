import API from "../../API";
import { push } from "connected-react-router";
import {
  userSignUpAction,
  userSignInAction,
  userSignOutAction,
} from "./actions";

const api = new API();
const LOGIN_USER_KEY = "LOGIN_USER_KEY";

export const fetchUserFromLocalStorage = () => {
  return async (dispatch) => {
    const userJSON = localStorage.getItem(LOGIN_USER_KEY);
    if (userJSON && userJSON.token !== "") {
      dispatch(userSignInAction(JSON.parse(userJSON)));
    }
  };
};

export const signUp = (username, email, password) => {
  return async (dispatch) => {
    // Validation
    if (username === "" || email === "" || password === "") {
      alert("Please fill out username, email, and password.");
      return false;
    }

    return api
      .signUp(username, email, password)
      .then((user) => {
        dispatch(userSignUpAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/"));
      })
      .catch((error) => {
        alert("Failed to create new user!");
        console.log(error);
      });
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    // Validation
    if (email === "" || password === "") {
      alert("Please fill out email and password.");
      return false;
    }

    return api
      .signIn(email, password)
      .then((user) => {
        dispatch(userSignInAction(user));
        localStorage.setItem(LOGIN_USER_KEY, JSON.stringify(user));
        dispatch(push("/generate"));
      })
      .catch((error) => {
        alert("Failed to sign in!");
        console.log(error);
      });
  };
};

export const signOut = () => {
  return async (dispatch) => {
    dispatch(userSignOutAction());
    localStorage.removeItem(LOGIN_USER_KEY);
    dispatch(push("/signin"));
  };
};
