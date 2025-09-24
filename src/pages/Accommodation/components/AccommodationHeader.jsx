import TagList from '../components/TagList'

export default function AccommodationHeader({ title, location, tags }) {
  return (
    <div className="accommodation-header">
      <h1 className="accommodation-header__title">{title}</h1>
      <p className="accommodation-header__location">{location}</p>
      <TagList tags={tags} />
    </div>
  )
}
