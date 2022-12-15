import React from "react";

import { ContPage } from '../../components/Main';
import { AreaCalen } from './styled';
import { Link } from 'react-router-dom'




const Page = () =>{
   
    return(
      <ContPage> 
        <AreaCalen>   
           <div className="cprincipal">
            <h2 class="textcard1"><strong>Hoje ainda mais perto do futuro!</strong></h2><br></br>
            <div class="card2">
                <p>Gostaria ajendar um horario para sua proxima aula?</p>
                <p> Preencha as informações e marque sua proxima aula de programação</p>
            </div>
          </div> 
          <nav>
            <ul>
                <li><Link to="/App1.js">Calendario</Link></li>
            </ul>
        </nav>        
          </AreaCalen>     
      </ContPage>

    );


}

export default Page;