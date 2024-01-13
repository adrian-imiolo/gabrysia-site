import { servicesData } from "./servicesData";

function ServicesDetails() {
  return (
    <div className="services-details content-container">
      {servicesData.map((service, index) => (
        <div className="services-detail-item" key={index} id={service.path}>
          <img src={service.img1} />
          <h3>{service.name}</h3>
          <p>{service.title}</p>
          <p>{service.content}</p>
        </div>
      ))}
    </div>
  );
}
export default ServicesDetails;
