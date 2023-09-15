import { Link } from "react-router-dom"
const HomePage = () => {

  return (
    <div className="homeContainer">
        <Link to='/testSano' className="Test-sano">
            <div className="divTest">¿Eres Emocionalmente Sano?</div>
        </Link>
        <Link to='/testMiedo' className="Test-miedo">
            <div className="divTest">Revela tu miedo mas profundo</div>
        </Link>
        <Link to='/testTotemAnimal' className="Test-totem">
          <div className="divTest">Descubre tu animal totem</div>
        </Link>
    </div>
  )
}

export default HomePage