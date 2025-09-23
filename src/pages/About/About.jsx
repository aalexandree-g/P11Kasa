import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Banner from '../../components/ui/Banner'
import landscape from '../../assets/landscape2.png'
import Collapse from '../../components/ui/Collapse'

export default function About() {
  return (
    <div className="main">
      <div className="headAndContent">
        <Header />
        <Banner src={landscape} />
        <div className="collapse-list">
          <Collapse
            title={'Fiabilité'}
            text={
              'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
            }
          />
          <Collapse
            title={'Respect'}
            text={
              'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
            }
          />
          <Collapse
            title={'Service'}
            text={
              'La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
            }
          />
          <Collapse
            title={'Sécurité'}
            text={
              "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}
