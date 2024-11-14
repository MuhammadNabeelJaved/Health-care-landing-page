import React from "react";
import "./servcies.css";
import Inputs from "./Inputs";
import search from "../../assets/search.svg";
import location from "../../assets/location.svg";

const Servcies = () => {
  return (
    <>
      <div className="servcies-container">
        <div className="inputs">
          <Inputs
            type="search"
            icon={search}
            placeholder="Search Doctor, Hospital, or anything"
          />
          <div className="seacrh-input">
            <Inputs
              type="search"
              icon={location}
              placeholder="Set your location"
            />
            <div className="search-icon">
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
                  d="M10.4 5.2001C7.52808 5.2001 5.19997 7.52822 5.19997 10.4001C5.19997 13.272 7.52808 15.6001 10.4 15.6001C13.2718 15.6001 15.5999 13.272 15.5999 10.4001C15.5999 7.52822 13.2718 5.2001 10.4 5.2001ZM2.59998 10.4001C2.59998 6.09228 6.09214 2.6001 10.4 2.6001C14.7078 2.6001 18.1999 6.09228 18.1999 10.4001C18.1999 12.0847 17.6659 13.6445 16.7579 14.9196L23.0192 21.1809C23.5268 21.6885 23.5268 22.5117 23.0192 23.0193C22.5115 23.527 21.6884 23.527 21.1807 23.0193L14.9194 16.7581C13.6444 17.6661 12.0845 18.2001 10.4 18.2001C6.09214 18.2001 2.59998 14.7079 2.59998 10.4001Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="title-and-see">
          <p className="main-title">You may be looking for</p>
          <div className="see-more">
            <p className="see-more-text">See more</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L13.7071 14.7071C13.3166 15.0976 12.6834 15.0976 12.2929 14.7071C11.9024 14.3166 11.9024 13.6834 12.2929 13.2929L14.5858 11H3C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
                fill="#2AA8FF"
              />
            </svg>
          </div>
        </div>
        <div className="servcies"></div>
      </div>
    </>
  );
};

export default Servcies;
