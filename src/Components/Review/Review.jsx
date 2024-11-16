import React from "react";
import "./review.css";
import doctor9 from "../../assets/doctor-9.jpg";

const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="reviews-content">
          <h2 className="review-title">Our Patients Feedback About us</h2>
          <div className="review">
            <div className="rectangle-image">
              <img src={doctor9} alt="Review Image" />
            </div>
            <div className="review-container">
              <div>
                <h3 className="review-name">Alexander-Arnold</h3>
                <p className="review-location">Bandung, Indonesia</p>
              </div>
              <p className="review-description">
                “There are many variations passages of your health available,
                but the majority have suffered alteration in some form, by
                injected humour. We are the startup studio with a mission for
                partner”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
