import { Link } from "react-router-dom";
import "./Home.css"
const Navbar = () => {
  return (
    
   
<nav className="d-flex align-items-center justify-content-evenly border-bottom p-2 m-2">
  <div className="name ">Charis Vavliaras</div>
<ul className="nav nav-underline nav-fill">

  <li className="nav-item">
    <Link to="/" className="nav-link ">Home</Link>
  </li>
  <li className="nav-item">
  <Link to="/portfolio" className="nav-link">Portfolio</Link>
  </li>

</ul>
  
  

  

  
  
  </nav> );
}
 
export default Navbar;