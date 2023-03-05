import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import useCart from "../../store/useCart";

function HeaderCartButton(props) {
  const cartCtx = useCart();

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartCtx.totalAmount}</span>
    </button>
  );
}

export default HeaderCartButton;
