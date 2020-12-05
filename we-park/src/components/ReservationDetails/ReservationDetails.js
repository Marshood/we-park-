import React, { useState } from "react";
import CountDown from "countdown-react-component";
import "./ReservationDetails.css";
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";

const ReservationDetails = (props) => {
  const [startCounter, setStartCounter] = useState(false);
  const [run, setRun] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [hours, setHours] = useState(0);
  let location = useLocation();
  let history = useHistory();

  const handleCancel = () => {
    setRun(false);
    history.push("/home");
  };

  const handleArrive = () => {
    history.push({
      pathname: "/reservation",
      state: {
        time: Date.now(),
      },
    });
  };

  if (!location.state) {
    return <div style={{ fontSize: 30 }}> No reservation yet</div>;
  }
  return (
    <div className="resContainer">
      <div>
        <img src={location.state.properties.IMG} />
      </div>
      <div className="resDetails">
        <p className="resName">{location.state.properties.NAME_FR}</p>
        <p className="resPrice">20&#8362; /hour</p>
      </div>
      <div className="resCounter">
        <CountDown
          s={seconds}
          m={minutes}
          h={hours}
          run={run}
          setRun={setRun}
        />
      </div>
      <div className="resButtons">
        <button className="button" onClick={(e) => setRun(true)}>
          Reserve
        </button>
        <button className="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>

      <button className="button" onClick={handleArrive}>
        Arrived
      </button>
    </div>
  );
};

export default ReservationDetails;
