import React, { useState, useEffect } from "react";

import Header from "../components/Common/Header";
import SelectBackground from "../components/Common/SelectBackground";
import Logo from "../components/Common/Logo";
import Info from "../components/Common/Info";

export default function Generate() {
  const [step, setStep] = useState(1);
  const [backgroundId, setBackgroundId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [image, setImage] = useState([]);
  const submitToGenerate = () => {};
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectBackground
            setStep={setStep}
            setBackgroundId={setBackgroundId}
          />
        );
      case 2:
        return (
          <Logo
            setStep={setStep}
            setPreviewImage={setPreviewImage}
            setImage={setImage}
            previewImage={previewImage}
          />
        );
      case 3:
        return (
          <Info
            setStep={setStep}
            image={image}
            backgroundId={backgroundId}
            previewImage={previewImage}
          />
        );
    }
  };

  useEffect(() => {
    console.log(backgroundId);
  }, [backgroundId]);

  return (
    <div id="generate">
      <Header />
      {renderStep(
        step,
        backgroundId,
        setStep,
        submitToGenerate,
        setBackgroundId,
        previewImage,
        setPreviewImage,
        image,
        setImage
      )}
    </div>
  );
}
