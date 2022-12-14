
function Login() {

    return(
        
<body>

    <header>
        <div className="content">
        <a href="home.html"><button className="boton"><span>Home</span></button></a>
        <a href="catalogo.html"><button className="boton"><span>Catalogo</span></button></a>
        <button className="boton"><span>Entrar</span></button>
        <a href="cadastro.html"><button className="boton"><span>Cadastrar</span></button></a>
        </div>
    </header>

<main className="cprincipal">

<div className="card">
        <h2 className="textcard1"><strong>Uma plataforma onde você podera aprender com experts, 
            no real time e dominar as principais e mais diversas tecnologias além de poder
            entrar mais rápido nas empresas mais desejadas.</strong>
        </h2>
</div>

<div className="card2">
  <form action="">

    <input type="email" name="usuario" id="usuario" placeholder="E-mail/Usuario"/><br></br>
    <input type="password" name="password" id="contrasena" placeholder="Password"/><br></br>

    <button className="boton2"><span>Entrar</span></button><br></br>
    <button className="boton2"><span>Esqueçeu a senha</span></button><br></br>
    <button className="boton2"><span>Criar Conta</span></button><br></br>

  </form>

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
</body>

    );
}

export default Login;