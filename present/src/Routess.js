import React from "react";
import { BrowserRouter as Router, Route, Link, NavLink, Routes  } from "react-router-dom";


import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import Registro from './pages/Registro';
import Calendario from './pages/Calendario';

export default () => {
     
    return(
        <Routes>

            <Route exact path="/" element={<Home />}>
              
            </Route>

            <Route exact path="/Login" element={<Login />}>
               
            </Route>

            <Route exact path="/Catalogo" element={<Catalogo />}>
             
            </Route>

            <Route exact path="/Registro" element={<Registro />}>
             
            </Route>

            <Route exact path="/Calendario" element={<Calendario />}>
             
             </Route>

        </Routes>
    );
}