import classes from "./AvailableMeals.module.css";
import Cart from '../UI/Cart'
import MealsItem from "./MealsItem";

const dummy_meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A German specialty",
    price: 22.99,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "America Meet",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy ... and Green ....",
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const mealList = dummy_meals.map((meal) => {
    return <MealsItem key={meal.key} name={meal.name} description={meal.description} price={meal.price} />
  });

  return (
    <section className={classes.meals}>
      <Cart>
        <ul>{mealList}</ul>
      </Cart>
    </section>
  );
};

export default AvailableMeals;
