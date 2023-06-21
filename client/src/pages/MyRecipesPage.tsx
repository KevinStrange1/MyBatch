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
    setSelectedRecipe((prevSelectedRecipe) => {
      if (prevSelectedRecipe === childData) {
        return null;
      } else {
        return childData;
      }
    });
  };

  return (
    <div className="my-recipe-container">
      <h1>Release creativity Create your own recipe</h1>
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
          selectedRecipe={selectedRecipe}
          onData={handleSelectionFromChild}
        />
      </div>
    </div>
  );
};

export default MyRecipesPage;
