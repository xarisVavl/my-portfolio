import { Container } from '@mui/material';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Navbar from './pages/Navbar';


function App() {
  return (
     <Router>
      <div className="App">
        <Navbar/>
     
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes>
        </div>



   
    </Router>
  );
}

export default App;
