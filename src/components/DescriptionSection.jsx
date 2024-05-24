import React from "react";

const DescriptionSection = () => {
  return (
    <div className="mt-16 text-center">
      <h1 className="font-bold text-3xl font-blackhan">It's all natural</h1>
      <p className="w-[70%] mx-auto text-xs my-3 font-light">
        At Simply, we only use natural ingredients, steering clear of synthetic
        powders and artificial additives. We're a bit picky when it comes to our
        ingredients. We only use the best nature has to offer – taste and
        quality mean everything to us. Always. We spend a lot of time searching
        for new and exciting flavors, and we're willing to go to great lengths
        for new innovative opportunities, but we never compromise on good taste.
        This is our love for natural chocolate.
      </p>
      <div className="border-black border-b-[0.7px] w-[10.5vw] mx-auto mb-14 text-xs font-light">
        Read more here
      </div>
      <div className="h-[90vh] w-[90vw] mx-auto my-20">
        <video
          src="description.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default DescriptionSection;
