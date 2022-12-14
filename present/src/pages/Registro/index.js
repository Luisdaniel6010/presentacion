function Registro () {

    return(
        <body>

    <header>
        <div class="content">
        <a href="home.html"><button class="boton"><span>Home</span></button></a>
        <a href="catalogo.html"><button class="boton"><span>Catalogo</span></button></a>
        <a href="login.html"><button class="boton"><span>Entrar</span></button></a>
        <button class="boton"><span>Cadastrar</span></button>
        </div>
    </header>

<main class="cprincipal">

<div class="card">
        <h2 class="textcard1"><strong>Comece agora gratís</strong></h2><br></br>
        <div class="card2">
            <p> Crie sua conta and start now!</p>
            <div>
                <form action="" class="formulario">
                <div>
                    <input type="text" placeholder="Nome Completo" class="inputs required" oninput="nomeValidate()"/><br></br>
                    <span id="spam" class="span-required"></span>
                </div>
                <div>
                    <input type="email" placeholder="Seu melhor @email" class="inputs required" required oninput="emailValidate()"/><br></br>
                    <span id="spam" class="span-required"></span>
                </div>  
                <div>  
                    <input type="number" placeholder=" Celular ex: 11-9222-2222" class="inputs required" required oninput="nuValidate()"/><br></br>
                    <span  id="spam" class="span-required"></span>
                </div>    

                    <input type="password" name="senha" id="senha" placeholder="Senha"/><br></br>
                </form>
                <a href="catalogo.html" ><button class="boton2">Criar minha conta gratís</button></a>
            </div>
        </div>
</div> 

</main>

 <footer class="pie">
    <div>
        <h2>Programas de Apoio</h2><br></br>
        <img src={require('./html/imagenes/logo1.jpg' )}alt="logo1" className='logos'/>
            <img src={require('./html/imagenes/logo2.jpg' )}alt="logo1" className='logos'/>
            <img src={require('./html/imagenes/logo1.jpg' )}alt="logo1" className='logos'/>
            <img src={require('./html/imagenes/logo2.jpg' )}alt="logo1" className='logos'/>
    </div>
    
 </footer>
 <script src="cadastro.js"></script>
</body>

    );
}
export default Registro;
