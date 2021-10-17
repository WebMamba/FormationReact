import { render, screen } from "@testing-library/react";
import HelloWorld from ".";

test("render HelloWorld without crashing", () => {
    render(<HelloWorld/>);

    expect(screen.getByText("Bienvenu sur React Arthur !")).toBeInTheDocument();
});

test("test HelloWorld with snapshot", () => {
    const component = render(<HelloWorld/>);

    expect(component).toMatchSnapshot();
});