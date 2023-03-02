import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "@/pages";
import "@testing-library/jest-dom";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

jest.mock("@/components/common/nav/Nav", () => ({
  Nav: () => <main data-testid="Nav">Nav</main>,
}));

jest.mock("@/components/home/About", () => ({
  About: () => <main data-testid="About">About</main>,
}));

jest.mock("@/components/home/Footer", () => ({
  Footer: () => <main data-testid="Footer">Footer</main>,
}));

jest.mock("@/components/home/Hero", () => ({
  Hero: () => <main data-testid="Hero">Hero</main>,
}));

jest.mock("@/components/home/Projects", () => ({
  Projects: () => <main data-testid="Projects">Projects</main>,
}));

jest.mock("@/components/home/Skills", () => ({
  Skills: () => <main data-testid="Skills">Skills</main>,
}));

describe("ChildComponent component", () => {
  it("should be in the document", () => {
    mockAllIsIntersecting(true);
    render(<Home />);
    const navComponent = screen.getByTestId("Nav");
    const heroComponent = screen.getByTestId("Hero");
    const aboutComponent = screen.getByTestId("About");
    const projectsComponent = screen.getByTestId("Projects");
    const skillsComponent = screen.getByTestId("Skills");
    const footerComponent = screen.getByTestId("Footer");

    expect(navComponent).toBeInTheDocument();
    expect(heroComponent).toBeInTheDocument();
    expect(aboutComponent).toBeInTheDocument();
    expect(projectsComponent).toBeInTheDocument();
    expect(skillsComponent).toBeInTheDocument();
    expect(footerComponent).toBeInTheDocument();
  });
});
