import React, { useState } from 'react';
import ParkingPopUp from "../ParkingPopup/index";
import * as parkDate from "../Map/data/skateboard-parks.json";


import ParkingPopup from '../ParkingPopup/index';
import { Link, useLocation } from "react-router-dom";

const Reservation = (props) => {
    let location = useLocation();

    const { state } = props;
    const [value, onChange] = useState('10:00');
    console.log("selectedPark", location)
    return (<div style={{  position: "absolute" 
    ,textAlign: "center" ,padding:"80px"
 }}>


{/* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center; */}

        <ParkingPopup selectedPark={location.state} />

    </div>
    );

}



export default Reservation;