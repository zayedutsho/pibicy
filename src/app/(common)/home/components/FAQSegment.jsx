"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const FAQItem = ({ question, answer, isOpen, onClick, index, length }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  // Conditional border logic
  const borderClasses =
    index === length - 1
      ? "border-y" // Last item has full borders
      : "border-t"; // Other items only have top border

  return (
    <div className={`md:p-4 flex flex-col items-stretch bg-white ${borderClasses} border-gray-200`}>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-black text-left md:text-xl font-medium"
        style={{ padding: "0.5rem" }}
      >
        <span>{question}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <div className="p-2 rounded-full border border-[#363636]">
            <AiOutlinePlus className="text-black" size={20} />
          </div>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out text-black text-[15px] md:text-[16px] leading-[1.3rem] px-4 mb-[6px] md:pb-[0px]`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "How does Pibicy work?",
      answer:
        "Our team creates custom solutions aligned with your goals, ensuring growth and return on investment. We use the latest technology to stay ahead.",
    },
    {
      question: "Is Pibicy Free?",
      answer:
        "You can have as many requests as your plan allows. Contact us for more details.",
    },
    {
      question: "Does Pibicy work well with large teams?",
      answer:
        "Typical turnaround time is between 24 to 48 hours depending on the project scope.",
    },
    {
      question: "How to create a new account?",
      answer:
        "You can pause your subscription at any time and resume when you’re ready.",
    },
  ];

  const length = faqData.length;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[55rem] mx-auto md:p-4 mt-[-20px] md:mt-[0px]">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
          index={index}
          length={length}
        />
      ))}
    </div>
  );
};

export default FAQ;
