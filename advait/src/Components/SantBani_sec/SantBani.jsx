import React, { useEffect, useState } from "react";
import "../../App.css";
import sant from "../../Assets/sant.jpg";
import { SiWhatsapp } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
const SantBani = () => {
  const [courseSeriesDetails, setCourseSeriesDetails] = useState(null);
  const [mappedCourses, setMappedCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3"
        );
        const data = await response.json();

        // Extract course series details
        setCourseSeriesDetails(data.details);

        // Extract course information
        const coursesArray = data.courses;
        const mappedCoursesData = coursesArray.map((course) => {
          const { id, title, subtitle, language, amount, courseHours } = course;
          return {
            courseId: id,
            title,
            subtitle,
            language,
            amount,
            duration: courseHours,
          };
        });

        setMappedCourses(mappedCoursesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const IconWithText = ({ text }) => {
    return (
      <div className="flex items-center">
        <FaRegBookmark />
        <span className="ml-2">Bhag{text}</span>
      </div>
    );
  };
  console.log(mappedCourses, courseSeriesDetails);
  return (
    <div className="w-full text-gray-900 mt-9 font-sans ">
      <h2 className="font-medium text-[1.3rem]  md:text-[1.7rem] lg:text-[1.7rem]  mb-3">
        {courseSeriesDetails ? courseSeriesDetails.title : "Title"}
      </h2>

      <div className="flex flex-col justify-between p-1 sm:flex-col md:flex-row lg:flex-row w-full ">
        <div className="flex m-auto sm:m-auto md:mr-3 lg:mr-4 w-10/12 sm:w10/12 md:w-5/12 lg:w-5/12 mr-3 ">
          <img src={sant} alt="" className="w-full rounded-md " />
        </div>
        <div className="flex mt-4 sm:mt-4 md:mt-0 lg:mt-0 flex-col w-11/12 sm:w-10/12 md:w-7/12 lg:w-7/12  m-auto sm:m-auto md:m-0 lg:m-0">
          <h3 className="text-[0.9rem] sm:text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] :lg:font-medium text-black">
            {courseSeriesDetails ? courseSeriesDetails.subtitle : "Sub-Title"}
          </h3>
          <p className="text-[0.7rem] sm:text-[0.8rem] md:text-[1rem] lg:text-[1rem] mt-1">
            {courseSeriesDetails
              ? courseSeriesDetails.description
              : "Description goes here"}
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
      <h2 className="ml-2 text-[1rem]  md:text-[1.1rem] lg:text-[1.2rem] mt-2">
        Video Series ({" "}
        {courseSeriesDetails ? courseSeriesDetails.coursesCount : "0"} )
      </h2>
      <div className="border-1 bg-gray-400 h-[1px] w-11/12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
        {mappedCourses.map((course, index) => (
          <div className="p-2 flex flex-col " key={course.courseId}>
            <IconWithText text={index + 1} />
            <h3
              className="font-medium text-[0.9rem] sm:text-[0.8rem] md:text-[1.2rem] 
            lg:text-[1.2rem] text-gray-800 mt-2"
            >
              {course.title}
            </h3>
            <p
              className="text-gray-500 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] 
            lg:text-[1rem] "
            >
              {course.subtitle}
            </p>
            <span
              className="text-gray-500 mt-2 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] 
            lg:text-[1rem]"
            >
              Duration:{course.duration}H
            </span>
            <span
              className="text-gray-500 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] 
            lg:text-[1rem]"
            >
              Contribution:{course.amount}
            </span>
            <div
              className="flex w-10 h-6 text-[12px] items-center bg-[#c7e6f8] rounded-md 
     border-2 border-gray-300"
            >
              <span className="m-auto">{course.language}</span>
            </div>
            <div
              className="text-red-400 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] 
            lg:text-[1rem]"
            >
              <button className="mr-3">ADD TO CART |</button>
              <button>ENROLL</button>
            </div>
            <div className="border-1 bg-gray-400 h-[1px] w-11/12 mt-5 mb-3"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SantBani;
