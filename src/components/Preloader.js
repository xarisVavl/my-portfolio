import "./animations.css"
import { ReactSVG } from "react-svg";
import loading from "../data/loading.svg"
const Preloader = () => {




  return ( 

    <div id="wrapper-animation" className="full-height-width  bg-danger">

 <div id="progress-animation" > <ReactSVG id="svg" src={loading} />   </div>
     </div>
   );
}
 
export default Preloader;