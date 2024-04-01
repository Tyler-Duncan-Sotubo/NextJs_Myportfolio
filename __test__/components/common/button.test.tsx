import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/button";

describe("button", () => {
  it("should show, icon, text and color", () => {
    render(<Button name="Name Prop" icon="Icon prop" color="Color prop" />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
