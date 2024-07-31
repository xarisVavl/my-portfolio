
import Footer from "../components/Footer";
import {reactIcon,jsIcon,cssIcon,htmlIcon,phpIcon,bootStrapIcon,mySqlIcon,gitHubIcon,jQueryIcon,cvLink,tailwindImage} 
from "../data/data";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from "../components/contact/Contact";


function Home () {
  const comp = useRef(null);



  // useGSAP(() => {
  //   const tl = gsap.timeline();
  
  //   const mm = gsap.matchMedia();
  
  //   mm.add("(min-width: 768px)", () => {
  //     // Animations for desktop
  //     tl.from (".resume-link,.skills", {
  //       scale:0
  //     })
  //     tl.from (".grid-img",{
  //       scale:0,
  //       ease: "power1.inOut",
  //       stagger: {
  //         grid: [3,3],
  //         from: "end",
  //         amount:1,
  //       }
  //     })
  //     .from(".flex-container1", {
  //       xPercent: -200,
   
  //     })
  //     .from(".header, .about-me-par", {
  //      opacity:0,
  //      scale:0,
  //     })
  //   });

  


  
  // }, { scope: comp });
  

  return ( 
<div>
<div  ref ={comp}className="wrapper d-flex  align-items-center flex-column m-4" >

<div  className="main-content d-flex flex-column p-5  position-relative mb-5">

  <div  className="about-me  mb-5 ">
  <h1  className="header ">About me.</h1>
    <p className=" about-me-par fs-5">I'm a web developer with a solid foundation in PHP, JavaScript, HTML, and CSS. I am enthusiastic about expanding my programming skills and am always eager to take on new challenges and opportunities for growth.</p>

  </div> 

  <div className="contact  d-flex flex-fill flex-wrap justify-content-start ">
    <div className=" flex-container1 flex-grow-1 mt-5 mb-5">
      <h6>Contact </h6>
      <p className="social-paragraph">You can find me on <a href="https://linkedin.com/in/charis-vavliaras-7baa56315" target="_blank" >Linkedin</a> or by 
      <a href="mailto:xarisvavliaras@icloud.com" target="_blank"> email.</a> </p>
     
      <h6>Social links</h6>
      
      <ul className="list-group">
      
        <li><a href="https://github.com/xarisVavl" target="blank"> &rarr; Github</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100008211315378 " target="_blank"> &rarr; Facebook</a></li>
      </ul>
    </div>

<div className="flex-grow-1 flex-container2">
  <div className="skills d-flex  align-items-center mb-5 mt-5 gap-4 ">
    <div id="skills"className="expertise  p-1 rounded fs-3">
      Skills
  
    </div>
    <a href={cvLink} target="_blank" className="resume-link fs-5">Open resume</a>
  </div>

  <div className="images-container  container  mb-5 ">
  
    <img className="grid-img" src={jsIcon} alt="icon" />
    <img className="grid-img" src={reactIcon} alt="icon" />
    <img  className="grid-img" src={jQueryIcon} alt="icon" />
    <img className="grid-img" src={phpIcon} alt="icon" />
    <img className="grid-img" src={mySqlIcon} alt="icon" />
    <img className="grid-img" src={bootStrapIcon} alt="icon" />
    <img  className="grid-img" src={tailwindImage} alt="image" />
    <img className="grid-img" src={gitHubIcon} alt="icon" />
    <img className="grid-img" src={htmlIcon} alt="icon" />
    <img className="grid-img" src={cssIcon} alt="icon" />
    
   
    
    
  </div>


</div>
  </div>

  
</div>


</div>
<Contact/>
<Footer/>
</div>





   );
}
 
export default Home;