import { render, screen } from "@testing-library/react";
import HelloWorld from "../HelloWorld";

test("render HelloWorld without crashing", () => {
    render(<HelloWorld/>);

    expect(screen.getByText("Bienvenu sur React Arthur !")).toBeInTheDocument();
});