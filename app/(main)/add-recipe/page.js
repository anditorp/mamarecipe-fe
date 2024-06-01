"use client";

import React, { useState } from "react";
import { Input, Button } from "@/components/index";
import { postFormData } from "@/utils/utils";

const AddRecipe = ({ toast, setError }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    try {
      setLoading(true);

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`/v1/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setError("Upload image failed");
        toast.error("Upload image failed");
        setLoading(false);
        return;
      }

      const res = await response.json();
      const { file_url } = res.data;
      setImage(file_url);
      toast.success(`Upload image success`);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = {
        title,
        description,
        image,
      };

      const response = await fetch(`/v1/recipes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError("Add recipe failed");
        return;
      }

      // Optionally update UI optimistically
      setTitle("");
      setDescription("");
      setImage(null);
      toast.success(`Recipe added successfully`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-[90%] lg:max-w-[1300px] w-full mb-10 px-4">
        <Input
          id="file-upload"
          label="Upload Image"
          type="file"
          onChange={handleUpload}
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
