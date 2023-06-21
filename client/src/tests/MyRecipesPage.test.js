import { render, screen, fireEvent } from "@testing-library/react";
import MyRecipesPage from "../pages/MyRecipesPage";
import { allRecipes, myRecipes } from "./mockData";

describe("MyRecipesPage", () => {
  it("renders recipe form correctly", () => {
    render(<MyRecipesPage myRecipes={myRecipes} allRecipes={allRecipes} />);

    expect(
      screen.getByText("Release creativity, create your own recipe")
    ).toBeInTheDocument();
    expect(screen.getByText("Ingredients")).toBeInTheDocument();
    expect(screen.getByText("Your recipe list")).toBeInTheDocument();
  });

  it("shows recipe details when a recipe is clicked", async () => {
    render(<MyRecipesPage myRecipes={myRecipes} allRecipes={allRecipes} />);

    const listItem = screen.getByText("My Test Recipe");
    fireEvent.click(listItem);

    const recipeName = screen.getByText("My Test Recipe(IPA)");
    const ingredientsHeading = screen.getByText("Ingredients:");
    const hopText = screen.getByText("My Test Hop: 2");
    const maltText = screen.getByText("My Test Malt: 3");
    const yeastText = screen.getByText("Yeast: My Test Yeast, 1");
    const instructionsHeading = screen.getByText("Instructions:");
    const instructionsText = screen.getByText("Mix and boil");

    expect(recipeName).toBeInTheDocument();
    expect(ingredientsHeading).toBeInTheDocument();
    expect(hopText).toBeInTheDocument();
    expect(maltText).toBeInTheDocument();
    expect(yeastText).toBeInTheDocument();
    expect(instructionsHeading).toBeInTheDocument();
    expect(instructionsText).toBeInTheDocument();
  });
});
