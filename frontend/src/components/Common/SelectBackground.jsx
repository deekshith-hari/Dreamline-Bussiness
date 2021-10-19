import React from "react";
import Steps from "./Steps";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBimages } from "../../reducks/backgroundimages/operations";
import { getBimages } from "../../reducks/backgroundimages/selectors";

export default function SelectBackground({ setStep, setBackgroundId }) {
  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const bimages = getBimages(selector);

  useEffect(() => {
    dispatch(fetchBimages());
  }, []);

  return (
    <div>
      <main>
        <Steps />

        <div class="choose">
          <p>Choose your background Image</p>
        </div>
        <div class="flex-2">
          {bimages["results"] &&
            bimages["results"].map((image) => (
              <div class="bgd" key={image.id}>
                <img
                  src={image.image}
                  alt=""
                  onClick={() => setBackgroundId(image.id)}
                />
              </div>
            ))}
        </div>
      </main>

      <footer>
        <div class="btn-1">
          <button onClick={() => setStep(2)} class="next">
            Next
          </button>
        </div>
        <div class="btn-2">
          <a href="/" class="back">
            Back
          </a>
        </div>
      </footer>
    </div>
  );
}
