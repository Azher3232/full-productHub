import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  // Slice name
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
      } else {
        state.items.push({ ...item, quantity: 1 });
        state.totalPrice += item.price;
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, action) => {
      const itemID = action.payload;
      const existingItem = state.items.find((product) => product.id === itemID);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalPrice -= existingItem.price;
          state.items = state.items.filter((product) => product.id !== itemID);
        }
      }
      state.totalQuantity -= 1;
    },
    clearCart: (state) => {
      // Función para limpiar el carrito
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

// To dispatch actions in the reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// Destructuring so we can rename the reducer
const { reducer: cartReducer } = cartSlice;
export default cartReducer;
