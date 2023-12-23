// import DropDownMenu from "../components/Navbar/DropDownMenu";
import Logo from "../components/Logo"
// import MenuItems from "../components/Navbar/MenuItems"
import { Link } from 'react-scroll'


function Navbar() {
  return (
        <nav className="navbar">
          <div>
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div>
            <ul className="nav-elements">
              <li>
                <Link activeClass="active" smooth spy to="about">O MNIE</Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="services">ZAKRES USŁUG</Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="prices">HONORARIUM</Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="contact">KONTAKT</Link>
              </li>
              <li>
                <a className="phone" href={`tel:${+48514922121}`}>tel. 514 922 121</a>
              </li>
            </ul>
          </div>
        </nav>
  )
}

export default Navbar