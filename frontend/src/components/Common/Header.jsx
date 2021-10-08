import React from "react";

function Header() {
  return (
    <header class="header">
      <nav class="flex-header">
        <div class="mb-0">
          <p>
            <span> DREAMLINE</span> digital
          </p>
        </div>
        <div class="mb-1">
          <div class="next">
            <a href="/">Next</a>
          </div>
          <div class="signup">
            <a href="/">Sign up</a>
          </div>
          <div class="mycard">
            <a href="/">Create card</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
