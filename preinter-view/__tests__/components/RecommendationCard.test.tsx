import React from "react";
import { render, screen } from "@testing-library/react";
import RecommendationCard from "../../components/Recommendation/RecommendationCard";
import "@testing-library/jest-dom";

const defaultProps = {
  imageUrl: "https://example.com/image.jpg",
  name: "My Recommendation",
  contentType: "Game",
};

describe("RecommendationCard", () => {
  it("render the component with the correct data", () => {
    render(<RecommendationCard {...defaultProps} />);

    expect(screen.getByText("My Recommendation")).toBeInTheDocument();
    expect(screen.getByText("Game")).toBeInTheDocument();
    expect(screen.getByAltText("Recommendation Image")).toHaveAttribute(
      "src",
      "https://example.com/image.jpg"
    );
  });
});
