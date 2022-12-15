import React from "react";

import { ContPage } from '../../components/Main'
import { AreaHome } from './styled';

const Page = () =>{
   
    return(
      <ContPage> 
        <AreaHome>   
           <div className="cprincipal">
            <h2 class="textcard1"><strong>A sua vida pode mudar agora!</strong></h2><br></br>
            <div class="card2">
                <p>Gostaria se tornar o proximo programador?</p>
                <p> Domine as tecnologias utilizadas pelas 
                    empresas mais inovadoras do mundo e encare seu novo desafio profissional, 
                    evoluindo em comunidade com os melhores experts.
                </p>
            </div>
          </div>  
          </AreaHome>     
      </ContPage>

    );


}

export default Page;