import { render, screen } from "@testing-library/react";
import ErrorMessage from ".";

jest.useFakeTimers();

test("show on open and disapear after 5s", () => {
  render(<ErrorMessage open={true} message="test" />);

  expect(screen.getByText("test")).toBeInTheDocument();

  jest.runOnlyPendingTimers();
  expect(screen.queryAllByAltText("test")).toEqual([]);
});
