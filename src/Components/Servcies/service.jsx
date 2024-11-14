import React from "react";
import "./services.css";
import services from "./services.js";

const service = () => {
  return (
    <>
      <div className="service-container">
        {services.map((service) => {
          return (
            <div key={service.id} className="service-categories">
              <div className="service-icon">
                <img src={service.icon} alt="" />
              </div>
              <div className="service-title">{service.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default service;
