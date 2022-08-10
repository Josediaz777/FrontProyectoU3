import React from 'react';
import './App.css';
import Navbar from './components/navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <br></br><br></br>
      <div className='body'>
        <div className="card">

          <div className="card_part card_part-one">
          </div>

          <div className="card_part card_part-two">

          </div>

          <div className="card_part card_part-three">
          </div>

          <div className="card_part card_part-four">
          </div>

        </div>

      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <div>
        <h1 className='titulo'>Bienvenidos</h1>
        <h4 className='sub'>Un currículum vitae es el documento que incluye toda la experiencia, la formación, las aptitudes, los idiomas y los datos de contacto de un trabajador, así como cualquier otra información que considere relevante añadir. Es, en esencia, su perfil profesional. Tener un currículum vitae actualizado es indispensable, tanto si se estás en búsqueda activa de empleo o no.</h4>
        <h2 className='subt'>Importancia del curriculum Vitae</h2>
        <h4 className='sub'>
          Hacer un currículum vitae, o CV, no es sencillo. Primeramente, por lo general se considera al CV como un documento a disponer solo en casos de desempleo o cuando una persona está buscando un nuevo empleo, aunque esté trabajando actualmente. Esto no es cierto y de hecho genera problemas, ya que un currículum vitae debe estar permanentemente actualizado, indiferentemente de si se está en búsqueda de empleo o no. La razón de esto es porque es un documento que debe funcionar como una introducción rápida y clara a tu perfil profesional y podrá proporcionarte nuevas oportunidades, aunque ni siquiera las estés buscando. Veamos un ejemplo concreto.
        </h4>

      </div>

    </div>
  );
}

export default App;
