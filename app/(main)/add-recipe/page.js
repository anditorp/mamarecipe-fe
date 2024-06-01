"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components/index";
import useRecipeStore from "../../../stores/useRecipeStore";
import { postFormData, postJSON } from "@/utils/utils";

const AddRecipe = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!title || !description || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const newRecipe = {
      title,
      description,
      image:
        "https://res.cloudinary.com/di572l6cq/image/upload/v1717247728/ncx6unysu6trgh53ntnu.jpg",
    };

    try {
      const result = await postJSON("/v1/recipes/", newRecipe);
    } catch (error) {}

    addRecipe(newRecipe);
    setTitle("");
    setDescription("");
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
          label="Description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
