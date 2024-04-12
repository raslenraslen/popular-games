import "./hero.css";
import PrimaryButton from "../../components/buttons/buttons";
const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle"> Welcome to Watch me </h6>
        <h4 className="hero-title">
          <em> Browse</em> Our popular games are Here
        </h4>
        <PrimaryButton> Browse now</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
