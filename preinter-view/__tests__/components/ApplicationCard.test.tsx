import React from "react";
import { render, screen } from "@testing-library/react";
import ApplicationCard from "../../components/Application/ApplicationCard";
import "@testing-library/jest-dom";

const defaultProps = {
  applicationId: "123",
  imageUrl: "https://example.com/image.jpg",
  name: "My Application",
  contentType: "Game",
  rating: 4,
  ratingCount: 100,
};

describe("ApplicationCard", () => {
  it("render the component with the correct data", () => {
    render(<ApplicationCard {...defaultProps} />);

    expect(screen.getByText("My Application")).toBeInTheDocument();
    expect(screen.getByText("Game")).toBeInTheDocument();
    expect(screen.getByText("(100)")).toBeInTheDocument();
    expect(screen.getByAltText("Application Image")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
  });
});
