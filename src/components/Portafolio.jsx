import React from 'react';
import { Navbar } from './Navbar';

function Portafolio() {
    return (
        <div>
            
            <Navbar/>
            <h1 style={{textAlign: "center"}}>Portafolio</h1>
            <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        
          <p className="mb-8 leading-relaxed">
           Hola como estas?, espero te encuentres bien, esta pagina esta en proceso permitenos un espacio de tiempo y creeme que en unas semanas disfrutaras del gran contenido que esta por venir, esperanos !
          </p>
         
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://media1.giphy.com/media/KeQgaiv19rCEdVFnW8/200w.gif?cid=6c09b9523k49mh0qaqeqsnid8y72fnbqujcuh9qz226p250n&rid=200w.gif&ct=g"
          />
        </div>
      </div>
    </section>
        </div>
    );
}

export default Portafolio;

