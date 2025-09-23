export default function Banner({ src, text }) {
  return (
    <section className="background">
      <div className="content">
        <div className="banner-container">
          <img src={src} alt="Bannière de paysage" />
          <p className="banner-container__text">{text}</p>
        </div>
      </div>
    </section>
  )
}
