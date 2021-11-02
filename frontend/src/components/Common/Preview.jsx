import React, { useState, useEffect } from "react";
import preview from "../../assets/img/Mask Group 33.png";
import API from "../../API";
const api = new API();

function Preview({ selectedImageId }) {
  const [image, setImage] = useState({});
  useEffect(() => {
    api
      .getUserbackground(selectedImageId)
      .then((response) => {
        setImage(response);
      })
      .catch((error) => {
        alert("Failed to connect API: ImageDetail");
      });
  }, []);
  return (
    <body>
      {/* <!-- preview-modal --> */}
      <section>
        <div class="preview">
          <div class="preview-close-btn">+</div>
          <img src={image.generated_background}></img>

          <button class="preview-DL" type="submit">
            Download
          </button>
        </div>
      </section>
    </body>
  );
}

export default Preview;
