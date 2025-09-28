import { Routes, BrowserRouter, Route } from 'react-router-dom'
import ScrollToTop from './components/utils/ScrollToTop'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accommodation from './pages/Accommodation/Accommodation'
import Error from './pages/Error/Error'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
