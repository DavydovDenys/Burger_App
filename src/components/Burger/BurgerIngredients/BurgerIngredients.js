import React from "react";
import classes from './BurgerIngredients.module.css'
import PropTypes from 'prop-types'


const BurgerIngredients = (props) => {
  let ingredient = null;

  switch (props.type) {
    case ('bread-bottom'):
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    case ('bread-top'):
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case ('meat'):
      ingredient = <div className={classes.Meat}></div>;
    break;

    case ('heese'):
      ingredient = <div className={classes.Cheese}></div>;
    return;

    case ('salad'):
      ingredient = <div className={classes.Salad}></div>;
    return;

    case ('bacon'):
      ingredient = <div className={classes.Bacon}></div>;
    return;

    default:
      ingredient = null;
  }

  return ingredient;
};

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredients;