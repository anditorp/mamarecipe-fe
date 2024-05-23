import Image from "next/image";
import FirstImage from "../public/home1.png";
import YellowBlock from "../public/bg-yellow.png";
import { Footer, Navbar, Button, Card } from "@/components/index";

const Home = () => {
  return (
    <div>
      <div className="relative flex flex-col mx-[132px] z-50">
        <Navbar />
        {/* Section One */}
        <div className="flex justify-between my-20 gap-20">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-semibold text-secondary">
              Discover Recipe <br />& Delicious Food
            </h1>
            <label className="input bg-[#EFEFEF] flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow w-full"
                placeholder="Search Recipe"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="w-1/2 flex">
            <Image src={FirstImage} alt="Foto" className="w-full" />
          </div>
        </div>
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
          <div className="w-1/2 flex">
            <Image src={FirstImage} alt="Foto" className="w-full" />
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
                <line
                  y1="1"
                  x2="100"
                  y2="1"
                  stroke="#6F6A40"
                  stroke-width="2"
                />
              </svg>
            </h2>
            <p>
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That’s right!
            </p>
            <Button name="Learn More" className={"w-52 "} />
          </div>
        </div>
        {/* Section Three */}
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
        <div className="flex justify-between mb-20 gap-20">
          <div className="w-1/2 flex">
            <Image src={FirstImage} alt="Foto" className="w-full" />
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
                <line
                  y1="1"
                  x2="100"
                  y2="1"
                  stroke="#6F6A40"
                  stroke-width="2"
                />
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

          <h3 className="text-tertiary font-semibold"> Popular Recipe</h3>
        </div>
        <div className="grid grid-cols-3 gap-8 px-24 mb-32">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
