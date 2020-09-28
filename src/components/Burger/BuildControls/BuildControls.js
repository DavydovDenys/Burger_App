import React from "react";

import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";
// import {func} from "prop-types";

const controls = [
  {label: 'Salad', type: 'salad', price: 0.5},
  {label: 'Bacon', type: 'bacon', price: 0.7},
  {label: 'Cheese', type: 'cheese', price: 0.4},
  {label: 'Meat', type: 'meat', price: 1.3}
];




const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {/*выводим цену за товар*/}

      <div className={classes.TotalPrice}>
        Total price - {props.totalPrice.toFixed(2)}$
      </div>
      {/*<p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>*/}
      {controls.map(ctr => (
        <BuildControl
          label={ctr.label}
          key={ctr.label}
          price={ctr.price}
          added={() => props.ingredientAdded(ctr.type)}
          removed={() => props.removeIngredientHandler(ctr.type)}
          disabled={props.disabled[ctr.type]}/>
      ))}
      {/*выводим цену за товар*/}
      {/*<div className={classes.TotalPrice}>Total price - {Math.floor(props.totalPrice * 100) / 100}$</div>*/}
      <div>
        <button
          disabled={!props.order}
          className={classes.OrderButton}
          onClick={props.purchasing}
          >Order Now</button>
      </div>

    </div>
  )
};




export default BuildControls;