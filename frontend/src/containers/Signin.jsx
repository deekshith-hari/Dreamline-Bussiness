import React from "react";

export default function Signin() {
  return (
    <>
      <section>
        <div class="sign-up">
          <div class="sign-up-2">
            <div class="close-btn">+</div>
            <div class="title">
              <p class="title-2">DREAMLINE</p> <p class="title-3">digital</p>
            </div>
            <div class="sign-up-3">
              <p>Sign up</p>
            </div>

            <form action="">
              <input type="text" placeholder="Email address" />
              <input type="text" placeholder="Password" />
              <button type="submit"> Sign up</button>
            </form>
            <p class="members">
              Already a Member?{" "}
              <a id="sign-in-redirect" href="/">
                Sign in.
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
