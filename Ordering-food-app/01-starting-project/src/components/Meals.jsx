import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await fetch("http://localhost:3000/meals");
       
        if (response.ok) {            
          const meals = await response.json();         
          setLoadedMeals(meals);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMeal();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal, index) => {
        return <MealItem meal={meal} key={meal.id} />
      })}
    </ul>
  );
}
