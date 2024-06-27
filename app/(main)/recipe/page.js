"use client";
import React, { useState, useEffect } from "react";
import { getAllRecipe } from "@/service/allRecipe";
import { Card, Search } from "@/components/index";
import { useRouter } from "next/navigation";

const Recipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [loading, setLoading] = useState(false);

  const handleNavigate = (id) => {
    router.push(`/${id}`);
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const { data, totalPages } = await getAllRecipe({
          page: currentPage,
          limit: 10,
          search: searchTerm,
          sortBy: sortDirection,
          sort: "title",
        });
        setRecipes(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchTerm, currentPage, sortDirection]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset currentPage to 1 when searchTerm changes
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = () => {
    const newSortDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newSortDirection);
  };

  return (
    <div className="relative flex flex-col mx-4 sm:mx-8 md:mx-12 lg:mx-[50px]">
      <div className="flex items-center gap-4 sm:gap-10 mb-6 sm:mb-10">
        <svg
          width="25"
          height="140"
          viewBox="0 0 25 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="25" height="140" fill="#EFC81A" />
        </svg>
        <h3 className="text-tertiary font-semibold text-lg sm:text-xl">
          All Recipes
        </h3>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-6 sm:mb-10 justify-center">
        <Search
          placeholder="Search Recipe"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="btn" onClick={handleSortChange}>
          Sort by Title {sortDirection === "asc" ? "▲" : "▼"}
        </button>
      </div>

      <div className="my-4">
        <div className="flex flex-row gap-3 sm:gap-5 justify-center">
          <button
            className="btn"
            onClick={() => handlePaginationClick(currentPage - 1)}
            disabled={currentPage === 1 || loading}
          >
            ◀
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn ${currentPage === index + 1 ? "btn-active" : ""}`}
              onClick={() => handlePaginationClick(index + 1)}
              disabled={loading}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="btn"
            onClick={() => handlePaginationClick(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
          >
            ▶
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 mb-8">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          recipes.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              onClick={() => handleNavigate(item.id)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Recipes;
