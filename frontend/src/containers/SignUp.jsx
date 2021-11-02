import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { signUp } from "../reducks/userAuth/operations";

function SignUp() {
  const dispatch = useDispatch();

  const closeButton = () => {
    dispatch(push("/"));
  };

  const [username, setUserName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const inputUserName = (event) => {
    setUserName(event.target.value);
  };

  const inputEmail = (event) => {
    setEmail(event.target.value);
  };

  const inputPassword = (event) => {
    setPassword(event.target.value);
  };

  const signUpButton = (e) => {
    e.preventDefault();
    dispatch(signUp(username, email, password));
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="yb-body">
      <section>
        <div className="sign-up">
          <div className="sign-up-2">
            <div className="close-btn" onClick={closeButton}>
              +
            </div>
            <div className="title">
              <p className="title-2">DREAMLINE</p>{" "}
              <p class="title-3">digital</p>
            </div>
            <div className="sign-up-3">
              <p>Sign up</p>
            </div>
            <form action="/">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User Name"
                onChange={inputUserName}
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={inputEmail}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={inputPassword}
              />
              <button type="submit" name="signup" onClick={signUpButton}>
                {" "}
                Sign Up
              </button>
            </form>
            <p className="members">
              Already a Member?{" "}
              <a id="sign-in-redirect" href="/signin">
                Sign In.
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
