import React from 'react';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom'

import './home.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import Registro from './pages/Registro';




function App() {
  return (
    
    <Router>
    <Routers>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalogo' element={<Catalogo/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registro' element={<Registro/>}/>
    </Routers>
    </Router>
   
  );
}

export default App;
