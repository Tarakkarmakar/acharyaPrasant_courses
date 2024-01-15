import React from "react";
import "../../App.css";
import sant from "../../Assets/sant.jpg";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const SantBani = () => {
  return (
    <div className="w-full text-gray-900 mt-9 font-sans ">
      <h2 className="font-medium text-[1.3rem]  md:text-[1.7rem] mb-3">
        संतवाणी
      </h2>

      <div className="flex flex-col justify-between p-1 sm:flex-col md:flex-row lg:flex-row w-full ">
        <div className="flex m-auto sm:m-auto md:mr-3 lg:mr-4 w-10/12 sm:w10/12 md:w-5/12 lg:w-5/12 mr-3 ">
          <img src={sant} alt="" className="w-full rounded-md " />
        </div>
        <div className="flex mt-4 sm:mt-4 md:mt-0 lg:mt-0 flex-col w-11/12 sm:w-10/12 md:w-7/12 lg:w-7/12  m-auto sm:m-auto md:m-0 lg:m-0">
          <h3 className="text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] :lg:font-medium text-black">
            संतों की सीख पर आधारित श्रृंखला
          </h3>
          <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem] mt-1">
            जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को
            पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता
            प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में
            आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई,
            मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए
            उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान
            वीडियो कोर्स में।
          </p>
        </div>
      </div>
      <div>
        <h5 className="hidden md:block lg:block ml-2">Share this series:</h5>
        <div className="hidden md:flex lg:flex w-1/6 justify-between h-[32px]">
          <div className="flex p-2 hover:cursor-pointer hover:bg-[#3e6fa7] text-[#3e6fa7]  hover:text-white h-full w-[32px] rounded-full justify-center items-center">
            <FaFacebookF className=" text-[28px]" />
          </div>
          <div className="flex hover:cursor-pointer p-1 hover:bg-[#08bbee] text-[#08bbee]  hover:text-white h-full w-[32px] rounded-full justify-center items-center">
            <FaTwitter fontSize="28px" />
          </div>
          <div className="flex p-1 hover:cursor-pointer hover:bg-[#06ba27] text-[#06ba27]  hover:text-white h-full w-[32px] rounded-full justify-center items-center">
            <SiWhatsapp fontSize="28px" />
          </div>
          <div className="flex p-2 hover:cursor-pointer hover:bg-[#0a66c2] text-[#0a66c2]  hover:text-white h-full w-[32px] rounded-full justify-center items-center">
            <FaLinkedinIn fontSize="28px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SantBani;
