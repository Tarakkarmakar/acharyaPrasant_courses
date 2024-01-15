import React, { Profiler, useState } from "react";
import "../../styles.css";
import acharyaJi from "../../Assets/acharaYa_pic.png";
import { IoMenuSharp, IoCallOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import classNames from "classnames";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
const Navbar = ({ isDrawerOpen, toggleDrawer, closeDrawer }) => {
  const drawerClasses = classNames(
    "fixed",
    "top-0",
    isDrawerOpen ? "right-0" : "right-full",
    "w-full",
    "sm:w-full",
    "md:w-4/12",
    "lg:w-4/12",
    "h-[100vh]",
    "sm:h-[100vh]",
    "md:h-full",
    " lg:h-full",

    "shadow-lg",
    "transition-transform",
    "duration-600",
    "ease-in-out",
    "overflow-y-auto",
    " text-white ",
    "sm:text-white",
    "md:text-gray-600",
    "lg:text-gray-600",
    "z-10",
    "md:pl-10",
    "lg:pl-10"
  );

  return (
    <div
      className={` h-12 flex w-full bg-[#d24115] items-center pl-3 pr-0 sm:pr-3
     md:pr-3  lg:pr-3 z-0`}
    >
      <div
        className={`${isDrawerOpen ? "pointer-events-none blur-[1px]" : "flex"} 
    flex flex-row w-6/12 sm:w-9/12 md:w-12/12 lg:w-8/12 h-full items-center  font-medium`}
      >
        <a href="">
          <img src={acharyaJi} alt="" className="w-8 mr-4" />
        </a>
        <div className="hidden md:flex lg:flex  flex-row w-full content-center h-full ">
          <ul className="flex justify-around text-white w-full  items-stretch text-lg md:text-sm lg:text-[1rem] ">
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span className="m-auto">Home</span>
            </li>
            <li className="flex flex-grow items-center text-wrap hover:bg-[#ea580c] ">
              <span className="m-auto">Live Sessions</span>{" "}
              <TiArrowSortedDown style={{ marginRight: "auto" }} />{" "}
            </li>
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span className="m-auto">Video Series</span>
            </li>
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span className="m-auto">Ap Books</span>
            </li>
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span>Ap Articles</span>
            </li>
            <li className="flex flex-grow items-center  hover:bg-[#ea580c] pr-2">
              <span className="m-auto">Invite</span>
              <TiArrowSortedDown style={{ marginRight: "auto" }} />{" "}
            </li>
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span className="m-auto">In Media</span>
            </li>
            <li className="flex flex-grow items-center hover:cursor-pointer">
              <span className="m-auto">Careers</span>
            </li>
            <li className="flex-grow items-center hidden mid:flex lg:flex">
              <span className="m-auto">Donate</span>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex mr-0 sm:mr-1 md:mr-3  lg:mr-3 w-3/12  items-center text-white
     ml-[10%] sm:ml-auto md:ml-auto lg:ml-auto"
      >
        <ul className="flex justify-between ml-auto sm:ml-auto md:ml-0 lg:ml-auto mr-4 sm:mr-2 md:mr-3  lg:mr-3 items-center w-6/12">
          <li className="flex md:flex lg:flex items-center  hover:cursor-pointer mr-2">
            <div className="w-6 border-white border-2 h-6  font-sm rounded items-center text-center text-[10px] sm:text-[12px] md:text-sm lg:text-sm">
              EN
            </div>{" "}
            <TiArrowSortedDown style={{ marginRight: "auto" }} />
          </li>
          <li className="mr-3 hidden md:block lg:block hover:cursor-pointer">
            <IoCallOutline fontSize="1.5em" color="white" />
          </li>
          <li
            className="flex items-center text-white  hover:cursor-pointer "
            onClick={toggleDrawer}
          >
            <IoMenuSharp fontSize="30PX" color="white"></IoMenuSharp>
            <span className="hidden mid:block lg:block text-sm mr-2 ml-2 font-medium  hover:cursor-pointer ">
              Menu
            </span>
          </li>
        </ul>
      </div>
      {/* drawer */}
      <div className={drawerClasses}>
        <div
          className="p-4  bg-[#ea580c] sm:[#ea580c]
         md:bg-[#ffffff] lg:bg-[#ffffff] relative border-2 border-gray top-0 
         font-medium  "
        >
          <div className="h-20 flex items-center color-white sm:color-white md:color-[#d24115] lg:color-[#d24115]">
            <CgProfile fontSize="3em" color="#d24115" fill="#d24115" />{" "}
            <span className="text-md ml-2">Login</span>
          </div>
          {/* line */}
          <div className="border-1 bg-gray-400 h-[1px] w-9/12"></div>
          <ul className="flex flex-col w-full justify-around h-[40vh] sm:h-[35vh] md:h-[76vh] lg:h-[76vh] ">
            <li>Bhagavad Gita</li>
            <li>Sant Sarita</li>
            <li>Vedant Samhita</li>
            <li>Bodh Pratyusha</li>
            <li>Ap Books</li>
            <li>Ap Articles</li>
            <li>Invite For Talk</li>
            <li>Invite For an Interview</li>
            <li>Media and Public Intaraction</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Donate</li>
          </ul>
          {/* line */}
          <div className="border-1 bg-gray-400 h-[1px] w-9/12"></div>

          <ul className="flex sm:flex md:flex lg:flex flex-col w-full justify-around h-[10vh] sm:h-[12vh] md:h-[25vh] lg:h-[25vh]">
            <li className="font-md"> More</li>
            <li>Prasant advait Foundation</li>
            <li>Ghar Ghar Upanishad</li>
            <li>About Acharya Prasant</li>
          </ul>
        </div>

        <div
          onClick={closeDrawer}
          className="bg-white text-white p-2 absolute top-2 left-[88vw] sm:left-[88vw] md:left-[0px] lg:left-[0px] z-20 rounded-full"
        >
          <RxCross1 color="#d24115" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
