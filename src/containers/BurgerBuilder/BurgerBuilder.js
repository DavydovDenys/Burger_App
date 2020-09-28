import React, {Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";


const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3

};



class BurgerBuilder extends Component {
  // рабочая конструкция
  /*constructor(props) {
    super(props);
    this.state = {...}
  }*/

  // более современный способ
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    orderButton: false,
    purchasing: false
  };



  purchaseHandler  = () => {
    this.setState({purchasing: true})
  }

  checkOrderButton(ingredients) {
    let order = 0;
    for (let value of Object.values(ingredients)) {
      order += value;
    }
    this.setState({orderButton: order})
    /*let sum = Object.keys(ingredients)
      .map(key => {
        return ingredients[key];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)
    this.setState({orderButton: sum > 0})*/
  }



  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})

    this.checkOrderButton(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount;
    if (newCount) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceMinus = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceMinus;

      this.setState({ingredients: updatedIngredients, totalPrice: newPrice})

      this.checkOrderButton(updatedIngredients);
    }
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  render() {
    const disabled = {...this.state.ingredients}
    for (let key in disabled) {
      disabled[key] = disabled[key] <= 0;
    }

    return (
      <Auxiliary>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          removeIngredientHandler={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          totalPrice={this.state.totalPrice}
          disabled={disabled}
          order={this.state.orderButton}
          purchasing={this.purchaseHandler}/>
      </Auxiliary>

    );
  }
}



export default BurgerBuilder;