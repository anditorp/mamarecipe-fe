import React from "react";
import { Input, Button } from "@/components/index";

const AddRecipe = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="max-w-[90%] lg:max-w-[1300px] w-full mb-10 px-4">
        <Input
          id="file-upload"
          label=" "
          placeholder="image"
          type="file"
          className="h-[200px] lg:h-[480px] text-center bg-[#F6F5F4] border-none"
        />
        <Input
          label=" "
          placeholder="Title"
          className="h-[60px] lg:h-[100px] text-center bg-[#F6F5F4] border-none mt-4 lg:mt-0"
        />
        <Input
          label=" "
          placeholder="Ingredients"
          className="h-[200px] lg:h-[480px] text-center bg-[#F6F5F4] border-none mt-4 lg:mt-0"
        />
      </div>
      <div className="max-w-[90%] lg:max-w-[1300px] w-full mb-20 px-4">
        <Button className="w-full" />
      </div>
    </section>
  );
};

export default AddRecipe;
