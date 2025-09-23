import logo from '../../assets/logo-white.png'

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="Logo du site" />
        </div>
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
