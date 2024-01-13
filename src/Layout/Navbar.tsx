import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import DropdownMenu from "../components/DropdownMenu";
import { useState } from "react";
import { servicesData } from "../components/servicesData";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function scrollToTheTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
        <button className="burger-menu-button" onClick={toggleMobileMenu}>
          xxx
        </button>

        <ul className="nav-elements">
          <li>
            <Link to="/" onClick={scrollToTheTop}>
              O MNIE
            </Link>
          </li>
          <li className="dropdown">
            <Link to={"/zakres-uslug"} onClick={scrollToTheTop}>
              ZAKRES USŁUG
            </Link>
            <DropdownMenu />
          </li>
          <li>
            <Link to="/honorarium" onClick={scrollToTheTop}>
              HONORARIUM
            </Link>
          </li>
          <li>
            <Link to="#kontakt">KONTAKT</Link>
          </li>
          <li>
            <a className="phone" href={`tel:${+48514922121}`}>
              tel. 514 922 121
            </a>
          </li>
        </ul>
      </nav>

      {showMobileMenu && (
        <ul className="nav-elements-mobile">
          <li>
            <Link to="/" onClick={scrollToTheTop}>
              O MNIE
            </Link>
          </li>
          <li>
            <Link to={"/zakres-uslug"} onClick={scrollToTheTop}>
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
            <Link to="/honorarium" onClick={scrollToTheTop}>
              HONORARIUM
            </Link>
          </li>
          <li>
            <Link to="#kontakt">KONTAKT</Link>
          </li>
          <li>
            <a className="phone" href={`tel:${+48514922121}`}>
              tel. 514 922 121
            </a>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;
