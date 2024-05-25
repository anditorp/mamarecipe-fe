"use client";

import { useState } from "react";
import { Card } from "../index";
import useRecipeStore from "../../stores/useRecipeStore";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("my-recipe");
  const recipes = useRecipeStore((state) => state.recipes);

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
      <div className="grid grid-cols-4 gap-8 px-24">
        {activeTab === "my-recipe" && (
          <>
            {recipes.map((recipe) => (
              <Card
                key={recipe.id}
                image={
                  recipe.image
                    ? URL.createObjectURL(recipe.image)
                    : "/default-image.png"
                }
                title={recipe.title}
              />
            ))}
          </>
        )}
        {activeTab === "saved-recipe" && (
          <>{/* Tampilkan resep yang disimpan di sini */}</>
        )}
        {activeTab === "liked-recipe" && (
          <>{/* Tampilkan resep yang disukai di sini */}</>
        )}
      </div>
    </div>
  );
};

export default Tabs;
