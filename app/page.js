import React from "react";
import Image from "next/image";
import { getRecipe } from "@/service/recipe";
import { Footer, Navbar, Button, Card, Search } from "@/components/index";

const Home = async () => {
  const { data } = await getRecipe();

  return (
    <div>
      <div className="z-10">
        <Navbar />
      </div>

      <div className="relative mx-4 sm:mx-[132px]">
        {/* Section One */}
        <div className="flex flex-col sm:flex-row justify-between items-center my-20 gap-10 sm:gap-20 z-10">
          <div className="w-full sm:w-1/2 flex flex-col justify-center items-center text-center sm:text-left">
            <h1 className="font-semibold text-secondary text-4xl sm:text-5xl">
              Discover Recipe <br />& Delicious Food
            </h1>
          </div>
          <div className="w-full sm:w-1/2 flex relative h-[300px] sm:h-[500px]">
            <Image
              src="/home1.png"
              alt="Foto"
              className="w-full h-full object-cover rounded-3xl"
              layout="fill"
            />
          </div>
        </div>

        {/* Section Two */}
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-20 mb-20">
          <svg
            width="25"
            height="140"
            viewBox="0 0 25 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="140" fill="#EFC81A" />
          </svg>
          <h3 className="text-tertiary font-semibold text-2xl sm:text-3xl">
            New For You!
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20 mb-20">
          <div className="w-full sm:w-1/2 flex relative h-[300px] sm:h-[500px]">
            <Image
              src="/popular-recipe.png"
              alt="Foto"
              className="w-full h-full object-cover rounded-3xl"
              layout="fill"
            />
          </div>
          <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4">
            <h2 className="font-semibold text-tertiary text-xl sm:text-2xl">
              Healthy Bone Broth Ramen (Quick & Easy)
              <svg
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <line y1="1" x2="100" y2="1" stroke="#6F6A40" strokeWidth="2" />
              </svg>
            </h2>
            <p className="text-sm sm:text-base">
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Button name="Learn More" className="w-36 sm:w-52" />
          </div>
        </div>

        {/* Card Section */}
        <div className="flex items-center gap-10 mb-10">
          <svg
            width="25"
            height="140"
            viewBox="0 0 25 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="25" height="140" fill="#EFC81A" />
          </svg>
          <h3 className="text-tertiary font-semibold text-2xl sm:text-3xl">
            Popular Recipe
          </h3>
        </div>
        <div className="my-10">
          <Search placeholder="Search Recipe" className="w-full sm:w-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-32">
          {data.map((item) => (
            <Card key={item.id} image={item.image} title={item.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
