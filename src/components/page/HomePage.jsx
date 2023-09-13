import { Link } from "react-router-dom"
const HomePage = () => {

  return (
    <div className="homeContainer">
        <Link to='/test/emocional mente sano' className="Test-sano">
            <div className="divTest">¿Eres Emocionalmente Sano?</div>
        </Link>
        <Link to='/test/revela tu miedo' className="Test-miedo" style={{backgroundImage: "url('/appTest/imgTestAnimal/miedo.jpg')"}}>
            <div className="divTest">Revela tu miedo mas profundo</div>
        </Link>
        <Link to='/test/decubre animal totem' className="Test-totem" style={{backgroundImage: "url('/appTest/public/imgTestAnimal/totemanimal.jpg')"}}>
          <div className="divTest">Descubre tu animal totem</div>
        </Link>
    </div>
  )
}

export default HomePage