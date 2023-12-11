import './App.css'
import Navbar from './Layout/Navbar'
import About from './components/About'
import Contact from './components/Contact'
// import OnlineTips from './components/Navbar/OnlineTips'
import Prices from './components/Prices'
import Services from './components/Services'


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
