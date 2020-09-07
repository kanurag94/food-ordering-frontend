import React from "react";

export default function Navbar() {
  return (
    <div>
      <hr />
      <nav className="dt w-100 border-box pa3 ph5-ns">
        <a className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
          Mary's Kitchen
        </a>
        <div className="dtc v-mid w-75 tr">
          <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="/signin"
            title="Login"
          >
            {localStorage.getItem("name") !== null
              ? "Logged in, Re-login?"
              : "Login"}
          </a>
          <a
            className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns"
            href="/signup"
            title="Signup"
          >
            {localStorage.getItem("name") !== null ? "Sign Up" : "Sign Up"}
          </a>
          <a
            className="link dim dark-gray f6 f5-ns dib"
            href="/dashboard"
            title="Dashboard"
          >
            {localStorage.getItem("name") !== null ? "Dashboard" : ""}
          </a>
        </div>
      </nav>
      <hr />
    </div>
  );
}
