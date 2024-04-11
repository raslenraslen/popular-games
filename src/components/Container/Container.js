import React from "react";
import "./Container.css";

const Container = (props) => {
  return (
    <div className="container  main-container">
      <div>
        <h1> {props.children} </h1>
      </div>
    </div>
  );
};

export default Container;
