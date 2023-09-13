import { Link } from "react-router-dom"
const HomePage = () => {
  const rutasImg = {
    miedo : '../../../public/imgTestAnimal/miedo.jpg',
    totem: '../../../public/imgTestAnimal/totemanimal.jpg'
  }
  return (
    <div className="homeContainer">
        <Link to='/test/emocional mente sano' className="Test">
            <div className="divTest">¿Eres Emocionalmente Sano?</div>
        </Link>
        <Link to='/test/revela tu miedo' className="Test" style={{backgroundImage: `url(${rutasImg.miedo})`}}>
            <div className="divTest">Revela tu miedo mas profundo</div>
        </Link>
        <Link to='/test/decubre animal totem' className="Test" style={{backgroundImage: `url(${rutasImg.totem})`}}>
          <div className="divTest">Descubre tu animal totem</div>
        </Link>
    </div>
  )
}

export default HomePage