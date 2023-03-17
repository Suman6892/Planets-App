import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  return (
    <div className="PlanetContainer">
      <img className="Image" src={imageUrl} alt={`planet ${name}`} />
      <h1 className="Name">{name}</h1>
      <p className="Description">{description}</p>
    </div>
  )
}

export default PlanetItem
