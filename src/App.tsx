import { Route, Routes } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Prices from "./components/Prices";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Services from "./components/Services";
import "./App.css";
import ScrollToHashElement from "./components/ScrollToHashElements";

function App() {
  return (
    <div className="">
      <Navbar />
      <ScrollToHashElement />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/honorarium" element={<Prices />} />
        <Route path="zakres-uslug" element={<Services />} />
      </Routes>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
