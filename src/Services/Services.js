import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  // get and set data
  const [services, setServices] = useState([]);

  // load data
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h2 className="my-4">All Services</h2>
      <div className="container d-flex justify-content-evenly ">
        <div></div>
        <div className="service-container">
          {/* rendering all services */}
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Services;
