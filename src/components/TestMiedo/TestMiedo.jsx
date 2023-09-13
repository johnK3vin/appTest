import { useState, useEffect } from "react";
import preguntas from './preguntas.js';
import respuesta from "./respuestas.js";
import { Link } from "react-router-dom";
import {BsFillArrowLeftCircleFill as BSexit} from 'react-icons/bs'
import {BsArrowCounterclockwise as BSreset} from 'react-icons/bs'

const TestMiedo = () => {
    const [quest, setQuest] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [isFinish, setIsFinish] = useState(false);
  
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
  
    if (puntos >= 100 && puntos <= 170) {
      respuestaIndex = 0;
    } else if (puntos >= 180 && puntos <= 250) {
      respuestaIndex = 1;
    } else if (puntos >= 260 && puntos <= 320) {
      respuestaIndex = 2;
    } else if (puntos >= 330 && puntos <= 400) {
      respuestaIndex = 3;
    }
  
  if(isFinish) return (
    <div className='containerMiedo'>
      <div className='app-fm'>
        <div className="appfin-m">
          Test terminado
        </div>
        <div className='titulo-fm'> 
            {respuestaIndex !== -1 && <div className='respuesta-escritura-m'>{respuesta[respuestaIndex].opciones}</div>}
        </div>
        <div className='button-fm'>
          <Link to='/'>volver a inicio</Link>
        </div>
      </div>
    </div>
  )
  
  return (
    <div className='containerMiedo'>
       <div className='app-m'>
        <div className='lado-izquierdo-m'>
          <div className='numero-preguntas-m'>
            <span>Pregunta {quest + 1} de</span> {preguntas.length}
          </div>
          <div className='titulo-m'>
            {preguntas[quest].titulo}
          </div>
        </div>
        <div className='lado-derecho-m'>
          {preguntas[quest].opciones.map(pregunta => (
            <button className="res-m" key={pregunta.respuesta} onClick={() => point(pregunta.puntos)}>{pregunta.respuesta}</button>
          ))}
        </div>
        <div className='res-buttons'>
          <Link to='/'><BSexit/>Salir</Link>
          <button ><BSreset/></button>
        </div>
      </div>
    </div>
  )
}

export default TestMiedo