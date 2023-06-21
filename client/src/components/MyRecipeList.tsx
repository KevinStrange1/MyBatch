import React, { FC, useState } from "react";
import { MyRecipe } from "../types/MyRecipe";
import MyRecipeDetails from "./MyRecipeDetails";

interface MyRecipesListProps {
  myRecipes: MyRecipe[];
  selectedRecipe: MyRecipe | null;
  onData: (data: MyRecipe) => void;
}

const MyRecipeList: FC<MyRecipesListProps> = ({ myRecipes, onData }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<MyRecipe | null>(null);

  const handleSelection = (recipe: MyRecipe) => {
    setSelectedRecipe((prevSelectedRecipe) => {
      if (prevSelectedRecipe === recipe) {
        return null;
      } else {
        onData(recipe);
        return recipe;
      }
    });
  };

  return (
    <div className="my-recipe-list">
      <h2>Your recipe list</h2>
      <ul className="my-recipes">
        {myRecipes.map((recipe: MyRecipe) => (
          <li
            className={`your-list-li ${
              selectedRecipe && selectedRecipe._id === recipe._id
                ? "selected"
                : ""
            }`}
            key={recipe._id}
            onClick={() => handleSelection(recipe)}
          >
            <div
              className={`triangle-${
                selectedRecipe && selectedRecipe._id === recipe._id
                  ? "up"
                  : "down"
              }`}
            />
            <span className="my-recipe-name">
              {recipe.name}
              <br />
            </span>
            <span className="my-recipe-style">{recipe.style}</span>
            {selectedRecipe && selectedRecipe._id === recipe._id && (
              <MyRecipeDetails selectedRecipe={recipe} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRecipeList;
