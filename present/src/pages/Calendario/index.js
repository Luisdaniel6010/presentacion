import React from "react";

import { ContPage } from '../../components/Main';
import { AreaCalen } from './styled';

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
          </AreaCalen>     
      </ContPage>

    );


}

export default Page;