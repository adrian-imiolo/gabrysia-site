// import DropDownMenu from "../components/Navbar/DropDownMenu";
import Logo from "../components/Navbar/Logo"
// import MenuItems from "../components/Navbar/MenuItems"
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'


function Navbar() {
  // const [windowSize, setWindowSize] = useState(
  //   window.innerWidth,
  // );

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleWindowResize);

  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // }, []);
  return (
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Logo />
            </div>
          </div>
          <div>
            <ul className="nav-elements">
              <li>
                <Link activeClass="active" smooth spy to="about">O mnie</Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="services">Zakres usług</Link>
              </li>
              <li>
                <Link activeClass="active" smooth spy to="prices">Honorarium</Link>
              </li>
              {/* <li>
                <Link activeClass="active" smooth spy to="online-tips">Porady Online</Link>
              </li> */}
              <li>
                <Link activeClass="active" smooth spy to="contact">Kontakt</Link>
              </li>
            </ul>
          </div>
            {/* {windowSize > 576 ? <MenuItems /> : <DropDownMenu />}  */}
        </nav>
  )
}

export default Navbar