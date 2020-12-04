import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You Time is OUT</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
       {minutes}:{seconds}
      </span>
    );
  }
};


const Timer = (props) => {
  return ( <Countdown date={Date.now() + 900000} renderer={renderer} /> );
}
 
export default Timer;