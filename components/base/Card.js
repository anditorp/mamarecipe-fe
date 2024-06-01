import React from "react";

const Card = ({ image, title, ...props }) => {
  return (
    <div
      {...props}
      className="w-[500px] h-[500px] flex flex-col justify-end items-start p-6 rounded-xl bg-cover"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <p className="w-1/2 font-bold text-3xl text-black">{title}</p>
    </div>
  );
};

export default Card;
