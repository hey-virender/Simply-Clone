import React from "react";
import Navbar from "./Navbar";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between py-4 text-white hover:bg-white hover:text-black px-4 transition-all ease-in-out duration-300">
      <div className="logo font-blackhan scale-y-[2] text-lg">SIMPLY</div>
      <Navbar />
      <div className="flex items-center gap-2">
        <select
          name="region"
          id="region"
          className="font-medium bg-transparent "
          defaultValue={"INT"}
        >
          <option value="INT">INT</option>
          <option value="DK">DK</option>
          <option value="DE">DE</option>
        </select>
        <div>
          <HiMagnifyingGlass />
        </div>
        <div>
          <BsHandbag />
        </div>
      </div>
    </div>
  );
};

export default Header;
