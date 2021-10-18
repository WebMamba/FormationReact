import { render } from "@testing-library/react";
import TodoItem from ".";

test("render TodoItem without crashing", () => {
  const component = render(
    <TodoItem title="Test" datetime={new Date("2/1/22")} />
  );

  expect(component).toMatchSnapshot();
});
