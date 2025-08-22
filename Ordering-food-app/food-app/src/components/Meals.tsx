import React, { useContext, useEffect, useState } from "react";
import Button from "./UI/Button";
import type { MealDto } from "../store/CartContext";
import CartContext from "../store/CartContext";

const Meals = () => {
  const [meals, setMeals] = useState<MealDto[]>([]);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    getMeals();
  }, []);

  async function getMeals() {
    const response = await fetch("http://localhost:3000/meals", {
      method: "GET",
    });
    if (!response.ok) {
      console.log("Something went wrong!");
      return;
    }

    const data = await response.json();

    setMeals(data);
  }

  function handleAddMeal(meal: MealDto) {
    cartContext.addItem(meal);
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li className="meal-item" key={meal.id}>
          <article>
            <img src={`http://localhost:3000/${meal.image}`} />
            <div>
              <h3>{meal.name}</h3>
              <p className="meal-item-price">{meal.price}</p>
              <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
              <Button onClick={()=>handleAddMeal(meal)}>Add To Cart</Button>
            </p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default Meals;
