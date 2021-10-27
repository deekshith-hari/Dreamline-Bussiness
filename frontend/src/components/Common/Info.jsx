import React, { useState, useEffect } from "react";
import Steps from "./Steps";

function Info({
  setStep,
  inputUsername,
  setInputUsername,
  inputCompanyName,
  setInputCompanyName,
  submitToGenerate,
  setInputRole,
}) {
  const inputName = (e) => {
    setInputUsername(e.target.value);
  };

  const inputCompany = (e) => {
    setInputCompanyName(e.target.value);
  };

  const inputRole = (e) => {
    setInputRole(e.target.value);
  };

  return (
    <div id="info">
      <main>
        <Steps />
        <div class="choose instruct instruct-info">
          <p>Add your Info</p>
        </div>
        <form class="infos">
          <div class="name">
            <p>Name</p>
            <input type="text" onChange={inputName} />
          </div>
          <div class="role">
            <p>Role in company</p>
            <input type="text" onChange={inputRole} />
          </div>
          <div class="comp-name">
            <p>Company Name</p>
            <input type="text" onChange={inputCompany} />
          </div>
          <div class="btn-add">
            <input
              class="next"
              value="Add"
              type="submit"
              onClick={submitToGenerate}
            />
          </div>
        </form>
      </main>

      <footer>
        <div class="btn-back">
          <button onClick={() => setStep(2)} class="back">
            Back
          </button>
        </div>
      </footer>
    </div>
  );
}
export default Info;
