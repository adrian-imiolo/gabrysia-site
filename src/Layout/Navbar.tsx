// import DropDownMenu from "../components/Navbar/DropDownMenu";
import Logo from "../components/Navbar/Logo"
// import MenuItems from "../components/Navbar/MenuItems"
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
            </ul>
          </div>
            {/* {windowSize > 576 ? <MenuItems /> : <DropDownMenu />}  */}
        </nav>
  )
}

export default Navbar