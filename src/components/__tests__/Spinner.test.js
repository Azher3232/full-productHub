import { render } from "@testing-library/react";
import Spinner from "../Spinner";

describe("Spinner component", () => {
  it("renders the spinner correctly", () => {
    const { container } = render(<Spinner />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
