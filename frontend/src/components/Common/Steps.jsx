import React from "react";

import Step1 from "../../assets/img/background (2).png";
import Transition from "../../assets/img/Transition.png";
import Step2 from "../../assets/img/logo.png";
import Step3 from "../../assets/img/information.png";

function Steps() {
  return (
    <div class="flex-1">
      <div class="flex">
        <div class="step">
          <p>Step 1</p>
        </div>
        <a href="/generate">
          <div class="step-1">
            <img src={Step1} class="icon" alt="" />
          </div>
        </a>
        <div class="step">
          <p>Choose Background</p>
        </div>
      </div>
      <div class="transition">
        <img src={Transition} alt="" />
      </div>
      <div class="flex">
        <div class="step">
          <p>Step 2</p>
        </div>
        <a href="/logo">
          <div class="step-2">
            <img src={Step2} class="icon" alt="" />
          </div>
        </a>
        <div class="step">
          <p>Upload Logo</p>
        </div>
      </div>
      <div class="transition">
        <img src={Transition} alt="" />
      </div>
      <div class="flex">
        <div class="step">
          <p>Step 3</p>
        </div>
        <a href="/info">
          <div class="step-3">
            <img src={Step3} class="icon" alt="" />
          </div>
        </a>
        <div class="step">
          <p>Add Info</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
