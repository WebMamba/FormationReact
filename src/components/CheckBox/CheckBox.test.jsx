import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from ".";

test("render checkbox without crashing", () => {
  const component = render(<CheckBox />);

  expect(component).toMatchSnapshot();
});

test("click on checkbox change css class", () => {
  render(<CheckBox />);

  const component = screen.getByRole("button");

  userEvent.click(component);

  expect(component).toHaveClass("check");
});
