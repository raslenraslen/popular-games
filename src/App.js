import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Sections/header/header";
import Container from "./components/Container/Container";
import Footer from "./Sections/Footer/footer";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
