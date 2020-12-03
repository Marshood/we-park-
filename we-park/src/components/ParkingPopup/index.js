import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ParkingPopup = (props) => {
  return (
    <div className="popupContainer">
      <div className="popupImg">
        <img src="https://www.pango.co.il/filestock/file/1491725924177-0.jpg" />
      </div>
      <div className="popupContent">
        <p className="parkingName">Parking Name</p>
        <p className="availablePlaces">3 Parking</p>
        <Link>
          <img
            className="popupIcon"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg"
          />
        </Link>
      </div>
      <p className="price">5$ per hour</p>
    </div>
  );
};

export default ParkingPopup;
