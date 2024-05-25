import create from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  getRecipes: () => set((state) => state.recipes),
}));

export default useRecipeStore;
