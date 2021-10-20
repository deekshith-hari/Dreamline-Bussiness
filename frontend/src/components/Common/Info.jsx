import React, { useState, useEffect } from "react";
import Steps from "./Steps";
import API from "../../API";

const api = new API();

function Info({ setStep, image, backgroundId, previewImage }) {
  const [name, setName] = useState(""),
    [role, setRole] = useState(""),
    [company, setCompany] = useState("");
  const company_logo = image;
  const background_id = backgroundId;
  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputRole = (e) => {
    setRole(e.target.value);
  };

  const inputCompany = (e) => {
    setCompany(e.target.value);
  };

  const submitGenerate = (e) => {
    let params = {
      username: name,
      company_name: company,
      company_logo: company_logo,
      role: role,
      background_id: background_id,
    };
    api.postUserbackground(params);
    e.preventDefault();
  };
  useEffect(() => {
    console.log(background_id);
    console.log(company_logo.name);
    console.log(name);
  }, []);

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
              onClick={submitGenerate}
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
