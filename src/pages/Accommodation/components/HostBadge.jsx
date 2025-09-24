export default function HostBadge({ name, picture }) {
  const [firstName, lastName] = name.split(' ')

  return (
    <div className="host-badge">
      <p className="host-badge__name">
        {firstName} <br /> {lastName}
      </p>
      <img
        className="host-badge__picture"
        src={picture}
        alt={`Photo de ${name}`}
      />
    </div>
  )
}
