import React from "react";
import SearchVideoIC from "../../Assets/ic_videoseries.png";
import { IoIosSearch } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import "../../App.css";
const SearchVideo = () => {
  return (
    <div className="w-full h-[48px] flex items-center border-2 border-gray-200 p-1 pr-7">
      <div className="flex justify-between items-center w-8/12 ">
        <div>
          <img src={SearchVideoIC} alt="" className="w-[6rem] h-6/12 " />
        </div>

        <div className="hidden sm:hidden md:flex lg:flex flex-row items-center ml-4 w-6/12 mr-auto">
          <div
            className="flex items-center justify-center w-12 h-8 border-2 font-medium 
               text-gray-600 border-gray-200 text-[12px] rounded-md"
          >
            <span>All</span> <TiArrowSortedDown />
          </div>
          <div className="h-9 w- border-2 border-gray-200 flex w-full p-1 rounded-md">
            <input
              type="text"
              className="border-0 h-full w-full focus:outline-none"
            />
          </div>

          <button className="flex bg-[#fed7aa] items-center justify-center h-8 w-12 rounded-md text-black font-medium">
            <IoIosSearch fontSize="1.2rem" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto">
        <div className="flex sm:flex md:hidden lg:hidden">
          <IoIosSearch fontSize="1.2rem" />
        </div>

        <button className="bg-[#d24115] flex p-1 text-white text-[1em] font-sm rounded-md ml-3">
          Login
        </button>
      </div>
    </div>
  );
};

export default SearchVideo;
