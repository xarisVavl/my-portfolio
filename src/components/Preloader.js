import "./animations.css"
import { ReactSVG } from "react-svg";
import { loadingIcon } from "../data/data";
const Preloader = () => {




  return ( 

    <div id="wrapper-animation" className="full-height-width  bg-danger">

 <div id="progress-animation" > <ReactSVG id="svg" src={loadingIcon} />   </div>
     </div>
   );
}
 
export default Preloader;