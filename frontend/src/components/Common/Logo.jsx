import React, { useState, useRef } from "react";
import Steps from "./Steps";

import Plus_img from "../../assets/img/+.png";

function Logo({
  setStep,
  previewCompanyLogoUrl,
  setInputCompanyLogo,
  setPreviewCompanyLogoUrl,
}) {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };

  const inputImage = (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    setPreviewCompanyLogoUrl(objectUrl);
    setInputCompanyLogo(file);
    console.log(file);
  };

  return (
    <div id="logo">
      <main>
        <Steps />

        <div class="choose instruct">
          <p>Upload your Logo</p>
        </div>
        <div class="addLogo">
          <input
            type="file"
            style={{ display: "none" }}
            ref={inputFile}
            onChange={inputImage}
          />
          <img
            src={previewCompanyLogoUrl ? previewCompanyLogoUrl : Plus_img}
            alt=""
            onClick={onButtonClick}
            name="image"
            type="file"
          />
        </div>
      </main>

      <footer>
        <div class="btn">
          <div class="btn-1">
            <button onClick={() => setStep(3)} class="next">
              Next
            </button>
          </div>
          <hr />
          <div class="btn-2">
            <button onClick={() => setStep(1)} class="back">
              Back
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Logo;
