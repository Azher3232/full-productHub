import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../app/store";
import App from "../../app";

describe("App Component", () => {
  test("renders App component correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText(/ProductHub/i)).toBeInTheDocument();
  });
});
