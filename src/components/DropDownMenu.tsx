import { servicesData } from "./servicesData";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <ul className="dropdown-content">
      {servicesData.map((service) => (
        <li key={service.id}>
          <Link to={`/zakres-uslug#${service.path}`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
