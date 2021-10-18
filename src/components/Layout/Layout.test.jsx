import { render, screen } from "@testing-library/react";
import Layout from ".";

test("render Layout and children", () => {
  render(
    <Layout>
      <p>Test</p>
    </Layout>
  );

  expect(screen.getByText("Test")).toBeInTheDocument();
});
