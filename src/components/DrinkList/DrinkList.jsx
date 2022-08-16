import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../../api";
import { useFetchData } from "../../hooks/useFetchData";
import DrinkCard from "../DrinkPreviewCard/DrinkPreviewCard";

const REACT_APP_API_FOR_CARD="https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
const REACT_APP_API_FOR_DESCRIPTION = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const MAX_SHOWED_INGREDIENTS = 3;

const DrinkList = () => {
  const { data } = useFetchData(REACT_APP_API_FOR_CARD);
  const { drinks } = data;

  const [id, setId] = useState([]);

  useEffect(() => {
    if (drinks) {
      drinks.map(async (element) => {
        const data = await getData(`${REACT_APP_API_FOR_DESCRIPTION}${element.idDrink}`);
        setId((prev) => [...prev, data.drinks[0]]);
      });
    };
  },[drinks]);

  const renderCards = id.map((element, index) => {
    const { strDrink, strDrinkThumb } = element;
    const properties = Object.keys(element);
    
    const ingredients = properties.filter(property => property.includes("strIngredient"));

    const measures = properties.filter(property => property.includes("strMeasure"));

    return <DrinkCard
      name={strDrink}
      source={strDrinkThumb}
      key={index}
      ingredients={ingredients.map((ingredient, index) => index < MAX_SHOWED_INGREDIENTS && element[ingredient] ? element[ingredient] + " " : " ")}
      measures={measures.map((measure, index) => index < MAX_SHOWED_INGREDIENTS && element[measure] ? element[measure] + " ": " ")}
      />
  });

  return (
    <div>
      {renderCards}
    </div>
  )

}

export default DrinkList;