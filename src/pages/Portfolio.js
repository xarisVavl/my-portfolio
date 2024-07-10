import "./Portfolio.css"

import ObjectList from "../components/ObjectList"
import Footer from "../components/Footer";
const Portfolio = () => {
  return ( 


<div className="d-flex align-items-center flex-column">

    <div className="container-wrapper d-flex justify-content-center flex-wrap gap-4 m-5 ">
   
<ObjectList/>



    </div>
    <Footer/>
    </div>
   );
}
 
export default Portfolio;