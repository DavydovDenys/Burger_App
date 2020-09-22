import React from "react";

import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctr => (
        <BuildControl label={ctr.label} key={ctr.label} />
      ))};
    </div>
  )
};

export default BuildControls;