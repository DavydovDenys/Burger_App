import React from "react";
import classes from './Burger.module.css'
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";


const Burger = (props) => {

  const transformedIngredients = Object.keys(props.ingredients).map(
    (igKey) => {
      // debugger;
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredients key={igKey + i} type={igKey}/>;
      });
    });
  console.log(transformedIngredients);


  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top"/>
      {transformedIngredients}

      <BurgerIngredients type="bread-bottom"/>
    </div>
  );
};

export default Burger;