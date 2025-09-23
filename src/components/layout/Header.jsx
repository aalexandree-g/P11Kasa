import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="background">
      <nav className="content navbar">
        <div className="navbar__logo">
          <img src={logo} alt="Logo du site" />
        </div>
        <div className="navbar__links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            À propos
          </NavLink>
          <NavLink
            to="/accommodation"
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            Logement
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
