import React from 'react';
import ParkingPopUp from "../ParkingPopup/index";
import * as parkDate from "../Map/data/skateboard-parks.json";


const Reservation = (props) => {
    const { selectedPark } = props; 
    return ( <div>
   {/* <ParkingPopup selectedPark={selectedPark} /> */}
    </div> );
}
 
export default Reservation;