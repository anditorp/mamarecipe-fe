import React from "react";
import { Input, Button } from "@/components/index";

const addRecipe = () => {
  return (
    <section className="flex flex-col items-center ">
      <div className="w-[1300px] mb-10">
        <Input
          id="file-upload"
          label=" "
          placeholder="image"
          type="file"
          className="h-[480px] text-center bg-[#F6F5F4] border-none "
        />
        <Input
          label=" "
          placeholder="Tittle"
          className="h-[100px] text-center bg-[#F6F5F4] border-none "
        />
        <Input
          label=" "
          placeholder="Ingredients"
          className="h-[480px] text-center bg-[#F6F5F4] border-none  "
        />
      </div>
      <div className="w-[1300px] mb-20">
        <Button className="w-full" />
      </div>
    </section>
  );
};

export default addRecipe;
