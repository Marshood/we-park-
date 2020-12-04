import React, { useState }  from 'react';
import ParkingPopUp from "../ParkingPopup/index";
import * as parkDate from "../Map/data/skateboard-parks.json";

import TimePicker from "../TimePicker/TimePicker"
import ParkingPopup from '../ParkingPopup/index';


const Reservation = (props) => {
    const { selectedPark } = props; 
    const [value, onChange] = useState('10:00');

    return  (<div>
        console.log(hiii);
       { alert("hehehe")}
   <ParkingPopup selectedPark={selectedPark} />
  <TimePicker/>
      </div>
    );
    
}


 
export default Reservation;