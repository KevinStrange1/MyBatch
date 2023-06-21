import React, { FC } from "react";
import { MyRecipe } from "../types/MyRecipe";

interface MyRecipeDetailsType {
  selectedRecipe: MyRecipe | null;
}

const MyRecipeDetails: FC<MyRecipeDetailsType> = ({ selectedRecipe }) => {
  return (
    <div className="my-recipe-details">
      <h1>Details</h1>
      {selectedRecipe && (
        <div>
          <h2>
            {selectedRecipe.name}({selectedRecipe.style})
          </h2>

          <h3 className="head">Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients.hops.map((hop, index) => (
              <li className="list" key={index}>
                {hop.name}: {hop.amount}
              </li>
            ))}
            {selectedRecipe.ingredients.malts.map((malt, index) => (
              <li className="list" key={index}>
                {malt.name}: {malt.amount}
              </li>
            ))}
            <li className="list">
              Yeast: {selectedRecipe.ingredients.yeast[0].name},{" "}
              {selectedRecipe.ingredients.yeast[0].amount}
            </li>
          </ul>
          <h3 className="head">Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default MyRecipeDetails;
