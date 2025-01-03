import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

