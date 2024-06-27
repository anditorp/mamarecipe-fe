import React from "react";

const Card = ({ image, title, ...props }) => {
  return (
    <div
      {...props}
      className="relative cursor-pointer w-full h-[300px]  max-sm:h-[350px] max-md:h-[350px] max-lg:h-[300px] max-xl:h-[300px] max-2xl:h-[500px] bg-cover bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-6 py-4 ">
        <p className="text-white text-xl font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
