import React from "react";
import "./GamingLibrary.css";
import { SecondaryButton } from "../../components/buttons/buttons";

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
            <SecondaryButton>Download </SecondaryButton>
          </u1>
          <u1>
            <li>
              <img
                src="images/R.png"
                style={{ width: "37%", height: "90%" }}
                alt=" "
              ></img>
            </li>
            <li>
              <h4> pes 2013 </h4>
              <span>Sport </span>
            </li>
            <li>
              <h4> Date Added </h4>
              <span>11/04/2013 </span>
            </li>
            <li>
              <h4> Hours played </h4>
              <span>250h </span>
            </li>
            <li>
              <h4> Currently </h4>
              <span>Deleted </span>
            </li>
            <SecondaryButton>Download</SecondaryButton>
          </u1>
        </div>
      </div>
    </div>
  );
};

export default Gaminglibrary;
