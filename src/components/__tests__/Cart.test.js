import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cart from "../Cart";

const mockStore = configureStore([]);

describe("Cart Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cart: {
        items: [{ id: 1, title: "Product 1", quantity: 1, price: 10 }],
        totalPrice: 10,
      },
    });
  });

  test("renders cart with items", () => {
    render(
      <Provider store={store}>
        <Cart isOpen={true} toggleCart={() => {}} />
      </Provider>
    );

    expect(screen.getByText(/Shopping Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
  });

  test("removes item from cart", () => {
    render(
      <Provider store={store}>
        <Cart isOpen={true} toggleCart={() => {}} />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Remove/i));

    const actions = store.getActions();
    expect(actions).toContainEqual({ type: "cart/removeFromCart", payload: 1 });
  });
});
