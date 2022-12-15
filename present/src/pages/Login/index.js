import React from "react";

import { ContPage } from '../../components/Main'
import { AreaLogin } from './styled';

const Page = () =>{
   
    return(
        <ContPage>
          <AreaLogin>

<div class="card">
        <h2 class="textcard1"><strong>Uma plataforma onde você podera aprender com experts, 
            no real time e dominar as principais e mais diversas tecnologias além de poder
            entrar mais rápido nas empresas mais desejadas.</strong>
        </h2>
</div>

<div class="card2">
  <form action="">

    <input type="email" name="usuario" id="usuario" placeholder="E-mail/Usuario"/><br></br>
    <input type="password" name="password" id="contrasena" placeholder="Password"/><br></br>

    <button class="boton2"><span>Entrar</span></button><br></br>
    <button class="boton2"><span>Esqueçeu a senha</span></button><br></br>
    <button class="boton2"><span>Criar Conta</span></button><br></br>

  </form>
</div>

          </AreaLogin>          
        </ContPage>
  
      );


}

export default Page;