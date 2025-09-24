import { Link } from 'react-router-dom'
import Card from './Card'
import logements from '../../../data/logements.json'

export default function Grid() {
  return (
    <div className="background">
      <div className="grid-container">
        <div className="grid">
          {logements.map((logement) => (
            <Link
              key={logement.id}
              to={`/accommodation/${logement.id}`}
              className="card-link"
            >
              <Card src={logement.cover} title={logement.title} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
