import React from 'react';
import {
    useLocation,
    useHistory,
  } from "react-router-dom";

const Reservation = () => {

    let location =useLocation();
    console.log(location);
    if (!location.state) {
        return <div style={{ fontSize: 30 }}> No reservation yet</div>;
      }
    return <h1>Reservation</h1>;
}
 
export default Reservation;