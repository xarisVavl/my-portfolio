import "./Portfolio.css"

import ObjectList from "../components/ObjectList"
import Footer from "../components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";


const Portfolio = () => {

  
  

    const comp = useRef(null)
  
  
    useGSAP(()=> {

      gsap.from(".card",{
        xPercent:-500,
        
        duration:1,
        stagger: {
          each: 0.1,
          from: 'end',
        }
      })
  
  
  
  console.log(comp)
  
        
    }, { scope: comp });


  return ( 


<div ref={comp} className="d-flex align-items-center flex-column">

    <div className="container-wrapper d-flex justify-content-center flex-wrap gap-4 m-5 ">
   
<ObjectList/>



    </div>
    <Footer/>
    </div>
   );
}
 
export default Portfolio;