export const getAllRecipe = async ({
  page = 1,
  limit = 10,
  search = "",
  sort = "title",
  sortBy = "asc",
}) => {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/v1/recipes?page=${page}&limit=${limit}&search=${encodeURIComponent(
        search
      )}&sort=${sort}&sortBy=${sortBy}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch recipes");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
