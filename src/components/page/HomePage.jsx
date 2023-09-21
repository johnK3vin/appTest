import { Link } from "react-router-dom"
const HomePage = () => {

  return (
    <div className="homeContainer">
      <div className="titleHome">
        <h1>Bienvenido a <span className="span-t">PersoTest</span></h1>
        <p>Aquí encontrarás una emocionante variedad de pruebas diseñadas para explorar y descubrir aspectos fascinantes de tu personalidad.</p>
      </div>
      <div className="testContainer">
      <Link to='/appTest/testSano' className="Test-sano">
            <div className="divTest">¿Eres Emocionalmente Sano?</div>
        </Link>
        <Link to='/appTest/testMiedo' className="Test-miedo">
            <div className="divTest">Revela tu miedo mas profundo</div>
        </Link>
        <Link to='/appTest/testTotemAnimal' className="Test-totem">
          <div className="divTest">Descubre tu animal totem</div>
        </Link>
      </div>
    </div>
  )
}

export default HomePage