import React from "react";
import CollectionCards from "./CollectionCards";

const CollectionsPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center mt-6 mb-20 font-blackhan">
        Små chokoladebites til sæsonens fester
      </h1>
      <CollectionCards />
      <div className="flex justify-center items-center h-[3vw] w-[15vw] bg-orange-900 text-white font-semibold rounded mx-auto mt-8 text-xs">
        See the Collection
      </div>
    </div>
  );
};

export default CollectionsPage;
