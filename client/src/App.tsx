import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import InventoryPage from "./pages/InventoryPage";
import OurRecipesPage from "./pages/OurRecipesPage";
import HowToBrew from "./pages/HowToBrewPage";
import MyRecipesPage from "./pages/MyRecipesPage";
import Homepage from "./pages/HomePage";
import { getOurRecipes, getMyRecipes } from "./utils/ApiService";
import { useState, useEffect, FC } from "react";
import { BeerRecipe } from "./types/BeerRecipe";
import { MyRecipe } from "./types/MyRecipe";
import ErrorPage from "./pages/ErrorPage";

const App: FC = () => {
  const [allRecipes, setAllRecipes] = useState<BeerRecipe[]>([]);
  const [myRecipes, setMyRecipes] = useState<MyRecipe[]>([]);
  useEffect(() => {
    try {
      getOurRecipes().then((fetchedRecipes: BeerRecipe[]) => {
        setAllRecipes(fetchedRecipes);
      });
    } catch (err) {
      console.log('Server Error, Failed to Retrieve OurRecipes');
      console.error(err);
    }
    try {
      getMyRecipes().then((fetchedMyRecipes: MyRecipe[]) => {
        setMyRecipes(fetchedMyRecipes);
      });
    } catch (err) {
      console.log('Server Error, Failed to Retrieve myRecipes');
      console.error(err);
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/inventory"
          element={<InventoryPage allRecipes={allRecipes} />}
        ></Route>
        <Route
          path="/our-recipes"
          element={<OurRecipesPage allRecipes={allRecipes} />}
        ></Route>
        <Route
          path="/my-recipes"
          element={
            <MyRecipesPage
              allRecipes={allRecipes}
              myRecipes={myRecipes}
            />
          }
        ></Route>
        <Route
          path="/how-to-brew"
          element={<HowToBrew />}
        ></Route>
      </Routes>
      <Route
        path="/error"
        element={<ErrorPage />}
      ></Route>
    </div>
  );
};

export default App;
