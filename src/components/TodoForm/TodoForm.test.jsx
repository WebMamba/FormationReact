import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from ".";

test("test TodoForm show error when filling bad value", () => {
  render(<TodoForm />);

  const input = screen.getByRole("textbox");
  userEvent.type(input, "l");

  const button = screen.getByText("Ajouter");
  userEvent.click(button);

  expect(screen.getByText("C'est un peu court")).toBeInTheDocument();

  userEvent.type(input, "lol");
  userEvent.click(button);

  expect(screen.queryByText("C'est un peu court")).toBeNull();
});
