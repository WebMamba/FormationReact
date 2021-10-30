import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from ".";

test("render LoginForm without crashing", () => {
  const rendered = render(<LoginForm />);

  expect(rendered.baseElement).toMatchSnapshot();
});

test("execute onLogin when user click on submit button", () => {
  const mockOnLogin = jest.fn();
  render(<LoginForm onLogin={mockOnLogin} />);

  const inputs = screen.getAllByRole("textbox");
  userEvent.type(inputs[0], "test@test.com");
  userEvent.type(inputs[1], "test");

  const button = screen.getByText("Connexion");
  userEvent.click(button);

  expect(mockOnLogin).toHaveBeenCalledTimes(1);
});
