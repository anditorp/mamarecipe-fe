export const addRecipe = async (form) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/recipes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add recipe");
  }

  return await response.json();
};
