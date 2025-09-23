import Header from '../components/Header'
import Footer from '../components/Footer'
import Grid from '../components/Grid'
import Banner from '../components/Banner'
import landscape from '../assets/landscape1.png'

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Banner src={landscape} text={'Chez vous, partout et ailleurs'} />
      <Grid />
      <Footer />
    </div>
  )
}
