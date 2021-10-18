import { render } from "@testing-library/react";
import Footer from ".";

test("render Footer without crashing", () => {
  const component = render(<Footer />);

  expect(component).toMatchSnapshot();
});
