import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  // get current route
  const { pathname } = useLocation()

  // scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
