"use client"; // For client-side rendering in Next.js
import { useState } from "react";



const Collapsible = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white px-2 rounded-xl border border-[#D3D3D3]">
      {/* Collapsible Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between text-[#212121] text-base text-start py-4 px-2 border-b-[1px] border-[#D3D3D3] font-semibold focus:outline-none"
      >
        <span>{title}</span>
        <div className="min-w-4 h-4 overflow-hidden">
          <svg
            className={`w-full h-full transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div className="my-2 p-4 text-[#4D4D4D]">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapsible;
