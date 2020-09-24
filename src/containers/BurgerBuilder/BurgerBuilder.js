import React, {Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

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
    totalPrice: 4
  };


  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({ingredients: updatedIngredients, totalPrice: newPrice})

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
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.state.totalPrice);
  }

  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          removeIngredientHandler={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
          totalPrice={this.state.totalPrice}/>
      </Auxiliary>

    );
  }
}



export default BurgerBuilder;