import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Animal, Dog, isDog } from "./narrow-by-instanceof";
import { isUser } from './narrow-by-type-predicate';
import type { UserWithAgeOnly, UserWithoutAge } from './UtilityTypes/pick-and-omit';
import Login from './components/Login';
import Login1 from './components/Login1';

function App() {
  const [count, setCount] = useState(0);

  // const dog = new Dog("max", "Persian");
  // const animal = new Animal("Stacy");

  // console.log(dog);
  // console.log(isDog(dog));
  // console.log(isDog(animal));


  // const t = {name : "test"};
  // const d = {obj: "sdfsdf"};

  // console.log(isUser(t));
  // console.log(isUser(d));

  // const user : UserWithoutAge = {
  //   id: 1,
  //   name: "Ali"
  // };

  // console.log(user);


  // const user1 : UserWithAgeOnly = {
  //   age : 23
  // };

  // console.log(user1);

  // console.log(typeof user1)

  return (
    <Login1 />      
  )
}

export default App
