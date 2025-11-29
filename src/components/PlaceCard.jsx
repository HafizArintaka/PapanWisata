import { Link } from 'react-router-dom'

function PlaceCard({ id, name, image, location, description, tags }) {
  return (
    <article className="place-card" aria-labelledby={`place-${id}`}>
      <div className="image-wrapper">
        <img src={image} alt={name} loading="lazy" />
        <div className="tag-badges">
          {tags.map(tag => (
            <span key={tag} className="badge">{tag}</span>
          ))}
        </div>
      </div>
      <div className="place-body">
        <h3 id={`place-${id}`} className="place-name">{name}</h3>
        <p className="place-location">{location}</p>
        <p className="place-desc">{description}</p>
        <Link to={`/place/${id}`} className="detail-btn" aria-label={`Lihat detail ${name}`}>
          Sejangkipipun
        </Link>
      </div>
    </article>
  )
}

export default PlaceCard