import React, { useEffect, useState } from "react";
import { signOut } from "../../reducks/userAuth/operations";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function Header() {
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const dispatch = useDispatch();
  const signOutButton = () => {
    dispatch(signOut());
    dispatch(push("/signin"));
  };

  return (
    <header class="header">
      <nav class="flex-header">
        <div class="mb-0">
          <p>
            <span> DREAMLINE</span> digital
          </p>
        </div>
        <div class="mb-1">
          <div class="next">
            <a href="/generate">Next</a>
          </div>
          {key ? (
            <span class="signup" onClick={signOutButton}>
              Logout
            </span>
          ) : (
            <span class="signin" onClick={() => dispatch(push("/signin"))}>
              Sign in
            </span>
          )}
          {key ? (
            <span
              class="mycard"
              onClick={() => dispatch(push("/userbackground"))}
            >
              My card
            </span>
          ) : (
            <span class="signup" onClick={() => dispatch(push("/signup"))}>
              Sign up
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
