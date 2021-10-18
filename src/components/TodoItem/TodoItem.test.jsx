import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from ".";
import { item1 } from "../../fixtures/item_fixtures";

test("render TodoItem without crashing", () => {
  const component = render(<TodoItem {...item1} />);

  expect(component).toMatchSnapshot();
});

test("click on checkbox change css class", () => {
  render(<TodoItem {...item1} />);

  const checkBox = screen.getByRole("button");
  const container = screen.getByTestId("todo-item");

  userEvent.click(checkBox);

  expect(checkBox).toHaveClass("check");
  expect(container).toHaveClass("checked");
});
