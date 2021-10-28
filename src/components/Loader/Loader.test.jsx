import { render } from "@testing-library/react";
import Loader from ".";

test("render Loader without crashing", () => {
  const rendered = render(<Loader />);

  expect(rendered).toMatchSnapshot();
});
