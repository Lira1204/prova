import './App.css';
import Home from "./Home"
import React from 'react'; import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';
import Contato from './Contato';
import Quemsomos from './Quemsomos';

function App() {
  return ( 
    <div className="App"> 
     <Navbar /> 
    
    <BrowserRouter> 
    <Routes> 
    <Route path='/' element={<Home />} />
    <Route path='/Contato' element={<Contato />} />
    <Route path='/Quem somos' element={<Quemsomos/>} />  
    </Routes> 
    </BrowserRouter> 
    <Footer/>

    </div> 
    );
  } 
   export default App;


