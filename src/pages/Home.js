
import Footer from "../components/Footer";
import {reactIcon,jsIcon,cssIcon,htmlIcon,phpIcon,bootStrapIcon,mySqlIcon,gitHubIcon,jQueryIcon,cvLink} 
from "../data/data";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function Home () {
  const comp = useRef(null);



  useGSAP(() => {
    const tl = gsap.timeline();
  
    const mm = gsap.matchMedia();
  
    mm.add("(min-width: 768px)", () => {
      // Animations for desktop
      tl.from (".resume-link,.skills", {
        scale:0
      })
      tl.from (".grid-img",{
        scale:0,
        ease: "power1.inOut",
        stagger: {
          grid: [3,3],
          from: "end",
          amount:1,
        }
      })
      .from(".flex-container1", {
        xPercent: -200,
   
      })
      .from(".header, .about-me-par", {
       opacity:0,
       scale:0,
      })
    });

    mm.add("(max-width: 768px)", () => {
   
      gsap.registerPlugin(ScrollTrigger) 
      gsap.from(".grid-img", {
           scrollTrigger: {
            trigger:".images-container",
             start: 'bottom bottom',
             markers: true
           },
           
          
         
            scale:0,
            ease: "power1.inOut",
            stagger: {
              grid: [3,3],
              from: "end",
              amount:1,
            }
    });
  
    gsap.from(".resume-link,.skills", {
      scrollTrigger: {
                trigger:".images-container",
             
            
               },
      
      scaleY:0,
    
     })

    });



  
  }, { scope: comp });
  

  return ( 

<div  ref ={comp}className="wrapper d-flex  align-items-center flex-column m-4" >

<div  className="main-content d-flex flex-column p-5  position-relative ">

  <div  className="about-me  mb-5 ">
  <h1  className="header ">About me.</h1>
    <p className=" about-me-par fs-5">I'm a web developer  with a passion for creating beautiful, functional websites. With a background in Electrical and Computer Engineering, i have a strong technical foundation and a talent for problem-solving. Ι also love learning about new technologies and improving my skills day by day.</p>

  </div> 

  <div className="contact  d-flex flex-fill flex-wrap justify-content-start ">
    <div className=" flex-container1 flex-grow-1 mt-5 mb-5">
      <h6>Contact </h6>
      <p className="social-paragraph">You can find me on <a href="https://linkedin.com/in/charis-vavliaras-7baa56315" target="_blank" >Linkedin</a> or by 
      <a href="mailto:xarisvavliaras@icloud.com" target="_blank"> email</a> </p>
     
      <h6>Social links</h6>
      
      <ul className="list-group">
      
        <li><a href="https://github.com/xarisVavl" target="blank"> &rarr; Github</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100008211315378 " target="_blank"> &rarr; Facebook</a></li>
      </ul>
    </div>

<div className="flex-grow-1 flex-container2">
  <div className="skills d-flex  align-items-center mb-5 mt-5 gap-4 ">
    <div id="skills"className="expertise  p-1 rounded">
      <div   className=" skills fs-3">Skills</div>
  
    </div>
    <a href={cvLink} target="_blank" className="resume-link fs-5">Open resume</a>
  </div>

  <div className="images-container  container  mb-5 ">
    <img className="grid-img" src={htmlIcon} alt="" />
    <img className="grid-img" src={jsIcon} alt="" />
    <img className="grid-img" src={cssIcon} alt="" />
    <img className="grid-img" src={phpIcon} alt="" />
    <img className="grid-img" src={bootStrapIcon} alt="" />
    <img className="grid-img" src={mySqlIcon} alt="" />
    <img className="grid-img" src={gitHubIcon} alt="" />
    <img className="grid-img" src={reactIcon} alt="" />
    <img  className="grid-img" src={jQueryIcon} alt="" />
  </div>


</div>
  </div>

  
</div>
<Footer/>
</div>

   );
}
 
export default Home;