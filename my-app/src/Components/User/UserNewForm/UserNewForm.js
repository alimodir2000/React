import React from "react";
import { useState } from "react";
import style from "./UserNewForm.module.css";
import "../../UI/Card/Card.css";
import Card from "../../UI/Card/Card";

const UserNewForm = (props) => {
  const [borderStyle, setBorderStyle] = useState(style.error);
  const [ageBorderStyle, setAgeBorderStyle] = useState(style.error);

  const [name, setName] = useState(" ");
  const [age, setAge] = useState(0);

  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);

  const addNewUserClickHandler = (event) => {
    event.preventDefault();
    if (!isAgeValid || !isNameValid) {
      alert("Invalid Inputs");
      return;
    }

    props.onNewUserAdded({
      Id: Math.round(Math.random() * 100),
      Name: name,
      Age: age,
    });
  };

  const nameChangedHandler = (event) => {
    if (event.target.value === " ") {
      setBorderStyle(style.error);
      setIsNameValid(false);
    } else {
      setBorderStyle(style.default);
      setIsNameValid(true);
    }
    setName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    if (event.target.value <= 0) {
      setAgeBorderStyle(style.error);
      setIsAgeValid(false);
    } else {
      setAgeBorderStyle(style.default);
      setIsAgeValid(true);
    }
    setAge(event.target.value);
  };

  return (
    <Card>
      <form>
        <label className={style.input}>Usename</label>
        <input
          className={`${style.input} ${style.borderStyle}`}
          type="text"
          value={name}
          onChange={nameChangedHandler}
        />

        <label className={style.input}>age</label>
        <input
          type="number"
          value={age}
          className={`${style.input} ${style.borderStyle}`}
          onChange={ageChangedHandler}
        />

        <input type="submit" value="Add" onClick={addNewUserClickHandler} />
      </form>
    </Card>
  );
};

export default UserNewForm;
