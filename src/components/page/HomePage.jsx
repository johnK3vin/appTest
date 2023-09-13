import { Link } from "react-router-dom"

const HomePage = () => {

  return (
    <div className="homeContainer">
        <Link to='/test/emocional mente sano' className="Test">
            <div className="divTest">¿Eres Emocionalmente Sano?</div>
        </Link>
        <Link to='/test/revela tu miedo' className="Test" style={{backgroundImage: 'url("/miedo.jpg")'}}>
            <div className="divTest">Revela tu miedo mas profundo</div>
        </Link>
        <Link to='/test/decubre animal totem' className="Test" style={{backgroundImage: 'url("/imgTestAnimal/totemanimal.jpg")'}}>
          <div className="divTest">Descubre tu animal totem</div>
        </Link>
    </div>
  )
}

export default HomePage