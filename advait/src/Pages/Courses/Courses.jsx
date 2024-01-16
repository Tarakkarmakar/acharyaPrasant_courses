import React, { useEffect } from "react";
import Banner from "../../Components/NewYearBanner/Banner";
import SearchVideo from "../../Components/VideoSearch_sec/SearchVideo";
import SantBani from "../../Components/SantBani_sec/SantBani";
import Faq from "../../Components/Faq/Faq";

const Courses = ({ isDrawerOpen, closeDrawer }) => {
  console.log(isDrawerOpen);
  return (
    <div className="flex flex-col">
      <Banner />

      <SearchVideo />

      <SantBani />
   <Faq />
    </div>
  );
};

export default Courses;
