import React, { useState } from "react";

const Environment = () => {
  const items = [
    {
      id: 1,
      url: "africa.webp",
      heading: "Our friends in Africa",
      info: "Greenhouse Project",
      description:
        "In a greenhouse near a cocoa plantation close to San Pédro in Ivory Coast, a group of local women cultivate vegetables and fruits. It's not possible to grow vegetables and fruits in that area due to soil conditions, lack of water, and the heat. But with our greenhouse, the right soil, and water supply, we have contributed to a nourishing future for our cocoa farmers and their families.",
    },
    {
      id: 2,
      url: "solarpanel.webp",
      heading: "We love the sun",
      info: "Solar panels",
      description:
        "Normally, the sun is one of chocolate's worst enemies – both sunlight and the heat from its rays can damage chocolate. But at Simply Chocolate in Copenhagen, the two are actually best friends. We've installed our very own solar panel system on the roof of the factory. This means that we are 100% self-sufficient with energy when the sun is shining.",
    },
    {
      id: 3,
      url: "environment.webp",
      heading: "Our green journey",
      info: "Environment",
      description:
        "It is quite understandable that there is a significant focus on packaging when discussing the environment and recycling, and at Simply Chocolate, we are constantly working towards our goal of 100% recyclable packaging. We are on a mission. Imagine an edible wrapper - that is, no waste. We're not quite there yet, but we're on our way, and until we reach our goal, we're doing everything we can to improve more and more.",
    },
  ];
  const [currItem, setCurrItem] = useState(0);
  const handelChange = (id) => {
    setCurrItem(id);
  };
  return (
    <div className="my-8 px-7">
      <div className=" flex justify-between ">
        <div className="w-2/4">
          <img className="w-[45vw] h-[90vh]" src={items[currItem].url} alt="" />
        </div>
        <div className="w-2/4 flex flex-col justify-end mb-20">
          <span className="font-bold text-sm mb-3">{items[currItem].info}</span>
          <h1 className="font-semibold scale-y-125 mb-6 font-blackhan">
            {items[currItem].heading}
          </h1>
          <p className="text-xs font-light">{items[currItem].description}</p>
        </div>
      </div>
      <div className="flex gap-4 mx-auto justify-center font-semibold text-sm my-4 cursor-pointer">
        {["Greehouse", "Solar Panels", "Environment"].map((item, index) => (
          <span
            className={
              currItem == index
                ? "text-md border-black border-b-2 text-black"
                : "text-gray-500 text-sm"
            }
            key={index}
            onClick={() => {
              handelChange(index);
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="font-bold font-blackhan my-16 text-center text-2xl">
        Follow us on @simplychocolatecph
      </div>
    </div>
  );
};

export default Environment;
