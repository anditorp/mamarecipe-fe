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

      <div className="relative flex flex-col mx-[132px]">
        {/* Section One */}
        <div className="flex justify-between my-20 gap-20 z-10">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-semibold text-secondary">
              Discover Recipe <br />& Delicious Food
            </h1>
          </div>
          <div className="w-1/2 flex relative h-[500px] ">
            <Image
              src="/home1.png"
              alt="Foto"
              className="w-full h-full object-cover  rounded-3xl"
              fill
            />
          </div>
        </div>
        {/* <div className="flex justify-end -mt-[810px] z-0">
          <img src="/bg-yellow.png" alt="LoginImg" className="flex flex-col" />
        </div> */}
        {/* Section Two */}
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

          <h3 className="text-tertiary font-semibold"> Popular For You!</h3>
        </div>
        <div className="flex justify-between mb-20 gap-20">
          <div className="w-1/2 flex relative h-[500px]">
            <Image
              src="/popular-recipe.png"
              alt="Foto"
              className="w-full h-full object-cover rounded-3xl"
              fill
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center gap-10">
            <h2 className="font-semibold text-tertiary">
              Healthy Bone Broth Ramen (Quick & Easy)
              <svg
                width="100"
                height="2"
                viewBox="0 0 100 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="1" x2="100" y2="1" stroke="#6F6A40" strokeWidth="2" />
              </svg>
            </h2>
            <p>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Button name="Learn More" className={"w-52 "} />
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

          <h3 className="text-tertiary font-semibold"> New Recipe</h3>
        </div>
        <div className=" my-10">
          <Search placeholder="Search Recipe" className="" />
        </div>
        <div className="grid grid-cols-3 gap-[200px]  mb-32">
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
