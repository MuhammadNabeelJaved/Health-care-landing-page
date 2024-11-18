import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./review.css";
import doctor9 from "../../assets/doctor-9.png";
import stars from "../../assets/stars.svg";
import reviewsData from "./reviewsData.js";

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next-arrow" onClick={onClick}>
    {/* Replace with your custom SVG or icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <circle
        cx="19"
        cy="19"
        r="19"
        transform="rotate(180 19 19)"
        fill="#2AA8FF"
      />
      <path
        d="M11.2667 18.8L21.72 10.96C22.2474 10.5645 23 10.9408 23 11.6V26.4C23 27.0592 22.2474 27.4355 21.72 27.04L11.2667 19.2C11.1333 19.1 11.1333 18.9 11.2667 18.8Z"
        fill="white"
      />
    </svg>
  </div>
);
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
    {/* Replace with your custom SVG or icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
    >
      <circle cx="19" cy="19" r="19" fill="#2AA8FF" />
      <path
        d="M26.7333 19.2L16.28 27.04C15.7526 27.4355 15 27.0592 15 26.4L15 11.6C15 10.9408 15.7526 10.5645 16.28 10.96L26.7333 18.8C26.8667 18.9 26.8667 19.1 26.7333 19.2Z"
        fill="white"
      />
    </svg>
  </div>
);
const Review = () => {
  const settings = {
    // className: "center slider-container",
    infinite: true,
    dots: true,
    // centerPadding: "30px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  return (
    <>
      <div className="reviews-container">
        <div className="reviews-content">
          <h2 className="review-title">Our Patients Feedback About us</h2>
          <div className="review">
            <div className="rectangle-image">
              <img style={{ width: "100%" }} src={doctor9} alt="Review Image" />
              
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="456"
              height="237"
              viewBox="0 0 456 237"
              fill="none"
            >
              <path
                d="M32.4477 49.8331C34.6618 38.8792 43.877 30.7253 55.019 29.8611L428.32 0.909663C442.846 -0.216855 455.254 11.2658 455.254 25.8348V211.92C455.254 225.727 444.061 236.92 430.254 236.92H25.1901C9.39301 236.92 -2.44417 222.45 0.685663 206.966L32.4477 49.8331Z"
                fill="#E8F1FF"
              />
            </svg>
            {/* <Slider className="slider" {...settings}> */}
            <div className="review-container">
              <div className="review-profile">
                <div className="review-profile-image">
                  <img src={doctor9} alt="" />
                </div>
                <div className="review-profile-name">
                  <h3 className="review-name">Alexander-Arnold</h3>
                  <p className="review-location">Bandung, Indonesia</p>
                  <img src={stars} alt="Stars Image" />
                </div>
              </div>
              <p className="review-description">
                “There are many variations passages of your health available,
                but the majority have suffered alteration in some form, by
                injected humour. We are the startup studio with a mission for
                partner”
              </p>
            </div>
            {/* </Slider> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
