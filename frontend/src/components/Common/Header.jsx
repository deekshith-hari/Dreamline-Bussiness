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
            <a href="/generate">Next</a>
          </div>
          <div class="signin">
            <a href="/signin">Sign in</a>
          </div>
          <div class="signup">
            <a href="/signup">Sign up</a>
          </div>
          <div class="mycard">
            <a href="/">My card</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
