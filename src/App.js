import "./App.css";
import Header from "./Sections/header/header";
import Container from "./components/Container/Container";
import Footer from "./Sections/Footer/footer";
import Hero from "./Sections/Hero/hero";
import Mostpopular from "./Sections/MostPopular/mostPopular";
import Gaminglibrary from "./Sections/GamingLibrary/GamingLibrary";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Hero />
        <Mostpopular />
        <Gaminglibrary />
      </Container>
      <Footer />
    </>
  );
}

export default App;
