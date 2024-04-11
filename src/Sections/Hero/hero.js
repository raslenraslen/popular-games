import "./hero.css";
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle"> Welcome to Watch me </h6>
        <h4 className="hero-title">
          <em> Browse</em> Our popular games are Here
        </h4>
        <div className="main-button">
          <a href="browse.html">Browse now</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
