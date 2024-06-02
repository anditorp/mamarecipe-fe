"use client";

import { useState } from "react";
import { Card } from "../index";
import useSWR from "swr";
import { useRouter } from "next/navigation";

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    cache: "no-cache",
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("my-recipe");
  const router = useRouter(); // Initialize useRouter

  const handleNavigate = (id) => {
    router.push(`/${id}`); // Gunakan router.push untuk navigasi
  };

  const {
    data: myRecipes,
    error: myRecipesError,
    isLoading: myRecipesLoading,
  } = useSWR("/v1/recipes/self", fetcher);
  const {
    data: savedRecipesData,
    error: savedRecipesError,
    isLoading: savedRecipesLoading,
  } = useSWR("/v1/recipes/save", fetcher);
  const {
    data: likedRecipesData,
    error: likedRecipesError,
    isLoading: likedRecipesLoading,
  } = useSWR("/v1/recipes/like", fetcher);

  if (myRecipesLoading || savedRecipesLoading || likedRecipesLoading)
    return <p>Loading...</p>;
  if (myRecipesError || savedRecipesError || likedRecipesError)
    return <p>Error loading recipes</p>;

  return (
    <div className="flex flex-col gap-8 py-24">
      <div role="tablist" className="tabs w-fit px-24">
        <a
          role="tab"
          className={`tab font-medium text-2xl ${
            activeTab === "my-recipe"
              ? "tab-active text-black"
              : "text-[#666666]"
          }`}
          onClick={() => setActiveTab("my-recipe")}
        >
          My Recipe
        </a>
        <a
          role="tab"
          className={`tab font-medium text-2xl ${
            activeTab === "saved-recipe"
              ? "tab-active text-black"
              : "text-[#666666]"
          }`}
          onClick={() => setActiveTab("saved-recipe")}
        >
          Saved Recipe
        </a>
        <a
          role="tab"
          className={`tab font-medium text-2xl ${
            activeTab === "liked-recipe"
              ? "tab-active text-black"
              : "text-[#666666]"
          }`}
          onClick={() => setActiveTab("liked-recipe")}
        >
          Liked Recipe
        </a>
      </div>

      <div className="w-full h-[1px] bg-[#DFDFDF]"></div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-24">
        {activeTab === "my-recipe" &&
          myRecipes?.data?.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => handleNavigate(item.id)}
            />
          ))}
        {activeTab === "saved-recipe" &&
          savedRecipesData?.data?.map((item) => (
            <Card
              key={item.recipe.id}
              image={item.recipe.image}
              title={item.recipe.title}
            />
          ))}
        {activeTab === "liked-recipe" &&
          likedRecipesData?.data.map((item) => (
            <Card
              key={item.recipe.id}
              image={item.recipe.image}
              title={item.recipe.title}
            />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
