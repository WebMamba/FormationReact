import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from ".";
import { item1 } from "../../fixtures/item_fixtures";

test("render TodoItem without crashing", () => {
  const component = render(<TodoItem task={item1} />);

  expect(component).toMatchSnapshot();
});

test("click on checkbox change css class", () => {
  const onCheckMock = jest.fn();
  render(<TodoItem task={item1} onCheck={onCheckMock} />);

  const checkBox = screen.getByRole("button");

  userEvent.click(checkBox);

  expect(onCheckMock).toBeCalled();
});
