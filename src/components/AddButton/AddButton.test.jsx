import { render } from "@testing-library/react";
import AddButton from ".";

test("render AddButton without crashing", () => {
  const component = render(<AddButton />);

  expect(component).toMatchSnapshot();
});
