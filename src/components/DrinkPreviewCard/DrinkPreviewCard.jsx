const DrinkCard = ( {name, ingredients, measures, source, onClick} ) => {

  return (
    <div>
      <h1 onClick={onClick}>{name}</h1>
      <div>
        <p>{ingredients}</p>
        <p>{measures}</p>
      </div>
      <img src={source} alt={name}/>
    </div>
  )
}

export default DrinkCard;