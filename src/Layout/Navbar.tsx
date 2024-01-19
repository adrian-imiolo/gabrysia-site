import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { servicesData } from "../components/servicesData";
import DropdownMenu from "../components/DropDownMenu";
import phone from "../assets/phone.png";
import menu from "../assets/menu-hamburger.png";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function scrollToTheTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleClick(): void {
    scrollToTheTop();
    toggleMobileMenu();
  }

  function toggleMobileMenu(): void {
    setShowMobileMenu((prev) => !prev);
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <a className="phone-mobile" href={`tel:${+48514922121}`}>
          <div className="phone-mobile-container">
            <img src={phone} alt="Phone icon" />
            <h3>+48 514 922 121</h3>
          </div>
        </a>
        <button className="burger-menu-button" onClick={toggleMobileMenu}>
          <img src={menu} alt="Hamburger menu" />
        </button>

        <ul className="nav-elements">
          <li>
            <Link
              to="/"
              onClick={scrollToTheTop}
              className="hover-underline-animation"
            >
              O MNIE
            </Link>
          </li>
          <li className="dropdown">
            <Link
              to={"/zakres-uslug"}
              onClick={scrollToTheTop}
              className="hover-underline-animation"
            >
              ZAKRES USŁUG
            </Link>
            <DropdownMenu />
          </li>
          <li>
            <Link
              to="/honorarium"
              onClick={scrollToTheTop}
              className="hover-underline-animation"
            >
              HONORARIUM
            </Link>
          </li>
          <li>
            <Link to="#kontakt" className="hover-underline-animation">
              KONTAKT
            </Link>
          </li>
          <li>
            <a className="phone" href={`tel:${+48514922121}`}>
              tel. 514 922 121
            </a>
          </li>
        </ul>
      </nav>

      {showMobileMenu && (
        <>
          <ul className="nav-elements-mobile">
            <li>
              <Link to="/" onClick={handleClick}>
                O MNIE
              </Link>
            </li>
            <li>
              <Link to={"/zakres-uslug"} onClick={handleClick}>
                ZAKRES USŁUG
              </Link>
              <ul className="dropdown-content-mobile">
                {servicesData.map((service) => (
                  <div key={service.id}>
                    <Link to={`/zakres-uslug#${service.path}`}>
                      {service.name}
                    </Link>
                  </div>
                ))}
              </ul>
            </li>
            <li>
              <Link to="/honorarium" onClick={handleClick}>
                HONORARIUM
              </Link>
            </li>
            <li>
              <Link onClick={toggleMobileMenu} to="#kontakt">
                KONTAKT
              </Link>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default Navbar;
