import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const NavBar =()=> {
  return (
    
      <nav id="navbar">
        <div className="nav-items">
          <NavLink exact className="inactive" activeClassName="active" to="/">
           Home
          </NavLink>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/profile"
              >
                Profile
              </NavLink>

              <NavLink
                exact
                className="inactive"
                activeClassName="active"
                to="/history"
              >
                History
              </NavLink>
              <NavLink
                className="inactive"
                exact
                activeClassName="active"
                to="/settings"
              >
               Settings
              </NavLink>      
        </div>
      </nav>
  );
}

export default NavBar;