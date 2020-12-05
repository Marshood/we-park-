import React,{useState} from 'react';
import {
    useLocation,
    useHistory,
} from "react-router-dom";
import TimerUp from "../Timer/TimerUp";

import "./style.css";

const Reservation = () => {

    const [isCharging,setIsCharging] =useState(false);
    let location =useLocation();
    let history =useHistory();

   const convertTimestamp =()=>{
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date();
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    
    // Will display time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
   }

   const handleLeave =()=>{
    setIsCharging(true);
    setTimeout(()=>{
        history.push("/home")
    },2000)
   }

   if(!location.state) return <div style={{ fontSize: 30 }}> No reservation yet</div>

    return <div className="reservationContainer">
         

                <div className="startTime">
                    <span className="startHour"> Start Hour -  </span>
                    <span  className="hour"> {convertTimestamp()} </span>
                </div>

                <div className="reservationCounter">
                    <span>Duration: </span>
            <       TimerUp/>
                </div>
                <div className="reservationButton">
                    <button className="button" onClick={handleLeave} >Leave</button>
                </div>
                {isCharging && <div className="message">
                    Proccessing Payment...
                </div>}
            </div>
            ;
}
 
export default Reservation;