import React from "react";
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Catalogo from './pages/Catalogo';
import Registro from './pages/Registro';

export default () => {
     
    return(
        <Routes>

            <Route exact path="./pages/Home" element={<Home/>}></Route>

            <Route exact path="">
               <Login />
            </Route>

            <Route exact path="/">
               <Catalogo />
            </Route>

            <Route exact path="/">
               <Registro />
            </Route>

        </Routes>
    );
}