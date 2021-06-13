import { Wrapper } from './Cart.styles';
import { CartItemType } from '../App';
import Button from "@material-ui/core/Button";
import React from "react";
import HistoryCartItem from "./CartItem/HistoryCartItem";

type Props = {
  cartItems: CartItemType[];
};

const HistoryCart: React.FC<Props> = ({ cartItems}) => {
    console.log("in history cart :")
    console.log(cartItems);
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : cartItems.map(item => (
        <HistoryCartItem
          key={item.id}
          item={item}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>

    </Wrapper>
  );
};

export default HistoryCart;
