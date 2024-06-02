"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "@/components/index";

const DetailRecipe = ({ params }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recipeDetails, setRecipeDetails] = useState(null);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/v1/recipes/${params.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        setError("Delete recipe failed");
        toast.error(error);
        setLoading(false);
        return;
      }

      const res = await response.json();
      setRecipeDetails(res.data);

      toast.success(`Delete recipe success`);
      console.log(res.data);
      router.push("/profile");
    } catch (err) {
      setError(err.message);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getRecipeDetails = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/v1/recipes/${params.id}`, {
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
      setRecipeDetails(res.data);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main>
      {recipeDetails && (
        <section className="flex flex-col items-center my-20">
          <div>
            <h1 className="text-secondary mb-10 max-sm:text-[32px] ">
              {recipeDetails.title}
            </h1>
          </div>
          <div className="flex">
            <img
              src={recipeDetails.image}
              alt="RecipeImage"
              className="w-[800px] h-[800px] rounded-3xl object-cover"
            />
          </div>
        </section>
      )}

      {recipeDetails && (
        <section>
          <div className="mx-auto w-1/2 mb-20">
            <h3 className="lg:text-6xl max-sm:text-4xl text-tertiary font-semibold mb-8">
              Description
            </h3>
            <p className="text-lg lg:text-4xl max-sm:text-base font-medium text-tertiary mb-3">
              {recipeDetails.description}
            </p>
          </div>
        </section>
      )}
      <div className="flex justify-end my-10 mx-10 gap-5">
        <Button
          name="Delete Recipe"
          onClick={handleDelete}
          className="bg-[#ef1a1a]"
        />
        <Button
          name="Edit Recipe"
          // onClick={handleDelete}
          className="bg-[#7b7b7b]"
        />
      </div>
    </main>
  );
};

export default DetailRecipe;
