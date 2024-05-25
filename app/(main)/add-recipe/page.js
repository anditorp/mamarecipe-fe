"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components/index";
import useRecipeStore from "../../../stores/useRecipeStore";

const AddRecipe = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!title || !ingredients || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      image,
    };
    addRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setImage(null);
  };

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-[90%] lg:max-w-[1300px] w-full mb-10 px-4">
        <Input
          id="file-upload"
          label="Upload Image"
          type="file"
          onChange={handleFileChange}
          className="h-[200px] lg:h-[480px] text-center bg-[#F6F5F4] border-none"
        />
        <Input
          label="Title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-[60px] lg:h-[100px] text-center bg-[#F6F5F4] border-none mt-4 lg:mt-0"
        />
        <Input
          label="Ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="h-[200px] lg:h-[480px] text-center bg-[#F6F5F4] border-none mt-4 lg:mt-0"
        />
      </div>
      <div className="max-w-[90%] lg:max-w-[1300px] w-full mb-20 px-4">
        <Button onClick={handleSubmit} className="w-full" name="Add Recipe" />
      </div>
    </section>
  );
};

export default AddRecipe;
