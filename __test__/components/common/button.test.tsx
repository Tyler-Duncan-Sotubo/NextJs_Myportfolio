import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "@/components/common/button";

describe("button should show, icon, text and color", () => {
  it("should show all props", () => {
    render(<Button name="Name Prop" icon="Icon prop" color="Color prop" />);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});
