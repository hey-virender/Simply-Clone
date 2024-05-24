import React from "react";

const SpecialChocolates = () => {
  const items = [
    { id: 1, url: "vegan.webp", heading: "Vegan chocolate" },
    { id: 2, url: "glutenfree.webp", heading: "Gluten-free chocolate" },
  ];
  return (
    <div className="mb-12">
      <h1 className="text-center font-bold text-3xl mb-20 font-blackhan">
        Looking for vegan or gluten-free chocolate?
      </h1>
      <div className="flex justify-around">
        {items.map((item) => (
          <div key={item.id} className="w-[45%] relative">
            <img src={item.url} alt={item.id} />
            <div className="absolute bottom-[8vw] text-white left-1/2 -translate-x-1/2 text-center">
              <div className="font-bold text-2xl scale-y-125 w-fit">
                {item.heading}
              </div>
              <div className="text-sm mt-4">See the selection</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialChocolates;
