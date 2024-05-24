import React from "react";

const Card = ({ item }) => {
  return (
    <div className="w-full flex flex-col items-center select-none mx-2">
      <div className="bg-gray-200 mx-16">
        <img
          className="object-cover aspect-video "
          src={item.url}
          alt={item.id}
        />
      </div>

      <span className="text-gray-500 text-xs font-light mb-2">{item.info}</span>
      <h1 className="font-semibold text-sm mb-2">{item.heading}</h1>
      <span className="text-sm text-gray-400 font-semibold">{item.price}</span>
    </div>
  );
};

export default Card;
