import React from "react";
import "./hero.css";
import femaleImg from "../../assets/female-doctor.png";
import doctorsImg from "../../assets/doctors.png";
import lightIcon from "../../assets/light-icon.svg";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-left-content">
          <div className="hero-title">
            <h1 className="title">Feel Better About Finding Healthcare</h1>
            <p className="paragraph">
              At Healthgrades, we take the guesswork out of finding the right
              Doctors, Hospitals, and care for you and your family
            </p>
          </div>
        </div>
        <div className="hero-right-content">
          <div className="light-icon">
            <img src={lightIcon} alt="" />
          </div>
          <div className="checkup">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.81595 6.49861C6.72669 6.44556 10.2899 4.95347 13 2.52783C15.7101 4.95347 19.2733 6.44556 23.184 6.49861C23.3261 7.34462 23.4 8.21371 23.4 9.10008C23.4 15.8924 19.059 21.6708 13 23.8124C6.94101 21.6708 2.60001 15.8924 2.60001 9.10008C2.60001 8.21372 2.67393 7.34462 2.81595 6.49861ZM17.6071 11.1071C17.9976 10.7166 17.9976 10.0835 17.6071 9.69293C17.2166 9.30241 16.5834 9.30241 16.1929 9.69293L11.7 14.1858L9.80711 12.2929C9.41658 11.9024 8.78342 11.9024 8.39289 12.2929C8.00237 12.6835 8.00237 13.3166 8.39289 13.7071L10.9929 16.3071C11.1804 16.4947 11.4348 16.6 11.7 16.6C11.9652 16.6 12.2196 16.4947 12.4071 16.3071L17.6071 11.1071Z"
                fill="#2AA8FF"
              />
            </svg>
            <p className="checkup-text">Regular Checkup</p>
          </div>
          <div className="meet-container">
            <div className="meet-doctors-box">
              <p className="docter-title">Meet Our Doctors</p>
              <img src={doctorsImg} alt="" srcset="" />
              <div className="percent-bar-container">
                <div className="bar-1"></div>
                <div className="bar-2"></div>
              </div>
            </div>
          </div>
          <img className="hero-img" src={femaleImg} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
