import Header from '../components/Header'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Banner from '../components/Banner'
import landscape from '../assets/landscape1.png'

export default function Home() {
  return (
    <div className="main">
      <div className="headAndContent">
        <Header />
        <Banner src={landscape} text={'Chez vous, partout et ailleurs'} />
      </div>
      <Grid />
      <Footer />
    </div>
  )
}
