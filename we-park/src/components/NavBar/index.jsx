import React from "react";
import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/homeIcon.png"
import profileIcon from "../../assets/profileIcon.png"
import reserveIcon from "../../assets/reserveIcon.png"
import settingsIcon from "../../assets/settingsIcon.png"
import "./style.css";

const NavBar =()=> {
  return (
    
      <nav id="navbar">
        <div className="nav-items">
          <NavLink exact className="inactive" activeClassName="active" to="/">
          <img src={homeIcon}/>
          </NavLink>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/profile"
              >
                <img src={profileIcon}/>
              </NavLink>

              <NavLink
                exact
                className="inactive"
                activeClassName="active"
                to="/Reservation"
              >
                    <img src={reserveIcon}/>
              </NavLink>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/settings"
              >
                   <img src={settingsIcon}/>
              </NavLink>      
        </div>
      </nav>
  );
}

export default NavBar;