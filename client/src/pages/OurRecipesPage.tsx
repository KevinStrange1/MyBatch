import React, { FC } from "react";
import "./OurRecipesPage.css";
import { BeerRecipe } from "../types/BeerRecipe";
import RecipeItem from "../components/RecipeItem";

interface OurRecipesPageProps {
  allRecipes: BeerRecipe[];
}

const OurRecipesPage: FC<OurRecipesPageProps> = ({ allRecipes }) => {
  return (
    <div className="our-recipes">
      <div className="recipe-list containers">
        <h1>Here are some of our most popular recipes</h1>
        <ul className="ourRecipes">
          {allRecipes.map((recipe) => (
            <RecipeItem recipe={recipe} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurRecipesPage;
