"use client";

import { useState } from "react";
import { Card } from "../index";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("my-recipe");

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
            <Card />
            <Card />
            <Card />
          </>
        )}
        {activeTab === "saved-recipe" && (
          <>
            <Card />
            <Card />
          </>
        )}
        {activeTab === "liked-recipe" && (
          <>
            <Card />
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
