import { servicesData } from "./servicesData";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <ul className="dropdown-content">
      {servicesData.map((service) => (
        <Link to={`/zakres-uslug#${service.path}`}>
          <li key={service.id} className="hover-underline-animation">
            {service.name}{" "}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default DropdownMenu;
