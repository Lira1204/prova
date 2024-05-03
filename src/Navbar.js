import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className=".">
      <img src={require('./SENAI.png')} alt="imagem" className="Senai"/> 
      </div>
      <div className="amg">
      <a href="/">home</a>
      <a href="/contato">Contato</a>
      <a href="/Quem somos">Quem somos</a>
      </div>   
    </nav>
  );
}

export default Navbar;