import React from "react";
import "./Home.css"

function Home(){
    return(
        <div className=".">
        <h2>Bem vindo a  pagina inicial da nossa AV2 </h2>
        <p>conheça os melhores cosplays do sesi senai</p>
        <div className="massa">
            <img src={require('./FOTO3.jpg')} alt="Descrição da imagem" className="foto" height={500} width= {320}/> 
            <img src={require('./FOTO4.jpg')} alt="Descrição da imagem"  className="foto"height={500} width= {320}/>
            <img src={require('./FOTO5.jpg')} alt="Descrição da imagem"  className="foto"height={500} width= {320}/>/
            <img src={require('./FOTO6.jpg')} alt="Descrição da imagem"  className="foto"height={500} width= {320}/>/
            <img src={require('./FOTO7.jpg')} alt="Descrição da imagem"  className="foto"height={500} width= {320}/>/
            </div>
        </div>
    );

}
export default Home;