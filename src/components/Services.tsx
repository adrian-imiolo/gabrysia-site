import { servicesData } from "./servicesData"

function Services() {
  return (
    <section className="services">
      <h2>GŁÓWNE OBSZARY DZIAŁANIA</h2>
      <div className="services-container">
        <div className="services-box">
          <img alt={servicesData[0].name} src={servicesData[0].img} />
          <h3>{servicesData[0].name}</h3>
          <p>{servicesData[0].title}</p>
        </div>
        <div className="services-box">
          <img alt={servicesData[1].name} src={servicesData[1].img} />
          <h3>{servicesData[1].name}</h3>
          <p>{servicesData[1].title}</p>
        </div>
        <div className="services-box">
          <img alt={servicesData[2].name} src={servicesData[2].img} />
          <h3>{servicesData[2].name}</h3>
          <p>{servicesData[2].title}</p>
        </div>
        <div className="services-box">
          <img alt={servicesData[3].name} src={servicesData[3].img} />
          <h3>{servicesData[3].name}</h3>
          <p>{servicesData[3].title}</p>
        </div>
        <div className="services-box">
          <img alt={servicesData[4].name} src={servicesData[4].img} />
          <h3>{servicesData[4].name}</h3>
          <p>{servicesData[4].title}</p>
        </div>
        <div className="services-box">
          <img alt={servicesData[5].name} src={servicesData[5].img} />
          <h3>{servicesData[5].name}</h3>
          <p>{servicesData[5].title}</p>
        </div>
      </div>
    </section>
  )
}

export default Services