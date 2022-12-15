import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Routers, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import Registro from './pages/Registro';

function App1() {
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

export default App1;