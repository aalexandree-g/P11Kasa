import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Grid from '../../pages/Home/components/Grid'
import Banner from '../../components/ui/Banner'
import landscape from '../../assets/landscape1.png'

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
