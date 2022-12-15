import React from "react";

import { ContPage } from '../../components/Main'
import { AreaCata } from './styled';

const Page = () =>{
   
    return(
        <ContPage>
          <AreaCata>
          <div class="card">
        <h2 class="textcard1"><strong>Experiências desenvolvidas para você alcançar seu futuro</strong></h2>
        <div class="card2">
            <p>Escolha o curso que mais se adecue a você</p>
            <div class="card3">
                <fieldset name="Carreras">
                    <input type="text" class="iconoinplace" placeholder="Pesquisar"/>
                    <p>Carreiras</p>
                    <label>
                        <input type="checkbox" name="curso1"/> Carreira Web3 e IA
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Carreira Mobile
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Carreira Back-End
                    </label>
                    <hr></hr>
                    <p>Nível</p>
                    
                    <label>
                        <input type="checkbox" name="curso1"/> Iniciante
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Intermedio
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Avançado
                    </label>
                    <hr></hr>
                    <p>Tecnologia</p>
                    <label>
                        <input type="checkbox" name="curso1"/> .Net
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Agile
                    </label>
                    <label>
                        <input type="checkbox" name="curso1"/> Banco de Dados
                    </label>
            
                </fieldset>
            </div>
        </div>
    
</div> 
          
          </AreaCata>
        </ContPage>
  
      );


}

export default Page;