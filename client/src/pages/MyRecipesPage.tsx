import React, { useEffect, useState, FC } from "react";
import CreateRecipe from "../components/CreateRecipe";
import MyRecipeDetails from "../components/MyRecipeDetails";
import { MyRecipe } from "../types/MyRecipe";
import { BeerRecipe } from "../types/BeerRecipe";
import MyRecipeList from "../components/MyRecipeList";
import "./MyRecipesPage.css";

interface MyRecipesPageProps {
  myRecipes: MyRecipe[];
  allRecipes: BeerRecipe[];
}

const MyRecipesPage: FC<MyRecipesPageProps> = ({ myRecipes, allRecipes }) => {
  const [allMyRecipes, setMyRecipes] = useState(myRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState<MyRecipe | null>(null);

  useEffect(() => {
    setMyRecipes(myRecipes);
  }, [myRecipes]);

  const handleRecipeFromChild = (childData: MyRecipe) => {
    setMyRecipes((prevRecipes) => [...prevRecipes, childData]);
  };

  const handleSelectionFromChild = (childData: MyRecipe) => {
    setSelectedRecipe(childData);
  };

  return (
    <div className="my-recipe-container">
      <div className="create-recipe">
        <CreateRecipe
          myRecipes={myRecipes}
          allRecipes={allRecipes}
          onData={handleRecipeFromChild}
        />
      </div>
      <div className="my-recipe-list-page">
        <MyRecipeList
          myRecipes={allMyRecipes}
          onData={handleSelectionFromChild}
        />
      </div>
      <div className="my-recipe-details-page">
        <MyRecipeDetails selectedRecipe={selectedRecipe} />
      </div>
    </div>
  );
};

export default MyRecipesPage;
