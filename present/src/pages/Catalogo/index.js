
function Catalogo() {

    return (
        <body>

<header>
        <div class="content">
        <a href="./App.js"><button class="boton"><span>Home</span></button></a>
        <button class="boton"><span>Catalogo</span></button>
        <a href="login.html"><button class="boton"><span>Entrar</span></button></a>
        <a href="cadastro.html"><button class="boton"><span>Cadastrar</span></button></a>
        </div>
    </header>

<main class="cprincipal">

<div class="card">
        <h2 class="textcard1"><strong>Experiências desenvolvidas para você alcançar seu futuro</strong></h2><br></br>
        <div class="card2">
            <p>Escolha o curso que mais se adecue a você</p>
            <div class="card3">
                <fieldset name="Carreras">
                    <input type="text" class="iconoinplace" placeholder="Pesquisar"/><br></br>
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
    )
}

export default Catalogo;