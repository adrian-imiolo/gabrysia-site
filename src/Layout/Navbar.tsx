import Logo from "../components/Logo";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import { servicesData } from "../components/servicesData";
import { useState } from "react";

function Navbar() {

  
  // const scrollTo = (id: number | string) => {
  //   scroll.scrollTo(id, {
  //     duration: 1000,
  //     smooth: 'easeInOutQuad',
  //   });
  // };

  // const scrollToTop = () => {
  //   scroll.scrollToTop({
  //     duration: 1000,
  //     smooth: 'easeInOutQuad',
  //   });
  // };

  // const handleNavLinkClick = (id: number | string) => {
  //   scrollTo(id);
  //   scrollToTop();
  // };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div>
        <ul className="nav-elements">
          <li>
            <Link to="/">O MNIE</Link>
          </li>
          <li>
          <Link to="/services/details" >ZAKRES USŁUG</Link>
          
          </li>
          <li>
            <Link to="/prices">HONORARIUM</Link>
          </li>
          <li>
            <ScrollLink activeClass="active" smooth spy to="contact">KONTAKT</ScrollLink>
          </li>
          <li>
            <a className="phone" href={`tel:${+48514922121}`}>tel. 514 922 121</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
