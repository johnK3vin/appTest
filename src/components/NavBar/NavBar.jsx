
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='headerNav'>
        <div className='nav'>
            <Link to='/appTest'>App Test</Link>
        </div>
    </header>
  )
}

export default NavBar