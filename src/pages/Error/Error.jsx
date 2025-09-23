import { Link } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'

export default function Error() {
  return (
    <div className="main">
      <div className="headAndContent">
        <Header />
        <div className="error">
          <span className="error__number">404</span>
          <span className="error__text">
            Oups ! La page que vous demandez n'existe pas.
          </span>
          <Link to="/" className="error__link">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
