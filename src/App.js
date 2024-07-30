
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Preloader from './components/Preloader';
import Footer from './components/Footer';





function App() {

  return (

     <Router>
     
      <div className="App"  >
        <Preloader/>
        <Navbar/>
     
        <Routes>
          <Route  path="/myportfolio" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio />} />
        

        </Routes>
        </div>




    </Router>
   
  );
}

export default App;
