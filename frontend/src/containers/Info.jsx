import React from "react";
import Header from "../components/Common/Header";
import Steps from "../components/Common/Steps";

function Info() {
  return (
    <div id="info">
      <Header />

      <main>
        <Steps />

        <div class="choose instruct instruct-info">
          <p>Add your Info</p>
        </div>
        <form class="infos">
          <div class="name">
            <p>Name</p>
            <input type="text" />
          </div>
          <div class="role">
            <p>Role in company</p>
            <input type="text" />
          </div>
          <div class="comp-name">
            <p>Company Name</p>
            <input type="text" />
          </div>
          <div class="btn-add">
            <input class="next" value="Add" type="submit" />
          </div>
        </form>
      </main>

      <footer>
        <div class="btn-back">
          <a href="/logo" class="back">
            Back
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Info;
