import { Route, Routes } from 'react-router-dom';
import Navbar from './Layout/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Prices from './components/Prices';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ServicesDetails from './components/ServicesDetails';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="services/details" element={<ServicesDetails />}/>
      </Routes>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
