import Landscape from '../components/Landscape'
import landscape from '../assets/landscape1.png'

export default function Home() {
  return (
    <div>
      <Landscape src={landscape} text={'Chez vous, partout et ailleurs'} />
      <div className="content-container">
        <p>ok</p>
      </div>
    </div>
  )
}
