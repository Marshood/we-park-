import React, { Component } from "react";
import { render } from "react-dom";
import useCountDown from "react-countdown-hook";

const Timer = (props) => {
    const [timeLeft, actions] = useCountDown(150000, 1000);
    const buttonStyle = { marginRight: "10px" };
    return (
      <div style={{ textAlign: "center" }}>
        <h1 id="time-left">{(timeLeft / 1000)}</h1>
        <button id="start" style={buttonStyle} onClick={() => actions.start()}>
          Reserve
        </button>
  
     
      </div>
    ); 
}
 
export default Timer;