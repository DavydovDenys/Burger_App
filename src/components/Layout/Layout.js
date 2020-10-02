import React, {Component} from "react";

import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.module.css'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer";


class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  menuShowHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
    console.log(this.state.menu)
  }

  render () {
    return (
      <Auxiliary>
        <Toolbar menu={this.state.menu} clicked={this.menuShowHandler} show={this.state.showSideDrawer}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Auxiliary>
    );
  }
};

export default Layout;