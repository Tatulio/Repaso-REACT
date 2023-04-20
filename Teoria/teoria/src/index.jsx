import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {Coffe} from './components/Coffe';
import {Usuarios} from './components/Usuarios';
import { Card } from './components/Card'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Usuarios 
    nombre="Mike" 
    edad="24"
    direccion={{
      calle: "Gardaer", 
      ciudad: "Caba",
      pais: "Argentina"
    }}
    />

    <Card />


  </React.StrictMode>
);

