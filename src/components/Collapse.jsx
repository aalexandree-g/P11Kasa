import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="background">
      <div className="content">
        <div className="collapse-container">
          <p className="collapse-container__title">{title}</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`collapse-container__icon ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className={`collapse-container__panel ${open ? 'open' : ''}`}>
          <div className="collapse-container__text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
