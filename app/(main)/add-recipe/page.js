"use client";

import React, { useEffect, useState } from "react";
import { Input, Button } from "@/components/index";
import useRecipeStore from "../../../stores/useRecipeStore";
import { postFormData, postJSON, putJSON } from "@/service/addRecipe";

const AddRecipe = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProcessingData, setIsProcessingData] = useState(false);

  useEffect(() => {
    if (image) {
      setImagePreview(URL.createObjectURL(image));
    }
  }, [image]);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!title || !description || !image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }
    setIsProcessingData(true);

    const newRecipe = {
      title,
      description,
      image: "",
    };

    try {
      const result = await postJSON("/v1/recipes/", newRecipe);
      if (result.status == "success") {
        const imageResult = await postFormData("/v1/upload", {
          file: image,
        });
        if (imageResult.status == "success") {
          const finalResult = await putJSON("/v1/recipes/" + result.data.id, {
            ...newRecipe,
            image: imageResult.data.file_url,
          });
          if (finalResult.status == "success") {
            alert("Add Recipe Success");
          }
        }
      }
    } catch (error) {
      alert("Something went wrong");
      console.log(error);
    } finally {
      setIsProcessingData(false);
    }

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
        {imagePreview && (
          <div
            style={{
              padding: "1rem",
              width: "480px",
            }}
          ></div>
        )}
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
        <Button
          onClick={handleSubmit}
          className="w-full"
          name={isProcessingData ? "Please Wait" : "Add Recipe"}
          disabled={isProcessingData}
        />
      </div>
    </section>
  );
};

export default AddRecipe;
