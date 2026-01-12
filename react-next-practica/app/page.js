import React from 'react';
import { Titulo } from './componentes/Titulo';
import { Parrafo } from './componentes/Parrafo';
import { Imagen } from './componentes/Imagen';
import { Boton } from './componentes/Boton';

export default function Home() {
  return (
    <main>
      <Titulo texto="Bienvenido a mi aplicación" color="white" tamaño="34px" fuente="Arial" posicion="center"/>
      <Parrafo texto="Este es un párrafo de ejemplo para saber como funcionan los componentes dentro de react"  color="lightblue" tamaño="16px" posicion="center"/>
      <Imagen src="/images/React.png" ancho="400px" alto="400px" posicion="block" margen="0 auto"></Imagen>
      <div>
        <Boton text="Haz clic aquí" color="green" tamaño="18px" posicion="block" margen="0 auto"/>
      </div>
    </main>
  );
}
