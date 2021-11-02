import React from "react";
import Oracle from "../assets/img/Oracle-logo.png";
import Img1 from "../assets/img/Mask Group 37.png";
import Tesla from "../assets/img/Tesla_logo.png";
import Img2 from "../assets/img/Mask Group 38.png";
import Ibm from "../assets/img/2560px-IBM_logo.svg.png";
import Img3 from "../assets/img/Mask Group 36.png";
import Header from "../components/Common/Header";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

function Home() {
  const key = localStorage.getItem("LOGIN_USER_KEY");
  const dispatch = useDispatch();
  return (
    <div id="home">
      <Header />
      <main class="main">
        <div class="flex-main">
          <div class="main-1">
            <div class="title">
              <p>The Best Digital Business Background</p>
            </div>
            <div class="description">
              <p>
                Dreamline Digital is a free digital business meeting Background
                and designed to help you grow your network.
              </p>
            </div>
            <div class="generate">
              <a class="make-image">Generate your background image</a>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <div class="footer-1">
          <div class="title">
            <p>Create your own business background</p>
          </div>
        </div>
        <div class="footer-2">
          <div class="logo-1">
            <div class="image-header">
              <div class="logo">
                <img src={Oracle} alt="" />
              </div>
              <div class="business">
                <hr />
                <p class="name">Shalina gomes</p>
                <p class="occupation">Chief Firestarter</p>
                <p class="brand">Oracle</p>
              </div>
            </div>
            <div class="image">
              <img src={Img1} alt="" />
            </div>
          </div>
          <div class="logo-2">
            <div class="image-header">
              <div class="logo">
                <img src={Tesla} alt="" />
              </div>
              <div class="business">
                <hr />
                <p class="name">Shalina gomes</p>
                <p class="occupation">Chief Firestarter</p>
                <p class="brand">Tesla</p>
              </div>
            </div>
            <div class="image">
              <img src={Img2} alt="" />
            </div>
          </div>
          <div class="logo-3">
            <div class="image-header">
              <div class="logo">
                <img src={Ibm} alt="" />
              </div>
              <div class="business">
                <hr />
                <p class="name">Shalina gomes</p>
                <p class="occupation">Chief Firestarter</p>
                <p class="brand">IBM</p>
              </div>
            </div>
            <div class="image">
              <img src={Img3} alt="" />
            </div>
          </div>
          <div class="try-now">
            {key ? (
              <span
                onClick={() => dispatch(push("/generate"))}
                class="make-image"
              >
                {" "}
                TRY NOW{" "}
              </span>
            ) : (
              <span
                onClick={() => dispatch(push("/signin"))}
                class="make-image"
              >
                {" "}
                TRY NOW{" "}
              </span>
            )}
          </div>
        </div>

        <hr />
        <div class="footer-3">
          <p>
            <strong>DREAMLINE</strong> digital
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
