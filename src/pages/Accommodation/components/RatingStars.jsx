import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function RatingStars({ value }) {
  const rating = parseInt(value, 10)
  return (
    <div className="rating-stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={
            i <= rating
              ? 'rating-stars__icon active'
              : 'rating-stars__icon inactive'
          }
        />
      ))}
    </div>
  )
}
