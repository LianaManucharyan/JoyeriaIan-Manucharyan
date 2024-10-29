import '../../components/NavBar/navbar.css'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="Brand">
          <h2>Joyería Ian</h2>
      </Link>

      <ul className="categories">
        <li className='category'>
          <Link to="/category/anillos">Anillos</Link>
        </li>
        <li className='category'>
          <Link to="/category/aros">Aros</Link>
        </li>
        <li className='category'>
          <Link to="/category/pulseras">Pulseras</Link>
        </li>
        <li className='category'>
          <Link to="/category/collar">Collares</Link>
        </li>
      </ul>

      < CartWidget />

    </div>
  )
}

export default NavBar