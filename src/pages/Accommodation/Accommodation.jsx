import { useParams, Navigate } from 'react-router-dom'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Slideshow from './components/Slideshow'
import AccommodationHeader from './components/AccommodationHeader'
import HostBadge from './components/HostBadge'
import RatingStars from './components/RatingStars'
import Collapse from '../../components/ui/Collapse'
import logements from '../../data/logements.json'

export default function Accommodation() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  if (!logement) {
    return <Navigate to="/error" replace />
  }

  return (
    <div className="main">
      <div className="headAndContent">
        <Header />
        <section className="background">
          <div className="content accommodation-content">
            <Slideshow images={logement.pictures} />
            <div className="accommodation">
              <div className="accommodation__left">
                <AccommodationHeader
                  title={logement.title}
                  location={logement.location}
                  tags={logement.tags}
                />
              </div>
              <div className="accommodation__right">
                <HostBadge
                  name={logement.host.name}
                  picture={logement.host.picture}
                />
                <RatingStars value={logement.rating} />
              </div>
            </div>
            <div className="collapses">
              <Collapse title={'Description'} text={logement.description} />
              <Collapse
                title={'Équipements'}
                text={logement.equipments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
