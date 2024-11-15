import React from "react";
import "./experience.css";
import doctor6 from "../../assets/doctor-6.png";

const Experience = () => {
  return (
    <>
      <div className="experience-container">
        <div className="experience-left-content">
          <div className="content">
            <p className="experience-para">25+ years of experiences</p>
            <h2 className="experience-title">
              We Are Always Ensure Best Medical Treatment For Your Health
            </h2>
            <p className="experience-description">
              There are many variations passages of your health available, but
              the majority have suffered alteration in some form, by injected
              humour. We are the startup studio with a mission for partner.{" "}
            </p>
          </div>
          <div className="button">
            <button className="experience-button">Start consultation</button>
          </div>
        </div>
        <div className="experience-right-content">
          <div className="image-container">
            {/* <img src={doctor6} alt="" /> */}
          </div>
          <div className="bg-rectangle"></div>
        </div>
      </div>
    </>
  );
};

export default Experience;
