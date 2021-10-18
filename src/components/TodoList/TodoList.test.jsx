import { screen, render } from "@testing-library/react";
import TodoList from ".";
import { item1, item2, item3 } from "../../fixtures/item_fixtures";

test("print the good numbers of item", () => {
  render(<TodoList list={[item1, item2, item3]} />);

  expect(screen.getAllByTestId("todo-item").length).toBe(3);
});

test("show empty message on empty list", () => {
  render(<TodoList list={[]} />);

  expect(screen.getByText("Rien à faire aujourd'hui")).toBeInTheDocument();
});
