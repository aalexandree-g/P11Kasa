export default function Card({ src, title }) {
  return (
    <div className="card-container">
      <img src={src} alt="Photo de la location" />
      <p className="card-container__text">{title}</p>
    </div>
  )
}
