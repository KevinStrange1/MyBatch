import { render, screen, fireEvent } from "@testing-library/react";
import OurRecipesPage from "../pages/OurRecipesPage";
import { allRecipes } from "./mockData";

describe("OurRecipesPage", () => {
  it("renders recipe list correctly", () => {
    render(<OurRecipesPage allRecipes={allRecipes} />);

    expect(
      screen.getByText("Here are some of our most popular recipes")
    ).toBeInTheDocument();
    expect(screen.getByText("Test Recipe")).toBeInTheDocument();
    expect(screen.getByText("This is a test recipe.")).toBeInTheDocument();
  });

  it("shows ingredient and instruction details when a recipe is clicked", () => {
    render(<OurRecipesPage allRecipes={allRecipes} />);

    fireEvent.click(screen.getByText("Test Recipe"));

    expect(screen.getByText("Hops")).toBeInTheDocument();
    expect(screen.getByText("Test Hop 2")).toBeInTheDocument();
    expect(screen.getByText("Yeast")).toBeInTheDocument();
    expect(screen.getByText("Test Yeast")).toBeInTheDocument();
    expect(screen.getByText("Malts")).toBeInTheDocument();
    expect(screen.getByText("Test Malt 3")).toBeInTheDocument();
    expect(screen.getByText("Recipe instructions")).toBeInTheDocument();
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
  });
});
