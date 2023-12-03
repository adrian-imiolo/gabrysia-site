import DropDownMenu from "../components/Navbar/DropDownMenu";
import Logo from "../components/Navbar/Logo"
import MenuItems from "../components/Navbar/MenuItems"
import { useState, useEffect } from 'react'
function Navbar() {
  const [windowSize, setWindowSize] = useState(
    window.innerWidth,
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
        <nav className="navbar">
            <Logo />
            {windowSize > 576 ? <MenuItems /> : <DropDownMenu />} 
        </nav>
  )
}

export default Navbar