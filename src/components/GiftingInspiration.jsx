import React from "react";
import Card from "./Card";

const GiftingInspiration = () => {
  const items = [
    {
      id: 1,
      url: "inspiration1.webp",
      info: "Mix chocolate bites",
      heading: "Premium Box - Exclusive gift box with 50 bites",
      price: "$100",
    },
    {
      id: 2,
      url: "inspiration2.webp",
      info: "Mix chocolate bestsellers",
      heading: "Premium Heartbox - Exclusive gift box with 40 bites",
      price: "$80",
    },
    {
      id: 3,
      url: "inspiration3.webp",
      info: "Mix chocolate bites",
      heading: "The Ultimate Box - Exclusive gift box with 80 bites",
      price: "$140",
    },
  ];
  return (
    <div className="my-28 ">
      <h1 className="text-center text-3xl font-bold mb-16 font-blackhan">
        Inspiration for chocolate gifts
      </h1>
      <div className="flex">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GiftingInspiration;
