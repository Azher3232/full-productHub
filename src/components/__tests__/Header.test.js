import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Header from "../Header";

const mockStore = configureStore([]);

describe("Header component", () => {
  it("should display the title 'ProductHub'", () => {
    const store = mockStore({
      cart: {
        totalQuantity: 0,
        totalPrice: 0,
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const titleElement = screen.getByText("ProductHub");
    expect(titleElement).toBeInTheDocument();
  });

  it("should display the 'Electronics' link", () => {
    const store = mockStore({
      cart: {
        totalQuantity: 0,
        totalPrice: 0,
        items: [],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    const electronicsLink = screen.getByText("Electronics");

    expect(electronicsLink).toBeInTheDocument();
    expect(electronicsLink).toHaveAttribute("href", "/category/electronics");
  });
});
