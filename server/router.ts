import { getAllIngredients } from './controllers/getAllIngredients';
import { createIngredients } from './controllers/createIngredients';
import { deleteIngredient } from './controllers/deleteIngredient';
import { getOurRecipes } from './controllers/getOurRecipes';
import { getMyRecipes } from './controllers/getMyRecipes';
import { postMyRecipe } from './controllers/postMyRecipe';
import { postOurRecipe } from './controllers/postOurRecipe';
import express from 'express';
import { ingredientValidator } from './validators/ingredientValidator';
import { myRecipeValidator } from './validators/myRecipeValidator';
import { ourRecipeValidator } from './validators/ourRecipeValidator';

const router = express.Router();

router.get("/inventory", getAllIngredients);
router.post("/inventory", ingredientValidator, createIngredients);
router.delete("/inventory/:id", deleteIngredient);
router.get("/our-recipes", getOurRecipes);
router.get("/my-recipes", getMyRecipes);
router.post("/my-recipes", myRecipeValidator, postMyRecipe);
router.post('/our-recipes', ourRecipeValidator, postOurRecipe);

export { router };