import React from "react";

import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((el => {
      return (
        <li key={el}>
          <span style={{textTransform: 'capitalize'}}>{el}
          </span>: {props.ingredients[el]}
        </li>);
    }));
  return (
    <Auxiliary>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <p><strong>Total Prise: {props.totalPrice.toFixed(2)}$</strong></p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Auxiliary>
  );
}

export default OrderSummary;