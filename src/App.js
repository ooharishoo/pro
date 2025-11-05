import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login'
import Homepage from './Homepage';


function App() {
  return (
    <div>
      <Router>
      <Routes>
      
     <Route path ='/loginpage' element ={<Login/>}/>
     <Route path ='/Homepage1' element ={<Homepage/>}/>
     <Route path ='/homepage' element ={<Home/>}/>
     
    </Routes>
    </Router>
    </div>
  );
}

export default App;
