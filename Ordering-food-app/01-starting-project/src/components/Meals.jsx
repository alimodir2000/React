import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import useHttp from "./hooks/useHttp";

const config = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", config  , []);
  if (isLoading) {
    return <p>Data is Loading</p>;
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal, index) => {
        return <MealItem meal={meal} key={meal.id} />;
      })}
    </ul>
  );
}
