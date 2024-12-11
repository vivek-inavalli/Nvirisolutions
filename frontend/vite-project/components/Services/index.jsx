import vector1 from "../../images/vector1.png";
import Vector from "../../images/Vector.png";
import refrigerator from "../../images/refrigerator.png";
import "./index.css";

const Services = () => {
  const services = [
    {
      icon: refrigerator,
      title: "Fridge",
      description:
        "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
    },
    {
      icon: Vector,
      title: "Air Conditioner",
      description:
        "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
    },
    {
      icon: vector1,
      title: "Television",
      description:
        "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great, or being a bright color. For standing out.",
    },
  ];

  return (
    <div className="services-container">
      <div className="allservices">
        <h1>All Services</h1>
        <p>
          The time is now for it to be okay to be great. For being a bright
          color. For standing out.
        </p>
      </div>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
