import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWikipediaW,
  FaYoutube,
} from "react-icons/fa";
import "../../App.css";
import applestore from "../../Assets/ic_appstore.png";
import googlepl from "../../Assets/ic_googleplay.png";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-[#0f172a] max-h-max ">
      <div
        className="grid grid-cols-1 sm:grid-cols-1 font-semibold gap-3 md:grid-cols-6 lg:grid-cols-6
    p-2 gap-2 lg:flex-row  text-white mb-10"
      >
        <div className="p-6  flex flex-col gap-2  ">
          <div className="text-[1rem]">LIVE EVENTS</div>

          <div>Bhagavad Gita</div>
          <div>Sant Sarita</div>
          <div>Vedant Samhita</div>
          <div>Bodh Pratyusha</div>
        </div>
        <div className="p-6 flex flex-col gap-2 ">
          <div className="text-[1rem]">WISDOM CONTENT</div>
          <div>Video Series</div>
          <div>AP Books</div>
          <div>AP Articles</div>
          <div>AP Circle</div>
        </div>
        <div className="p-6   flex flex-col gap-2">
          <div className="text-[1rem]">MORE</div>
          <div> About Acharya Prashant</div>
          <div>Invite Him</div>
          <div>Interview Him</div>
          <div>Ghar Ghar Upanishad</div>
          <div>Media and Public Interaction</div>
        </div>

        <div className="p-6   flex flex-col gap-2">
          <div className="text-[1rem]">SOCIAL MEDIA</div>

          <div className="mt-3">For English</div>
          <div className="flex justify-between w-8/12 text-white">
            <FaYoutube className=" hover:cursor-pointer" />{" "}
            <FaTwitter className=" hover:cursor-pointer" />
            <FaFacebook className=" hover:cursor-pointer" />{" "}
            <FaInstagram className=" hover:cursor-pointer" />
            <FaWikipediaW className=" hover:cursor-pointer" />
          </div>
          <div className="mt-3">For Hindi</div>
          <div className="flex justify-between w-8/12 text-white">
            <FaYoutube className=" hover:cursor-pointer" />{" "}
            <FaTwitter className=" hover:cursor-pointer" />
            <FaFacebook className=" hover:cursor-pointer" />{" "}
            <FaInstagram className=" hover:cursor-pointer" />
            <FaWikipediaW className=" hover:cursor-pointer" />
          </div>
        </div>

        <div className="p-6   flex flex-col gap-2">
          <div>DOWNLOAD APP</div>
          <div>Acharya Prasant</div>
          <div>
            {" "}
            <img
              src={googlepl}
              className="w-8/12 mt-1 mb-3 hover:cursor-pointer"
            />
          </div>
          <div>
            <img
              src={applestore}
              className="w-8/12 mt-1 mb-3 hover:cursor-pointer"
              alt=""
            />
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>

        <div className="p-6  flex flex-col gap-2">
          <div>CONTACT US</div>
          <div>support@advait.org.in</div>
          <div className="flex items-center">
            <IoCall /> <span className="ml-1">+91 9650585100</span>
          </div>
          <div className="flex items-center">
            <FaWhatsapp /> <span className="ml-1">+91 9650585100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
