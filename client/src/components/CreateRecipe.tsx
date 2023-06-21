import React, { useState, FC, FormEvent } from "react";
import { postMyRecipe } from "../utils/ApiService";
import { MyRecipe } from "../types/MyRecipe";
import { BeerRecipe } from "../types/BeerRecipe";
import { InputRecipe } from "../types/InputRecipe";

interface CreateRecipeType {
  myRecipes: MyRecipe[];
  allRecipes: BeerRecipe[];
  onData: (data: MyRecipe) => void;
}

const CreateRecipe: FC<CreateRecipeType> = ({ allRecipes, onData }) => {
  const [recipeName, setRecipeName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [hopsName, setHopsName] = useState("");
  const [hopsQuantity, setHopsQuantity] = useState("");
  const [maltsName, setMaltsName] = useState("");
  const [maltsQuantity, setMaltsQuantity] = useState("");
  const [yeastName, setYeastName] = useState("");
  const [yeastQuantity, setYeastQuantity] = useState("");

  const allHops = new Set();
  const allMalts = new Set();
  const allYeast = new Set();

  if (allRecipes) {
    allRecipes.forEach((recipe) => {
      recipe.ingredients.hops.forEach((hop) => {
        allHops.add(hop.name);
      });
      recipe.ingredients.malts.forEach((malt) => {
        allMalts.add(malt.name);
      });
      allYeast.add(recipe.ingredients.yeast);
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipeData: InputRecipe = {
      name: recipeName,
      style: beerStyle,
      instructions: instructions,
      ingredients: {
        hops: [{ name: hopsName, amount: hopsQuantity }],
        malts: [{ name: maltsName, amount: maltsQuantity }],
        yeast: [{ name: yeastName, amount: yeastQuantity }],
      },
    };
    try {
      const savedRecipe = await postMyRecipe(recipeData);
      onData(savedRecipe);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-recipes-form">
      <h2>Release creativity</h2>
      <h2>Create your own recipe</h2>
      <form onSubmit={handleSubmit} className="new-recipe-form">
        <div className="left-side">
          <label htmlFor="recipeName">Name</label>
          <br />
          <input
            id="recipeName"
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="beerStyle">Beer Style</label>
          <br />
          <input
            id="beerStyle"
            type="text"
            value={beerStyle}
            onChange={(e) => setBeerStyle(e.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="instructions">Add Your Instructions here</label>
          <br />
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          ></textarea>
          <br />
        </div>
        <div className="right-side">
          <h3>Ingredients</h3>
          <label htmlFor="hops">Hops</label>
          <select
            id="hops"
            value={hopsName}
            onChange={(e) => setHopsName(e.target.value)}
            required
          >
            <option></option>
            {Array.from(allHops as Set<string>).map((hop) => (
              <option key={hop} value={hop}>
                {hop}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="hopsQuantity">Qty</label>
          <input
            id="hopsQuantity"
            type="text"
            value={hopsQuantity}
            onChange={(e) => setHopsQuantity(e.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="malts">Malts</label>
          <select
            id="malts"
            value={maltsName}
            onChange={(e) => setMaltsName(e.target.value)}
            required
          >
            <option></option>
            {Array.from(allMalts as Set<string>).map((malt) => (
              <option key={malt} value={malt}>
                {malt}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="maltsQuantity">Qty</label>
          <input
            id="maltsQuantity"
            type="text"
            value={maltsQuantity}
            onChange={(e) => setMaltsQuantity(e.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="yeast">Yeast</label>
          <select
            id="yeast"
            value={yeastName}
            onChange={(e) => setYeastName(e.target.value)}
            required
          >
            <option></option>
            {Array.from(allYeast as Set<string>).map((yeast) => (
              <option key={yeast} value={yeast}>
                {yeast}
              </option>
            ))}
          </select>
          <br />
          <label htmlFor="yeastQuantity">Qty</label>
          <input
            id="yeastQuantity"
            type="text"
            value={yeastQuantity}
            onChange={(e) => setYeastQuantity(e.target.value)}
            required
          ></input>
          <button type="submit" className="create-recipe-btn">
            Create Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
