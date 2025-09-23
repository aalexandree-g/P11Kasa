import Card from './Card'
import logements from '../data/logements.json'

export default function Grid() {
  return (
    <div className="background">
      <div className="grid-container">
        <div className="grid">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              src={logement.cover}
              title={logement.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
