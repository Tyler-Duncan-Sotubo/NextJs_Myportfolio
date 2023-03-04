import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Contact } from "@/components/home/Contact";

describe("contact from", () => {
  it("should render the fields", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("name");
    expect(nameInput).toBeInTheDocument();
  });
});
