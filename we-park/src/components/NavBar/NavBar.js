import React, { useState } from 'react';
import Sidebar from "react-sidebar";


const NavBar = (props) => {
    const [sidebarOpen,setSideBarOpen]=useState(false);
    const namesOfComponents=["History","Profile","Setting"]

   const onSetSidebarOpen = (open) => {
       setSideBarOpen(open)
   }
   const arrayComponents=(namesOfComponents)=>{
      
       
    return  <ul>
           {namesOfComponents.map((name,index)=>
          
               <li style={{listStyleType: 'none',backgroundColor:'white',padding:8,marginBottom:4,borderRadius:4}}>
               {name}
               </li>
           
           )}
       </ul>
   }
    return (  <Sidebar
        sidebar={arrayComponents(namesOfComponents)}
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "#41a6d1",display:'flex' , flexDirection:'column',padding:16} }}
      >
        <button onClick={() => setSideBarOpen(!sidebarOpen)}>
          Open sidebar
        </button>
      </Sidebar>);
}
 
export default NavBar;