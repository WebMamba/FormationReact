import { render } from "@testing-library/react";
import TodoItem from ".";

test("render TodoItem without crashing", () => {
  const component = render(<TodoItem />);

  expect(component).toMatchSnapshot();
});
