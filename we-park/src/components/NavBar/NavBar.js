import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "react-sidebar";
import "./style.css";

const NavBar = (props) => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const namesOfComponents = ["Profile", "History", "Setting"];

  const onSetSidebarOpen = (open) => {
    setSideBarOpen(open);
  };
  const arrayComponents = (namesOfComponents) => {
    return (
      <ul>
        {namesOfComponents.map((name, index) => (
          <li className="listItem"> <Link to={name}>{name}</Link></li>
        ))}
      </ul>
    );
  };

  return (
    <Sidebar
      sidebar={arrayComponents(namesOfComponents)}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{
        sidebar: {
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: 16,
          width: "40%",
          marginTop:8,
         
        },
      }}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBk344NpmmYG9OUrzk3wJReRsuBxonl-16w&usqp=CAU"
        onClick={() => setSideBarOpen(true)}
      />
    </Sidebar>
  );
};

export default NavBar;
