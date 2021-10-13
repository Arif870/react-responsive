import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

export default function Services() {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then(response => response.json())
      .then(data => setService(data));
  }, []);

  return (
    <div id="Services" className="service-container">
      <h1 className="my-5 text-info text-center">Our Services</h1>
      <div className="services">
        {services.map(service => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
