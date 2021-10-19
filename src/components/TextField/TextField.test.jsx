import { render, screen } from "@testing-library/react";
import TextField from ".";

test("render TextField without error", () => {
  const component = render(<TextField />);

  expect(component).toMatchSnapshot();
});

test("render TextField with error", () => {
  const component = render(<TextField error={true} helperMessage="Oups" />);

  expect(screen.getByText("Oups")).toBeInTheDocument();
  expect(component).toMatchSnapshot();
});
