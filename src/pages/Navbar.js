import { Link } from "react-router-dom";
import "./Home.css"
import React, { useEffect,useState } from 'react';

import LightMode from "../components/LightMode";
import NightMode from "../components/NightMode"



const Navbar = () => {
  const [enabled, setEnabled] = useState(false);



   



const toggleDarkMode = () => {
if (!enabled) {  
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  setEnabled(true);
  
}

else {
  document.documentElement.setAttribute('data-bs-theme', 'light');
  setEnabled(false)
}



}

  return (
    
   
<nav className="d-flex align-items-center justify-content-evenly border-bottom p-2 m-2">
  <div className="name fs-3">Charis Vavliaras</div>
<ul className="nav nav-underline nav-fill align-items-center">

  <li className="nav-item">
    <Link to="/myportfolio" className="nav-link ">Home</Link>
  </li>
  <li className="nav-item">
  <Link to="/portfolio" className="nav-link">Portfolio</Link>
  </li>
  <li><button onClick={()=>toggleDarkMode()} >{!enabled &&<NightMode/> || enabled && <LightMode/>} </button></li>

</ul>
  
  

  

  
  
  </nav> );
}
 
export default Navbar;