import { render } from "@testing-library/react";
import CheckBox from ".";

test("render checkbox without crashing", () => {
  const component = render(<CheckBox />);

  expect(component).toMatchSnapshot();
});
