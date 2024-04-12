import React from "react";
import "./buttons.css";
const PrimaryButton = (props) => {
  return (
    <button className=" button button-primary">
      <a href="#"> {props.children} </a>
    </button>
  );
};
const SecondaryButton = (props) => {
  return (
    <div className=" button button-secondary">
      {" "}
      <a href="#"> {props.children} </a>{" "}
    </div>
  );
};

export default PrimaryButton;
export { SecondaryButton };
