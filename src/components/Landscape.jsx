export default function Landscape({ src, text }) {
  return (
    <section className="background">
      <div className="landscape">
        <div className="container">
          <img src={src} alt="Photo de paysage" />
          <p className="landscape__text">{text}</p>
        </div>
      </div>
    </section>
  )
}
