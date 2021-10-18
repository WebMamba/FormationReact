import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from ".";

test("render TodoItem without crashing", () => {
  const component = render(
    <TodoItem title="Test" datetime={new Date("2/1/22")} />
  );

  expect(component).toMatchSnapshot();
});

test("click on checkbox change css class", () => {
  render(<TodoItem title="Test" datetime={new Date("2/1/22")} />);

  const checkBox = screen.getByRole("button");
  const container = screen.getByTestId("todo-item");

  userEvent.click(checkBox);

  expect(checkBox).toHaveClass("check");
  expect(container).toHaveClass("checked");
});
