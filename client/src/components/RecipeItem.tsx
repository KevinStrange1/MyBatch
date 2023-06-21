import React, { useState, FC } from "react";
import "../pages/OurRecipesPage.css";
import { BeerRecipe } from "../types/BeerRecipe";
import { Ingredient } from "../types/Ingredient";

const IngredientList: FC<{
  title: string;
  ingredients: Ingredient[];
}> = ({ title, ingredients }) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="ing-ul">
        {ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name} {ingredient.amount}{" "}
            {ingredient.time && `Adding time: ${ingredient.time}`}
          </li>
        ))}
      </ul>
    </>
  );
};

const InstructionList: FC<{ instructions: string[] }> = ({ instructions }) => {
  return (
    <>
      <h2 className="recipe-title">Recipe instructions</h2>
      <ul className="instructions-list">
        {instructions.map((instruction) => (
          <li className="instructions" key={instruction}>
            {instruction}
          </li>
        ))}
      </ul>
    </>
  );
};

interface RecipeItemType {
  recipe: BeerRecipe;
}

const RecipeItem: FC<RecipeItemType> = ({ recipe }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [triangleDirection, setTriangleDirection] = useState("triangle-down");
  const [detailsRender, setDetailsRender] = useState(<></>);

  const handleClick = () => {
    if (isClicked) {
      setIsClicked(false);
      setTriangleDirection("triangle-down");
      setDetailsRender(<></>);
    } else {
      setIsClicked(true);
      setTriangleDirection("triangle-up");
      setDetailsRender(details);
    }
  };

  const details = (
    <div className="ing-details">
      <IngredientList
        title="Hops"
        ingredients={recipe.ingredients.hops as Ingredient[]}
      />
      <IngredientList
        title="Yeast"
        ingredients={[
          {
            _id: "",
            name: recipe.ingredients.yeast,
            amount: "",
          },
        ]}
      />
      <IngredientList
        title="Malts"
        ingredients={recipe.ingredients.malts as Ingredient[]}
      />
      <InstructionList instructions={recipe.instructions} />
    </div>
  );

  return (
    <li key={recipe._id} className="recipe-item">
      <h3 className="recipe-name">{recipe.name}</h3>
      <p className="recipe-description">{recipe.description}</p>
      {detailsRender}
      <div
        className={triangleDirection}
        onClick={handleClick}
        aria-label="dropwdown to show details"
      ></div>
    </li>
  );
};

export default RecipeItem;
