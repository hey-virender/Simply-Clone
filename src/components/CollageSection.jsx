import React from "react";
import { PiInstagramLogo } from "react-icons/pi";

const CollageSection = () => {
  const items = [
    {
      id: 1,
      url: "collage1.jpg",
    },
    {
      id: 2,
      url: "collage2.jpg",
    },
    {
      id: 3,
      url: "collage3.jpg",
    },
    {
      id: 4,
      url: "collage4.jpg",
    },
    {
      id: 5,
      url: "collage5.jpg",
    },
    {
      id: 6,
      url: "collage6.jpg",
    },
    {
      id: 7,
      url: "collage7.jpg",
    },
    {
      id: 8,
      url: "collage8.jpg",
    },
    {
      id: 9,
      url: "collage9.jpg",
    },
    {
      id: 10,
      url: "collage10.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-5 grid-rows-2 mx-7 h-[80vh] items-center my-12">
      {items.map((item) => (
        <div className="col-span-1 row-span-1 h-full w-full  overflow-hidden relative">
          <div className="absolute h-full w-full bg-black opacity-0 hover:opacity-65 top-0 left-0 transition-all duration-500 ease-in-out">
            <PiInstagramLogo
              size={25}
              className="text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute"
            />
          </div>
          <img
            className="object-cover block aspect-square"
            src={item.url}
            alt={item.url}
          />
        </div>
      ))}
    </div>
  );
};

export default CollageSection;
