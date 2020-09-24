import React from "react";

import classes from "./BuildControl.module.css"

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.Less} onClick={props.removed}>Less {props.price}$</button>
      <button className={classes.More} onClick={props.added}>More {props.price}$</button>
    </div>
  );
}


export default BuildControl;