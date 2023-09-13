import { Link } from 'react-router-dom';
import preguntas from './preguntas.js';
import respuesta from './respuestas.js';
import { useState, useEffect } from 'react';
import {BsFillArrowLeftCircleFill as BSexit} from 'react-icons/bs'
import {BsArrowCounterclockwise as BSreset} from 'react-icons/bs'

const TestSano = () => {
  const [quest, setQuest] = useState(0);
  const [puntos, setPuntos] = useState(0);
  const [isFinish, setIsFinish] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  useEffect(() => {
    console.log(puntos);
  }, [puntos]);

  const point = (valor) => {
    const newPuntos = puntos + valor;
    setPuntos(newPuntos);
    if (quest === preguntas.length - 1) {
      setIsFinish(true);
    } else {
      setQuest(quest + 1)
    }
  }
  let respuestaIndex = -1;

  if (puntos >= 150 && puntos <= 250) {
    respuestaIndex = 0;
  } else if (puntos >= 260 && puntos <= 340) {
    respuestaIndex = 1;
  } else if (puntos >= 350 && puntos <= 490) {
    respuestaIndex = 2;
  } else if (puntos >= 500 && puntos <= 600) {
    respuestaIndex = 3;
  }

if(isFinish) return (
  <div className='appContainer'>
    <div className='app-f'>
      <div className="appfin">
        Test terminado
      </div>
      <div className='titulo-f'> 
          {respuestaIndex !== -1 && <div className='respuesta-escritura'>{respuesta[respuestaIndex].respuesta}</div>}
      </div>
      <div className='button-f'>
        <Link to='/'>volver a inicio</Link>
      </div>
    </div>
  </div>
)
   const reloadClick = () =>{
    if (!reloaded) {
      window.location.reload();
      setReloaded(true); // Marcar que la página ya se ha recargado
    }
   }

  return (
    <div className="appContainer">
      <div className='app'>
        <div className='lado-izquierdo'>
          <div className='numero-preguntas'>
            <span>Pregunta {quest + 1} de</span> {preguntas.length}
          </div>
          <div className='titulo'>
            {preguntas[quest].titulo}
          </div>
        </div>
        <div className='lado-derecho'>
          {preguntas[quest].opciones.map(pregunta => (
            <button className="b-res" key={pregunta.respuesta} onClick={() => point(pregunta.puntos)}>{pregunta.respuesta}</button>
          ))}
        </div>
        <div className='res-buttons'>
          <Link to='/'><BSexit/>Salir</Link>
          <button onClick={reloadClick}><BSreset/></button>
        </div>
      </div>
    </div>
  )
}

export default TestSano;
