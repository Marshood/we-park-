import React, { useState } from "react";

import Countdown from "react-countdown";
import timerCount from "./Timer.css"

// Random component
const Completionist = () => <span>You Time is OUT</span>;

// Renderer callback with condition
const renderer = ({ minutes, seconds, completed,autoStart}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div >
      <div className="timerCount">
       {minutes}:{seconds}
      </div>
      </div>
    );
  }
};


const Timer = (props) => {
  
  return (
  <div>
  <Countdown date={Date.now() + 900000} autoStart={true} renderer={renderer}  />
  <button className="button">  Cancel</button>
  </div>
  );
}
 
export default Timer;