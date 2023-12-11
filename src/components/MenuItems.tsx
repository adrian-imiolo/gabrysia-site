import About from "./About"
import Contact from "./Contact"
import OnlineTips from "./OnlineTips"
import PhoneNumber from "./PhoneNumber"
import Prices from "./Prices"
import Services from "./Services"

function MenuItems() {
  return (
    <div className="menu-items">
        <About />
        <Services />
        <Prices />
        <OnlineTips />
        <Contact />
        <PhoneNumber />
    </div>
  )
}
export default MenuItems