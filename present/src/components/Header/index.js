
import React from "react";

import { AreaHeader } from './styled';

function Header() {
    return(
    <AreaHeader>
 <div className="conteiner">
     
 <div className="logo">
        <img src="../../../laptop.svg"/>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Login</li>
                <li>Catalogo</li>
                <li>Registrar</li>
            </ul>
        </nav>
    

       </div>

    </AreaHeader>
    );
}

export default Header;