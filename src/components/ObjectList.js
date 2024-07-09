import ticketinSystemImage from "../data/ticketing-system.png"
import storeImage from "../data/store.png"
import chessImage from "../data/chess-game.jpg"
import oldPortfolioImage from "../data/old-portfolio.png"
import newPortfolioImage from "../data/new-portfolio.png"
import eyeImage from "../data/eye-svgrepo-com.svg"
const Object = () => {
  const ObjectList = [
    {
      id:1,
      name:"Ticketing system",
      description:"I designed and developed a fault management system for my diploma project using PHP, Bootstrap CSS, and jQuery. The system utilizes AJAX for data fetching from the server and was built and tested using XAMPP.",
      img:ticketinSystemImage,
      linkSite:"",
      linkCode:""
      
    },
    {
      id:2,
      name:"E-shop",
      description:"A simple e-shop that fetches data from Fake store api.It is build in react and bootstrap css.I isnt a real shop but for me it was a good chance to learn about react props hooks and the philosophy of React.",
      img:storeImage,
      linkSite:"https://xarisvavl.github.io/store-react-main/",
      linkCode:"https://github.com/xarisVavl/store-react-main"
      
    },
    {
      id:3,
      name:"Chess-game",
      description:"Building a basic chess game using pure JavaScript was an enlightening experience in programming. Although it currently is not  optimized for playing, this project served as an excellent introduction to JavaScript programming.",
      img:chessImage,
      linkSite:"https://xarisvavl.github.io/chess_game/",
      linkCode:"https://github.com/xarisVavl/chess_game"
      
    }
    ,
    {
      id:4,
      name:"Old portfolio",
      description:"This was my first approach of creating a portfolio used pure css and javascript for this.",
      img:oldPortfolioImage,
      linkSite:"https://xarisvavl.github.io/mypersonalportfolio/",
      linkCode:"https://github.com/xarisVavl/mypersonalportfolio"
      
    }


  ]

  return ( 

    <>
    {ObjectList.map((object)=> (  
     <div className="card " key={object.id}>
     <div className="image overflow-hidden bg-white rounded-top">
       <img src={object.img} className="card-img-top object-fit-contain" alt=""/> 
       <h4 className="image-title d-flex align-items-center justify-content-center flex-column "><img className="eye"src ={eyeImage} alt =""></img></h4>
     </div>
        
     <div className="card-body">
       <h5 className="card-title">{object.name}</h5>
       <p className="card-text">{object.description}</p>
       <div className="d-flex justify-content-center">
         <a href={object.linkSite} className="btn btn-warning m-2" target="blank">Visit site</a>
         <a href={object.linkCode} className="btn btn-secondary m-2" target="blank">Visit code</a>
       </div>
     </div>
   </div>))}
    
    
    
    </>
   );
}
 
export default Object;