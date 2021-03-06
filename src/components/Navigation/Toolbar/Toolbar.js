import React from 'react';

import classes from './Toolbar.module.css'
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Menu from "../Menu/Menu";


const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    {/*<div>MENU</div>*/}
    <Menu menu={props.menu} clicked={props.clicked}/>
    <div className={classes.Logo}>
      <Logo/>
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems/>
    </nav>
  </header>
);

export default Toolbar;