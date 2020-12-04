import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import * as parkDate from "../Map/data/skateboard-parks.json";

const ParkingPopup = (props) => {
  const { selectedPark } = props;
  console.log({ selectedPark })

  return (

    < div className="popupContainer" >
      <div className="popupImg">
        <img src={selectedPark.properties.IMG} />
      </div>
      <div className="popupContent">
        <p className="parkingName">{selectedPark.properties.NAME}</p>
        <br></br>
        <p className="availablePlaces">{selectedPark.properties.availablePlaces} <br></br> Parking</p>
        <Link>
          <img
            className="popupIcon"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828817.svg"
          />

        </Link>
      </div>
      <p className="price">5$ per hour</p>
    </div >
  );
};

export default ParkingPopup;
