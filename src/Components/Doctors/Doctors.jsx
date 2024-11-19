import React, { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./doctors.css";
import doctors from "./doctorsData.js";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
    {/* Replace with your custom SVG or icon */}
    <svg className="arrow-svg"
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

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next-arrow" onClick={onClick}>
    {/* Replace with your custom SVG or icon */}
    <svg
    className="arrow-svg"
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
const Doctors = () => {
  const settings = {
    className: "center slider-container",
    infinite: true,
    dots: true,
    centerPadding: "30px",
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: <CustomPrevArrow />,
    prevArrow: <CustomNextArrow />,
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
    responsive: [
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1126,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true
        }
      }
    ]
  };

  return (
    <div className="doctors-container">
      <div className="specialist">
        <h2 className="specialist-title">Meet Our Specialist</h2>
      </div>
      <Slider className="slider-container" {...settings}>
        {doctors.map((image) => (
          <div className="slider-image-container">
            <div key={image.id} className="image-slider">
              <img
                className="slider-image"
                src={image.image}
                alt={`Image ${image.id + 1}`}
              />
            </div>
            <p className="slider-name">{image.name}</p>
            <p className="slider-title">{image.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctors;
