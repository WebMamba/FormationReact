import { render } from "@testing-library/react";
import TodoItem from ".";

test("render TodoItem without crashing", () => {
  const component = render(
    <TodoItem title="Test" datetime={new Date("December 17, 1995")} />
  );

  expect(component).toMatchSnapshot();
});
