import React, { useState, useEffect, FC } from "react";
import {
  createIngredients,
  getAllIngredients,
  deleteIngredientFromDb,
} from "../utils/ApiService";
import "./InventoryPage.css";
import { BeerRecipe } from "../types/BeerRecipe";
import { Ingredient } from "../types/Ingredient";
import IngredientComponent from "../components/IngredientComponent";

interface InventoryPageProps {
  allRecipes: BeerRecipe[] | null;
}

const InventoryPage: FC<InventoryPageProps> = ({ allRecipes }) => {
  const [hops, setHops] = useState<string>("");
  const [grains, setGrains] = useState<string>("");
  const [yeasts, setYeasts] = useState<string>("");
  const [additional, setAdditional] = useState<string>("");
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const allHops = new Set<string>();
  const allMalts = new Set<string>();
  const allYeasts = new Set<string>();

  allRecipes?.forEach((recipe) => {
    recipe.ingredients.hops.forEach((hop) => allHops.add(hop.name));
    recipe.ingredients.malts.forEach((malt) => allMalts.add(malt.name));
    allYeasts.add(recipe.ingredients.yeast);
  });

  const ingredientTypes = {
    hops: Array.from(allHops),
    malts: Array.from(allMalts),
    yeast: Array.from(allYeasts),
    additional: ["Cinnamon Stick", "Ginger Root", "Peach puree"],
  };

  useEffect(() => {
    refreshIngredients();
  }, []);

  const refreshIngredients = async () => {
    const allIngredients = await getAllIngredients();
    setIngredients(allIngredients);
  };

  const deleteIngredient = async (ingredientId: string) => {
    await deleteIngredientFromDb(ingredientId);
    refreshIngredients();
  };

  const addIngredient = async (
    ingredientName: string,
    quantity: string,
    ingredientType: string
  ) => {
    await createIngredients(ingredientName, quantity, ingredientType);
    const newIngredient: Ingredient = {
      _id: "",
      name: ingredientName,
      amount: quantity,
      type: ingredientType,
    };
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };

  const clearSelectedIngredient = () => {
    setHops("");
    setGrains("");
    setYeasts("");
    setAdditional("");
  };

  return (
    <div className="inventory">
      <IngredientComponent
        ingredientType="hops"
        quantity={hops}
        setQuantity={setHops}
        allIngredients={ingredientTypes.hops}
        ingredients={ingredients.filter(
          (ingredient) => ingredient.type === "hops"
        )}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
        clearSelectedIngredient={clearSelectedIngredient}
      />
      <IngredientComponent
        ingredientType="malts"
        quantity={grains}
        setQuantity={setGrains}
        allIngredients={ingredientTypes.malts}
        ingredients={ingredients.filter(
          (ingredient) => ingredient.type === "malts"
        )}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
        clearSelectedIngredient={clearSelectedIngredient}
      />
      <IngredientComponent
        ingredientType="yeast"
        quantity={yeasts}
        setQuantity={setYeasts}
        allIngredients={ingredientTypes.yeast}
        ingredients={ingredients.filter(
          (ingredient) => ingredient.type === "yeast"
        )}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
        clearSelectedIngredient={clearSelectedIngredient}
      />
      <IngredientComponent
        ingredientType="additions"
        quantity={additional}
        setQuantity={setAdditional}
        allIngredients={ingredientTypes.additional}
        ingredients={ingredients.filter(
          (ingredient) => ingredient.type === "additions"
        )}
        addIngredient={addIngredient}
        deleteIngredient={deleteIngredient}
        clearSelectedIngredient={clearSelectedIngredient}
      />
    </div>
  );
};

export default InventoryPage;
