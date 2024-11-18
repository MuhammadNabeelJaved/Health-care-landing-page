import React from "react";
import "./subscribe.css";
import doctor from "../../assets/doctor-7.jpg"

const Subscribe = () => {
  return (
    <>
      <div className="subscribe-container">
        <div className="subscribe-content">
          <div className="subscribe-image">
            {/* <img src={doctor} alt="" /> */}
          </div>
          <div className="subscribe-text">
            <h2 className="subscribe-title">Subscribe to Our Newsletter!</h2>
            <p className="subscribe-description">
              We’ll send you the best of our blog just once mont. We promise
            </p>
            <div className="subscribe">
              <input
                className="subscribe-input"
                type="text"
                name=""
                id=""
                placeholder="Enter your email"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
