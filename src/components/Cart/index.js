import { CartContainer, CartItem } from "./styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../state/cartSlice";

const Cart = ({ isOpen, toggleCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <CartContainer $isOpen={isOpen}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <span>{item.title}</span>
            <span>
              {item.quantity} x ${item.price.toFixed(2)}
            </span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </CartItem>
        ))
      )}
      <div>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleClearCart}>Clear Cart</button>
      </div>
      <button onClick={toggleCart}>Close</button>
    </CartContainer>
  );
};

export default Cart;
