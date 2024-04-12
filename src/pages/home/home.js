import React from "react";
import "./home.css";
import Hero from "../../Sections/Hero/hero";
import Mostpopular from "../../Sections/MostPopular/mostPopular";
import Gaminglibrary from "../../Sections/GamingLibrary/GamingLibrary";

const Home = () => {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Hero />
      <Mostpopular />
      <Gaminglibrary />
    </div>
  );
};

export default Home;
