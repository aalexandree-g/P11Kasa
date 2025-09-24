import Tag from './Tag'

export default function TagList({ tags = [] }) {
  return (
    <div className="tag-list">
      {tags.map((tag, i) => (
        <Tag key={i} text={tag} />
      ))}
    </div>
  )
}
