import React from "react";
import "./services.css";

const Inputs = ({ type, placeholder, icon, id }) => {
  return (
    <>
      <div>
        <img className="input-search-icon" id={id} src={icon} alt="" />
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
