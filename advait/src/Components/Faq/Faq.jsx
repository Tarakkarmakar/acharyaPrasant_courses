import React, { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

import "../../App.css";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Fetch data
    fetch(
      "https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi"
    )
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error fetching FAQs:", error));
  }, []);
  return (
    <div
      className="flex flex-row justify-around flex-col sm:flex-col md:flex-row lg:flex-row
     text-gray-700 mb-8 font-medium"
    >
      <div className="flex flex-col w-11/12 sm:w-10/12 md:w-3/12 lg:w-3/12 p-5">
        <h2>FAQs</h2>
        <p className="text-[12px] sm:text-[14px] md:text-[0.9rem] lg:text-[1rem]">
          Can’t find the answer you’re looking for? Reach out to our
          <span> support </span>team.
        </p>
      </div>
      <div className="flex flex-col w-11/12 sm:w-10/12 md:w-6/12 lg:w-6/12  mr-5">
        <div
          className="w-full text-[10px] sm:text-[12px] md:text-[0.7rem] lg:text-[0.9rem] 
         "
        >
          {faqs
            ? faqs.map((faq, index) => (
                <Accordion
                  key={index}
                  sx={{
                    margin: 0,
                    backgroundColor: "transparent",
                    fontWeight: "700",
                    color: "#555",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    {faq.question}
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    {faq.answer}
                  </AccordionDetails>
                </Accordion>
              ))
            : <h2>Faq</h2>}
        </div>
      </div>
    </div>
  );
};

export default Faq;
