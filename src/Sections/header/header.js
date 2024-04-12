import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark gaming-navbar">
      <div className="container">
        <a href="/" className="navbar-brand">
          Missaaoui Gaming
          <img
            src="images/logo3.png"
            width="100px "
            height="100px"
            alt=""
          ></img>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#features" class="nav-link">
                Browse
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                    Learn
                  </a>
                </li>
                <li>
                  <a href="/profilee" class="dropdown-item">
                    Fortnite
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#faq" class="nav-link">
                Streams
              </a>
            </li>
            <li className="nav-item">
              <a href="./profile" class="nav-link">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
