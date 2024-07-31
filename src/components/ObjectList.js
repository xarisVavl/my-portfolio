import { ticketinSystemImage,chessImage,oldPortfolioImage,storeImage,eyeIcon } from "../data/data"





const Object = () => {
  const ObjectList = [
    {
      id:1,
      name:"Ticketing system",
      description:"I designed and developed a fault management system for my diploma project using PHP, Bootstrap CSS, and jQuery. The system utilizes AJAX for data fetching from the server and was built and tested using XAMPP. Unfortunately, the site is not accessible because GitHub Pages does not support hosting PHP projects.",
      img:ticketinSystemImage,
      linkSite:"",
      linkCode:"https://github.com/xarisVavl/ticketing_system",
      button: "disabled"
      
    },
    {
      id:2,
      name:"E-shop",
      description:"A simple e-shop that fetches data from Fake store api.It is build in react and bootstrap css. This project  was a good chance for me to learn about  props, hooks and the philosophy of Reactive programming.",
      img:storeImage,
      linkSite:"https://xarisvavl.github.io/store-react-main/",
      linkCode:"https://github.com/xarisVavl/store-react-main",
      button: ""

      
      
    },
    {
      id:3,
      name:"Chess-game",
      description:"Building a basic chess game using pure JavaScript was an enlightening experience in programming. Although it currently is not  optimized for playing, this project served as an excellent introduction to JavaScript programming and object oriented programming.",
      img:chessImage,
      linkSite:"https://xarisvavl.github.io/chess_game/",
      linkCode:"https://github.com/xarisVavl/chess_game",
      button: ""
      
    }
    ,
    {
      id:4,
      name:"Old portfolio",
      description:"This was my first attempt at creating a portfolio, using only pure CSS and JavaScript. I have since replaced it with what you see now.",
      img:oldPortfolioImage,
      linkSite:"https://xarisvavl.github.io/mypersonalportfolio/",
      linkCode:"https://github.com/xarisVavl/mypersonalportfolio",
      button: ""
      
    }
    



  ]

  return ( 

    <>
    {ObjectList.map((object)=> (  
     <div className="card " key={object.id}>
     <div className="image overflow-hidden bg-white rounded-top">
       <img src={object.img} className="card-img-top object-fit-contain" alt=""/> 
       <h4 className="image-effect d-flex align-items-center justify-content-center flex-column "><img className="eye"src ={eyeIcon} alt =""></img></h4>
     </div>
        
     <div className="card-body d-flex flex-column ">
       <h5 className="card-title">{object.name}</h5>
       <p className="card-text flex-fill">{object.description}</p>
       <div className="d-flex justify-content-center">
         <a href={object.linkSite} className={`btn btn-warning m-2 ${object.button}`} target="blank" disabled>Visit site</a>
         <a href={object.linkCode} className="btn btn-secondary m-2" target="blank">Visit code</a>
       </div>
     </div>
   </div>))}
    
    
    
    </>
   );
}
 
export default Object;