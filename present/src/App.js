import './home.css';


function App() {
  return (
    <body>

    <header>
        <div id="root" class="content">
        <a href="home.html"><button class="boton"><span>Home</span></button></a>
        <a href="catalogo.html"><button class="boton"><span>Catalogo</span></button></a>
        <a href="login.html"><button class="boton"><span>Entrar</span></button></a>
        <a href="cadastro.html"><button class="boton"><span>Cadastrar</span></button></a>
        </div>
    </header>

<main class="cprincipal">

<div class="card">
        <h2 class="textcard1"><strong>A sua vida pode mudar agora!</strong></h2><br></br>
        <div class="card2">
            <p>Gostaria se tornar o proximo programador?</p>
            <p> Domine as tecnologias utilizadas pelas 
                empresas mais inovadoras do mundo e encare seu novo desafio profissional, 
                evoluindo em comunidade com os melhores experts.
            </p>
        </div>
</div> 


</main>

 <footer class="pie">
    <div>
        <h2>Programas de Apoio</h2><br></br>
            <img src={require('./componentes/imagenes/logo1.jpg' )}alt="logo1" className='logos'/>
            <img src={require('./componentes/imagenes/logo2.jpg' )}alt="logo2" className='logos'/>
            <img src={require('./componentes/imagenes/logo1.jpg' )}alt="logo1" className='logos'/>
            <img src={require('./componentes/imagenes/logo2.jpg' )}alt="logo2" className='logos'/>
    </div>
    
 </footer>
</body>
   
  );
}

export default App;
