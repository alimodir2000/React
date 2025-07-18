import React, {Fragment} from "react";
import classes from "./Header.module.css";

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <React.Fragment>
    <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table of delcious food! "/>
    </div>
  </React.Fragment>;
};

export default Header;
