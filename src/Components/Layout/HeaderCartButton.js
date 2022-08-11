import React, {useContext, useEffect, useState} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props =>{
  // This component will be re evaluated by React whenever the context changes

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext); 

  const {items} = cartCtx;

  const numberOfCartItems = items.reduce((currNumber, item) => {
    return currNumber + item.amount
  }, 0)


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  //the array passed in as the second parameter of use effect --> [items] <-- is used to update the component every time there is a change in the items variable, which was destructured from the cartCtx.
  useEffect(()=>{
    if(cartCtx.items.length === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);

    //if you return a function inside of useEffect, it will become a cleanup function
    return () =>{
      clearTimeout(timer)
    }
  }, [items])

  return(
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  );
}

export default HeaderCartButton