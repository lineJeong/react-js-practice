import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import useCart from "../../store/useCart";

function HeaderCartButton(props) {
  const cartCtx = useCart();
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
