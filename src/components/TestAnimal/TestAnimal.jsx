import preguntas from './preguntas.js'
import respuesta from './respuestas.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BsFillArrowLeftCircleFill as BSexit} from 'react-icons/bs'
import {BsArrowCounterclockwise as BSreset} from 'react-icons/bs'


const TestAnimal = () => {
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

  if (puntos == 0 && puntos < 16) {
    respuestaIndex = 0;
  } else if (puntos > 16 && puntos <= 32) {
    respuestaIndex = 1;
  } else if (puntos > 32 && puntos <= 48) {
    respuestaIndex = 2;
  } else if (puntos > 48 && puntos <= 66) {
    respuestaIndex = 3;
  }




  if (isFinish) return (
    <div className='containerAnimal'>
      <div className='app-fA'>
        <div className="appfin-A">
          Test terminado
        </div>
        <div className='img-A'>
          <img src={respuesta[respuestaIndex].img} alt="imagen de totem" />
        </div>
        <div className='titulo-fA'>
          {respuestaIndex !== -1 && <div className='respuesta-escritura-A'>{respuesta[respuestaIndex].opciones}</div>}
        </div>
        <div className='button-fA'>
          <Link to='/'>volver a inicio</Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className='containerAnimal'>
      <div className='app-A'>
        <div className='lado-izquierdo-A'>
          <div className='numero-preguntas-A'>
            <span>Pregunta {quest + 1} de</span> {preguntas.length}
          </div>
          <div className='titulo-A'>
            {preguntas[quest].titulo}
          </div>
        </div>
        <div className='lado-derecho-A'>
          {preguntas[quest].opciones.map(pregunta => (
            <button className="res-A" 
            key={pregunta.respuesta} 
            onClick={() => point(pregunta.puntos)}
            style={{backgroundImage: `url(${pregunta.img})`}}
            >{pregunta.respuesta}</button>
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

export default TestAnimal