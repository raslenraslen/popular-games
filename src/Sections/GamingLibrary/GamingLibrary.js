import React from "react";
import "./GamingLibrary.css";

const Gaminglibrary = () => {
  return (
    <div div className="gaminglibrary   container">
      <div className="section-wrapper">
        <div className="section-header">
          <h4> Gaming Library </h4>
        </div>

        <div className="libray-gaming-card">
          <u1>
            <li>
              <img src="images/fc24.jpg" style={{ width: "60%" }} alt=" "></img>
            </li>
            <li>
              <h4> data1 </h4>
              <span>SandBox </span>
            </li>
            <li>
              <h4> Date Added </h4>
              <span>11/04/2024 </span>
            </li>
            <li>
              <h4> Hours played </h4>
              <span>200h </span>
            </li>
            <li>
              <h4> Currently </h4>
              <span>Downloaded </span>
            </li>
            <div className="main-button">
              {" "}
              <a href="ss"> Download </a>{" "}
            </div>
          </u1>
          <u1>
            <li>
              <img
                src="images/valorant.jpg"
                style={{ width: "33%", height: "90%" }}
                alt=" "
              ></img>
            </li>
            <li>
              <h4> Valorant </h4>
              <span>Riot Games </span>
            </li>
            <li>
              <h4> Date Added </h4>
              <span>13/04/2020 </span>
            </li>
            <li>
              <h4> Hours played </h4>
              <span>500h </span>
            </li>
            <li>
              <h4> Currently </h4>
              <span>Downloaded </span>
            </li>
            <div className="main-button">
              {" "}
              <a href="ss"> Download </a>{" "}
            </div>
          </u1>
        </div>
      </div>
    </div>
  );
};

export default Gaminglibrary;
