import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const infoItems = [
    "Search",
    "Shipping and delivery",
    "Privacy policy",
    "Inspection report",
    "Cookies",
    "Frequently asked questions",
    "Contact",
    "Subscription policy",
    "See my subscription",
    "Job",
    "Impressum",
  ];
  const aboutItems = [
    "About us",
    "All natural",
    "Sustainability",
    "Responsibility",
    "Our team",
  ];
  const shopItems = [
    "Bars",
    "Bites",
    "Protien",
    "Gift Boxes",
    "Company Gifts",
    "Christmas calendars",
  ];
  return (
    <div className=" bg-[#463126] text-white p-16">
      <div className="text-[0.7em] flex font-bold gap-5">
        <div className="w-2/5 h-5/6  ">
          <h1 className="text-3xl font-extrabold">Say hi!</h1>
          <span className="my-6 block">digital@simplychocolate.dk</span>
          <span className="flex flex-col">
            <span>Simply</span>
            <span>Amager Landevej 123</span>
            <span>2770 Kastrup</span>
            <span>CVR. nr. 32761844</span>
          </span>
          <img className="my-8" src="inspection.svg" alt="" />
        </div>
        <div className="w-1/5">
          <h1 className="text-3xl font-extrabold">Info</h1>
          <div className="flex flex-col">
            {infoItems.map((item) => (
              <span className="my-2">{item}</span>
            ))}
          </div>
        </div>
        <div className="w-1/5">
          <h1 className="text-3xl font-extrabold">About</h1>
          <div className="flex flex-col">
            {aboutItems.map((item) => (
              <span className="my-2">{item}</span>
            ))}
          </div>
        </div>
        <div className="w-1/5">
          <h1 className="text-3xl font-extrabold">Shop</h1>
          <div className="flex flex-col">
            {shopItems.map((item) => (
              <span className="my-2">{item}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex gap-10">
        <FaFacebookF size={25} />
        <FaInstagram size={25} />
      </div>
      <div className="font-blackhan">
        © 2024 - Simply Clone® created by Virender Chauhan
      </div>
    </div>
  );
};

export default Footer;
