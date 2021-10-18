import { render } from "@testing-library/react";
import Header from ".";

test("render Header without crashing", () => {
  const component = render(<Header />);

  expect(component).toMatchSnapshot();
});
