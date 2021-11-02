import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../components/Common/Header";
import SelectBackground from "../components/Common/SelectBackground";
import Logo from "../components/Common/Logo";
import Info from "../components/Common/Info";
import API from "../API";
import { push } from "connected-react-router";

const api = new API();

export default function Generate() {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const [inputBackgroundId, setInputBackgroundId] = useState(null);
  const [inputCompanyLogo, setInputCompanyLogo] = useState(null);
  const [inputUsername, setInputUsername] = useState(null);
  const [inputCompanyName, setInputCompanyName] = useState(null);
  const [inputRole, setInputRole] = useState(null);

  const [previewCompanyLogoUrl, setPreviewCompanyLogoUrl] = useState(null);

  const submitToGenerate = (e) => {
    let params = {
      username: inputUsername,
      company_name: inputCompanyName,
      company_logo: inputCompanyLogo,
      role: inputRole,
      background_id: inputBackgroundId,
    };
    api
      .postUserbackground(params)
      .then((response) => {
        dispatch(push("/userbackground"));
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SelectBackground
            setStep={setStep}
            inputBackgroundId={inputBackgroundId}
            setInputBackgroundId={setInputBackgroundId}
          />
        );
      case 2:
        return (
          <Logo
            setStep={setStep}
            setInputCompanyLogo={setInputCompanyLogo}
            previewCompanyLogoUrl={previewCompanyLogoUrl}
            setPreviewCompanyLogoUrl={setPreviewCompanyLogoUrl}
          />
        );
      case 3:
        return (
          <Info
            setStep={setStep}
            inputUsername={inputUsername}
            setInputUsername={setInputUsername}
            inputRole={inputRole}
            setInputRole={setInputRole}
            inputCompanyName={inputCompanyName}
            setInputCompanyName={setInputCompanyName}
            submitToGenerate={submitToGenerate}
          />
        );
    }
  };

  useEffect(() => {
    console.log(inputBackgroundId);
  }, [inputBackgroundId]);

  return (
    <div id="generate">
      <Header />
      {renderStep(
        step,
        setStep,
        inputBackgroundId,
        setInputBackgroundId,
        inputCompanyLogo,
        setInputCompanyLogo,
        previewCompanyLogoUrl,
        setPreviewCompanyLogoUrl,
        inputUsername,
        setInputUsername,
        inputRole,
        setInputRole,
        inputCompanyName,
        setInputCompanyName,
        submitToGenerate
      )}
    </div>
  );
}
