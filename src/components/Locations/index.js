import './index.css'

const Locations = props => {
  const {locationDetails} = props
  const {imageUrl, description, name} = locationDetails

  return (
    <li className="list-container">
      <div className="location-Card-Container">
        <img src={imageUrl} alt={name} className="image" />
        <div className="container">
          <h1 className="heading">{name}</h1>
          <p className="paragraph">{description}</p>
        </div>
      </div>
    </li>
  )
}
export default Locations
