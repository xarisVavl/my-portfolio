import Footer from "../components/Footer";
import {reactIcon,jsIcon,cssIcon,htmlIcon,phpIcon,bootStrapIcon,mySqlIcon,gitHubIcon,jQueryIcon,cvLink} 
from "../data/data";


const Home = () => {

  

  return ( 

<div className="wrapper d-flex  align-items-center flex-column " >
<div className="main-content d-flex flex-column p-4 m-3 ">
  
  <div className="about-me  mb-5 mt-5">
    <h1 >About me.</h1>
    <p>I'm a web developer from Kozani, Greece, with a passion for creating beautiful, functional websites. My background in Electrical and Computer Engineering gives me a solid technical foundation and a knack for problem-solving i also love learning about new technologies and improving my skills day by day.</p>

  </div> 

  <div className="contact  d-flex flex-fill flex-wrap justify-content-start ">
    <div className="  flex-grow-1 mt-5 mb-5">
      <h6>Contact </h6>
      <p className="social-paragraph">You can find me on <a href="https://linkedin.com/in/charis-vavliaras-7baa56315" target="_blank" >Linkedin</a> or by 
      <a href="mailto:xarisvavliaras@icloud.com" target="_blank"> email</a> </p>
     
      <h6>Social links</h6>
      
      <ul className="list-group">
      
        <li><a href="https://github.com/xarisVavl" target="blank"> &rarr; Github</a></li>
        <li><a href="https://www.facebook.com/profile.php?id=100008211315378 " target="_blank"> &rarr; Facebook</a></li>
      </ul>
    </div>

<div className="flex-grow-1 ">
  <div className="d-flex  align-items-center mb-5 mt-5 gap-4 ">
    <div className="expertise  p-1 rounded">
      <div  className="fs-3">Stack technologies</div>
  
    </div>
    <a href={cvLink} target="_blank" className="resume-link fs-5">Open resume</a>
  </div>

  <div className="images-container  container  mb-5 ">
    <img src={htmlIcon} alt="" />
    <img src={jsIcon} alt="" />
    <img src={cssIcon} alt="" />
    <img src={phpIcon} alt="" />
    <img src={bootStrapIcon} alt="" />
    <img src={mySqlIcon} alt="" />
    <img src={gitHubIcon} alt="" />
    <img src={reactIcon} alt="" />
    <img src={jQueryIcon} alt="" />
  </div>


</div>
  </div>

  
</div>
<Footer/>
</div>

   );
}
 
export default Home;