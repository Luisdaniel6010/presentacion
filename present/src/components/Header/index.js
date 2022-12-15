
import React from "react";

import { AreaHeader } from './styled';
import { Link } from 'react-router-dom'

function Header() {
    return(
    <AreaHeader>
 <div className="conteiner">
     
 <div className="logo">
        <img src="../../../laptop.svg"/>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Catalogo">Catalogo</Link></li>
                <li><Link to="/Registro">Registro</Link></li>
            </ul>
        </nav>
    

       </div>

    </AreaHeader>
    );
}

export default Header;