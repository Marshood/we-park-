import React, { useState } from 'react';
import ParkingPopUp from "../ParkingPopup/index";
import * as parkDate from "../Map/data/skateboard-parks.json";

import TimePicker from "../TimePicker/TimePicker"
import ParkingPopup from '../ParkingPopup/index';
import {Link, useLocation} from "react-router-dom";

const Reservation = (props) => {
    let location = useLocation();

    const {state} = props;
    const [value, onChange] = useState('10:00');
    console.log("selectedPark", location)
    return (<div>
         <ParkingPopup selectedPark={location.state} />
  <TimePicker/>
    </div>
    );

}



export default Reservation;