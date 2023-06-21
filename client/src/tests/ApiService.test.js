import {
  createIngredients,
  getAllIngredients,
  getOurRecipes,
  deleteIngredientFromDb,
  getMyRecipes,
  postMyRecipe,
} from "../utils/ApiService";
import { API_BASE_URL } from "./config";

const url = API_BASE_URL;

describe("API Functions", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("getAllIngredients", () => {
    it("should fetch and return ingredients", async () => {
      const mockResponse = [{ id: 1, name: "Ingredient 1" }];
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const ingredients = await getAllIngredients();

      expect(ingredients).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(`${url}/inventory`);
    });

    it("should log an error if fetch fails", async () => {
      const mockError = new Error("Fetch failed");
      global.fetch.mockRejectedValueOnce(mockError);
      console.log = jest.fn();

      await getAllIngredients();

      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe("createIngredient", () => {
    it("should send a POST request with the ingredient data", () => {
      const ingName = "Ingredient 1";
      const ingAmount = "10";
      const ingType = "Type 1";

      createIngredients(ingName, ingAmount, ingType);

      expect(global.fetch).toHaveBeenCalledWith(`${url}/inventory`, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: ingName,
          amount: ingAmount,
          type: ingType,
        }),
      });
    });
  });

  describe("getOurRecipes", () => {
    it("should fetch and return recipes", async () => {
      const mockResponse = [{ id: 1, name: "Recipe 1" }];
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const recipes = await getOurRecipes();

      expect(recipes).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(`${url}/our-recipes`);
    });

    it("should log an error if fetch fails", async () => {
      const mockError = new Error("Fetch failed");
      global.fetch.mockRejectedValueOnce(mockError);
      console.log = jest.fn();

      await getOurRecipes();

      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });

  describe("deleteIngredient", () => {
    it("should send a DELETE request with the ingredient ID", async () => {
      const ingredientId = "123";

      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce({ success: true }),
      });

      await deleteIngredientFromDb(ingredientId);

      expect(global.fetch).toHaveBeenCalledWith(
        `${url}/inventory/${ingredientId}`,
        {
          method: "DELETE",
          mode: "cors",
        }
      );
    });

    it("should log an error if fetch fails", async () => {
      const ingredientId = "123";
      const mockError = new Error("Fetch failed");
      global.fetch.mockRejectedValueOnce(mockError);
      console.error = jest.fn();

      await deleteIngredientFromDb(ingredientId);

      expect(console.error).toHaveBeenCalledWith("Error:", mockError);
    });
  });

  describe("getMyRecipes", () => {
    it("should fetch and return recipes", async () => {
      const mockResponse = [{ id: 1, name: "Recipe 1" }];
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
        ok: true,
      });

      const recipes = await getMyRecipes();

      expect(recipes).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });

    it("should throw an error if fetch fails", async () => {
      const mockError = new Error("Failed to fetch recipes");
      global.fetch.mockRejectedValueOnce(mockError);

      await expect(getMyRecipes()).rejects.toThrow("Failed to fetch recipes");
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });

    it("should throw an error if response is not OK", async () => {
      const mockResponse = { error: "Failed to fetch recipes" };
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
        ok: false,
      });

      await expect(getMyRecipes()).rejects.toThrow("Failed to fetch recipes");
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });
  });

  describe("getMyRecipes", () => {
    it("should fetch and return recipes", async () => {
      const mockResponse = [{ id: 1, name: "Recipe 1" }];
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
        ok: true,
      });

      const recipes = await getMyRecipes();

      expect(recipes).toEqual(mockResponse);
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });

    it("should throw an error if fetch fails", async () => {
      const mockError = new Error("Fetch failed");
      global.fetch.mockRejectedValueOnce(mockError);

      await expect(getMyRecipes()).rejects.toThrow("Fetch failed");
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });

    it("should throw an error if not OK", async () => {
      const mockResponse = { error: "Failed to fetch recipes" };
      global.fetch.mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
        ok: false,
      });

      await expect(getMyRecipes()).rejects.toThrow("Failed to fetch recipes");
      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`);
    });
  });

  describe("postMyRecipe", () => {
    it("should send POST request with the recipe data", () => {
      const recipeData = {
        name: "My Recipe",
        ingredients: ["Ingredient 1", "Ingredient 2"],
      };

      postMyRecipe(recipeData);

      expect(global.fetch).toHaveBeenCalledWith(`${url}/my-recipes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recipeData),
      });
    });

    it("should log an error if fetch fails", async () => {
      const recipeData = {
        name: "My Recipe",
        ingredients: ["Ingredient 1", "Ingredient 2"],
      };
      const mockError = new Error("Fetch failed");
      global.fetch.mockRejectedValueOnce(mockError);
      console.log = jest.fn();

      await postMyRecipe(recipeData);

      expect(console.log).toHaveBeenCalledWith(mockError);
    });
  });
});
