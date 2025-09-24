import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

export default function Slideshow({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('')
  const len = images && images.length ? images.length : 0
  if (!len) return null

  const handlePrev = () => {
    setDirection('left')
    setCurrentIndex((i) => (i - 1 + len) % len)
  }
  const handleNext = () => {
    setDirection('right')
    setCurrentIndex((i) => (i + 1) % len)
  }

  return (
    <div className="slideshow">
      <div className="slideshow__stage">
        <img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Photo du logement - ${currentIndex + 1}`}
          className={`slideshow__image slideshow__image--${direction}`}
        />
      </div>
      {len > 1 && (
        <>
          <button
            className="slideshow__button slideshow__button--prev"
            onClick={handlePrev}
            aria-label="Photo précédente"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <button
            className="slideshow__button slideshow__button--next"
            onClick={handleNext}
            aria-label="Photo suivante"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
          <div className="slideshow__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
