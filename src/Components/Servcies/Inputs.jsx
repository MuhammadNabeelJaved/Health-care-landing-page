import React from "react";
import "./services.css";

const Inputs = ({ type, placeholder, icon }) => {
  return (
    <>
      <div>
        <img className="input-search-icon" src={icon} alt="" />
        <input
          className="input"
          type={type}
          name=""
          id=""
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Inputs;
