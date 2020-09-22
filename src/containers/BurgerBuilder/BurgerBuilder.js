import React, {Component} from "react";

import Auxiliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";


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
    }
  };


  render() {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls/>
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;