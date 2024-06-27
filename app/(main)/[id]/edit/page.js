"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/index";
// import NoNavbarLayout from "./noNavbarLayout";

const EditRecipe = (params) => {
  const router = useRouter();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeDetails, setRecipeDetails] = useState({
    title: "",
    description: "",
    image: "",
  });

  const getRecipeDetails = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/v1/recipes/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      });

      if (!response.ok) {
        throw new Error("Get recipe details failed");
      }

      const res = await response.json();
      setRecipeDetails(res.data || { title: "", description: "", image: "" });
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const response = await fetch(`/v1/recipes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeDetails),
      });

      if (!response.ok) {
        throw new Error("Update recipe failed");
      }

      toast.success(`Recipe updated successfully`);
      router.push(`/profile`);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      <section className="flex flex-col items-center my-20">
        <div>
          <h1 className="text-secondary mb-10 max-sm:text-[32px] ">
            Edit Recipe
          </h1>
        </div>
        <form onSubmit={handleSave} className="w-full max-w-lg">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={recipeDetails.title}
              onChange={(e) =>
                setRecipeDetails({ ...recipeDetails, title: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={recipeDetails.description}
              onChange={(e) =>
                setRecipeDetails({
                  ...recipeDetails,
                  description: e.target.value,
                })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              id="image"
              type="text"
              value={recipeDetails.image}
              onChange={(e) =>
                setRecipeDetails({ ...recipeDetails, image: e.target.value })
              }
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-end">
            <Button name="Save Recipe" type="submit" className="bg-[#7b7b7b]" />
          </div>
        </form>
      </section>
    </main>
  );
};

// EditRecipe.Layout = NoNavbarLayout;

export default EditRecipe;
