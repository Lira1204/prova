import React from "react";


 function Footer(){
    return (
        <nav>
          <div className="vida">
          <img src={require('./SESI.png')} alt="imagem" className="Sesi"/> 
          </div>
          <div className="todosdireitos">
          <a>© Todos direitos reservados ao povo do terciero ano/infotmatica para internet</a>
          <br></br>
          <a>Contato:osmelhores@sesisenai.com</a>
          </div>   
        </nav>
      );
    }
 export default Footer;