import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="after sticky top-0 z-50 w-full p-3 md:p-5 backdrop-blur-md shadow-2xl fadeIn">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 bg-gray-500 rounded-md p-1 hover:bg-gray-700 transition-all duration-300"
        >
          <path
            fillRule="evenodd"
            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className=" font-semibold text-xl leading-tight">
          Rakotozanaka Aurelien
        </h1>
      </div>
    </div>
  );
};

export default Header;
