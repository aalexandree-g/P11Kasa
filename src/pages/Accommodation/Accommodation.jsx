import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Tag from './components/Tag'

export default function Accommodation() {
  return (
    <div className="main">
      <div className="headAndContent">
        <Header />

        <section className="tag-list">
          <Tag tag={'Parmentier'} />
          <Tag tag={'Marais'} />
          <Tag tag={'Canal Saint Martin'} />
          <Tag tag={'13e'} />
        </section>
      </div>
      <Footer />
    </div>
  )
}
