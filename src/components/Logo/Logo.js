import React from 'react';

import burgerLogo from '../../assets/images/28.1 burger-logo.png'
import classes from './Logo.module.css'


const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="BurgerApp"/>
  </div>
);

export default Logo;