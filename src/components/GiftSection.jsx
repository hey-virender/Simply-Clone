import React from "react";

const GiftSection = () => {
  const giftItems = [
    {
      id: 1,
      url: "gift1.webp",
      info: "For festive occasions",
    },
    {
      id: 2,
      url: "gift2.webp",
      info: "For the Birthday Party",
    },
    {
      id: 3,
      url: "gift3.webp",
      info: "For the hostess",
    },
  ];
  return (
    <div className="my-8 text-center">
      <h1
        className="text-2xl font-bold scale-y-125 mb-5 font-blackhan
      "
      >
        The gift for any occasion
      </h1>
      <div className="text-xs border-black border-b-[0.7px] w-fit mx-auto mb-12">
        Explore our gift universe
      </div>
      <div className="flex justify-around">
        {giftItems.map((item) => (
          <div key={item.id} className="w-[30%] relative">
            <img src={item.url} alt={item.id} />
            <div className="absolute bottom-12 mx-auto left-1/2  -translate-x-1/2 border-white border-[1px] text-white text-xs px-2 py-1 font-semibold rounded-sm hover:bg-white hover:text-black">
              {item.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiftSection;
