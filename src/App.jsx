import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Accomodation from './pages/Accomodation'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  )
}
