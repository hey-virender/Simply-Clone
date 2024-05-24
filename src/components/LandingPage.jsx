import React from "react";
import Header from "./Header";
import LandingInfo from "./LandingInfo";

const LandingPage = () => {
  return (
    <div className="h-screen">
      <div className="h-[95vw] w-full absolute -z-10">
        <img className="object-cover" src="bg.webp" alt="" />
      </div>
      <Header />
      <LandingInfo />
    </div>
  );
};

export default LandingPage;
