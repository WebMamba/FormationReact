import { render, screen } from "@testing-library/react";
import Clock from ".";

test("Clock print the hour and minute", async () => {
  const mockDate = new Date("Octobre 19, 2021 10:24:00");

  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
  jest.spyOn(global, "Date").mockImplementation(() => mockDate);

  render(<Clock />);
  expect(setTimeout).toHaveBeenCalledTimes(1);

  expect(screen.getByText("10:24")).toBeInTheDocument();
});
