import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/cart.json`);

      if (!res.ok) {
        throw new Error("Fetching cart data failed.");
      }

      const data = await res.json();

      return data;
    };

    try {
      const cartData = await fetchData();

      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!res.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
