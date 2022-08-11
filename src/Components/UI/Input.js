import React from "react";

import classes from './Input.module.css'

//In this component we are using the forwardRef. It allows us to take a ref as a component from a parent (just like a prop) to then pass it down as a ref attribute to the input HTML component.
const Input = React.forwardRef((props, ref) =>{
  return(
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}/>
    </div>
  );
});

export default Input