import React, { useEffect } from "react";
import Header from "../components/Common/Header";
import { useDispatch, useSelector } from "react-redux";
import { getUimages } from "../reducks/userbackground/selectors";
import { fetchUimages } from "../reducks/userbackground/operations";

function YourBackground() {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const uimages = getUimages(selector);
  const user = JSON.parse(localStorage.getItem("LOGIN_USER_KEY"));
  useEffect(() => {
    dispatch(fetchUimages(user.token));
    console.log("test");
    console.log(uimages);
    console.log(user);
  }, []);
  return (
    <>
      <Header />
      <div id="Yourbackground" class="yb-bg">
        <div class="yb-body">
          <main class="yb-main">
            <div class="YB-header">
              <p>Your Backgrounds</p>
            </div>

            <div class="scrolling-wrapper">
              {uimages["results"] &&
                uimages["results"].map((image) => (
                  <div class="card">
                    <img src={image.generated_background} alt=""></img>
                    <div class="link-panel">
                      <a id="preview-btn">Preview | </a>
                      <button class="DL-btn">Download</button>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
export default YourBackground;
