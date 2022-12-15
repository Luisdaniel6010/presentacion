import React from "react";

import { ContPage } from '../../components/Main'
import { AreaReg } from './styled';

const Page = () =>{
   
    return(
        <ContPage>
          <AreaReg>
          <div class="card">
        <h2 class="textcard1"><strong>Comece agora gratís</strong></h2>
        <div class="card2">
            <p> Crie sua conta and start now!</p>
            <div>
                <form action="" class="formulario">
                <div>
                    <input type="text" placeholder="Nome Completo" class="inputs required" oninput="nomeValidate()"/>
                    <span id="spam" class="span-required"></span>
                </div>
                <div>
                    <input type="email" placeholder="Seu melhor @email" class="inputs required" required oninput="emailValidate()"/>
                    <span id="spam" class="span-required"></span>
                </div>  
                <div>  
                    <input type="number" placeholder=" Celular ex: 11-9222-2222" class="inputs required" required oninput="nuValidate()"/>
                    <span  id="spam" class="span-required"></span>
                </div>    

                    <input type="password" name="senha" id="senha" placeholder="Senha"/>
                </form>
                <a href="catalogo.html" ><button class="boton2">Criar minha conta gratís</button></a>
            </div>
        </div>
</div> 



          
          </AreaReg>
        </ContPage>
  
      );


}

export default Page;