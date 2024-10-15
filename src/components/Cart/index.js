import {
  CartContainer,
  CartItem,
  ItemTitle,
  ItemDetails,
  RemoveButton,
  TotalSection,
  ClearButton,
  BuyButton,
  Modal,
  ModalContent,
} from "./styles";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../../state/cartSlice";

const Cart = ({ isOpen, toggleCart }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseSummary, setPurchaseSummary] = useState(null);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleBuy = () => {
    const summary = {
      itemCount: cartItems.length,
      totalPrice: totalPrice.toFixed(2),
    };
    setPurchaseSummary(summary);

    setIsModalOpen(true);

    dispatch(clearCart());
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <CartContainer id="cart-container" $isOpen={isOpen}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDetails>
                {item.quantity} x ${item.price.toFixed(2)}
              </ItemDetails>
              <RemoveButton onClick={() => handleRemove(item.id)}>
                Remove
              </RemoveButton>
            </CartItem>
          ))
        )}
        <TotalSection>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <ClearButton onClick={handleClearCart}>Clear Cart</ClearButton>
          <BuyButton onClick={handleBuy}>Buy</BuyButton>
        </TotalSection>
      </CartContainer>

      {isModalOpen && purchaseSummary && (
        <Modal>
          <ModalContent>
            <h2>Thank you for your purchase!</h2>
            <p>
              You bought {purchaseSummary.itemCount} item(s) with a total of $
              {purchaseSummary.totalPrice}.
            </p>
            <button onClick={closeModal}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Cart;
