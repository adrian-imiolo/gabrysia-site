import './App.css'
import Navbar from './Layout/Navbar'
import About from './components/Navbar/About'
import Contact from './components/Navbar/Contact'
// import OnlineTips from './components/Navbar/OnlineTips'
import Prices from './components/Navbar/Prices'
import Services from './components/Navbar/Services'


function App() {

  return (
    <>
        <Navbar />
        <About />
        <Services />
        <Prices />
        <Contact />
    </>
  )
}

export default App
