import '../../components/NavBar/navbar.css'
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="Brand">
          <h2>Joyería Ian</h2>
      </div>

      <ul className="nav-links">
        <li>Anillos</li>
        <li>Aros</li>
        <li>Pulseras</li>
      </ul>

      < CartWidget />

    </div>
  )
}

export default NavBar