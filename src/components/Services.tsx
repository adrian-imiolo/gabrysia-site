import { servicesData } from "./servicesData";

function ServicesDetails() {
  return (
    <div className="content-container">
      {servicesData.map((service, index) => (
        <div key={index} id={service.path} className="services-details">
          {index % 2 == 0 && (
            <div className="services-detail-img">
              <img src="https://picsum.photos/200/300" />
            </div>
          )}

          <div className="services-detail-img-mobile">
            <img src="https://picsum.photos/200/300" />
          </div>

          <div className="services-detail-item">
            <h3>{service.name}</h3>
            <p>{service.title}</p>
            <p>{service.content}</p>
          </div>
          {index % 2 !== 0 && (
            <div className="services-detail-img">
              <img src="https://picsum.photos/200/300" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default ServicesDetails;
