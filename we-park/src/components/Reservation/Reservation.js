import React, { useState } from 'react';
import ParkingPopUp from "../ParkingPopup/index";
import * as parkDate from "../Map/data/skateboard-parks.json";
import navigate from '../../assets/navigate.svg'
import ParkingPopup from '../ParkingPopup/index';
import './Reservation.css'
import {
    BrowserRouter as Router,
    useLocation,
    Link,
    useHistory,
} from "react-router-dom";
const Reservation = (props) => {
    let location = useLocation();
    let history = useHistory();

    const { state } = props;
    const [value, onChange] = useState('10:00');
    console.log("selectedPark", location)
    return (<div style={{
        position: "absolute"
        , textAlign: "center", padding: "80px"
    }}>
        
        <ParkingPopup selectedPark={location.state} />
        <div>
        <img style={{width:"10vw",margin:"20px",marginTop:"30px"}}  src={navigate}></img>
        </div>
         <Link  to={{
            pathname: "/Timer",
        }}
        >
            <button className="button">  Reserved</button>
        </Link>
        <button className="button" onClick={() => {
            history.push("/Example")

        }}>Back</button>
    </div>
    );

}



export default Reservation;