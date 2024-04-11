import "./App.css";
import Header from "./Sections/header/header";
import Container from "./components/Container/Container";
/*import Footer from "./components/Footer/footer"; */
import Hero from "./Sections/Hero/hero";
import Mostpopular from "./Sections/MostPopular/mostPopular";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Mostpopular />
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
