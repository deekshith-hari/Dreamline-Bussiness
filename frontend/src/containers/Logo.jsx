import React from "react";

import Header from "../components/Common/Header";
import Steps from "../components/Common/Steps";

import Plus_img from "../assets/img/+.png";

function Logo() {
  return (
    <div id="logo">
      <Header />

      <main>
        <Steps />

        <div class="choose instruct">
          <p>Upload your Logo</p>
        </div>
        <div class="addLogo">
          <img src={Plus_img} alt="" />
        </div>
      </main>

      <footer>
        <div class="btn">
          <div class="btn-1">
            <a href="/info" class="next">
              Next
            </a>
          </div>
          <hr />
          <div class="btn-2">
            <a href="/generate" class="back">
              Back
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Logo;
