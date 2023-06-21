export const allRecipes = [
  {
    _id: "1",
    name: "Test Recipe",
    description: "This is a test recipe.",
    instructions: ["Step 1", "Step 2", "Step 3"],
    ingredients: {
      hops: [{ _id: "1", name: "Test Hop", amount: "2" }],
      malts: [{ _id: "2", name: "Test Malt", amount: "3" }],
      yeast: "Test Yeast",
    },
  },
];

export const myRecipes = [
  {
    _id: "2",
    name: "My Test Recipe",
    style: "IPA",
    instructions: "Mix and boil",
    ingredients: {
      hops: [{ name: "My Test Hop", amount: "2" }],
      malts: [{ name: "My Test Malt", amount: "3" }],
      yeast: [{ name: "My Test Yeast", amount: "1" }],
    },
  },
];
