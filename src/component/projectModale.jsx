import React, { useState } from "react";

const ProjectModale = ({ projet, open, onClose }) => {
  if (!open) return null;

  const [index, setIndex] = useState(0);
  const isDisabled = !projet.heberger;

  return (
    <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center z-50 md:py-2 transition-opacity duration-200">
      <div className="py-2 px-4 md:px-8 md:py-4 bg-neutral-800 text-white rounded-xl shadow-lg w-11/12 h-11/12 md:w-11/12 relative overflow-y-scroll">
        <div className="relative after2 pb-4 flex justify-between items-center">
          <h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </h1>
          <div>
            <h1 className="font-bold text-xl md:text-2xl mb-2">
              {projet.titre}
            </h1>
            <h2 className="text-xs text-neutral-300">{projet.annee}</h2>
          </div>
          <h1
            className="text-xl bg-neutral-600 rounded-full p-2 cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </h1>
        </div>
        <div className="relative after2 py-4 flex flex-col md:flex-row gap-6 md:gap-10 ">
          <div className="md:w-[70%] ">
            <div className="mb-6 flex items-center justify-between gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() => {
                  if (index > 0) {
                    setIndex(index - 1);
                  }
                }}
                className="size-6 md:size-12 bg-neutral-600 p-1 md:p-2 rounded-xl md:rounded-2xl cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="relative w-[80%] h-75">
                {projet.img.map((image, idx) => {
                  return (
                    <img
                      key={idx}
                      src={image}
                      alt={projet.titre}
                      className={`absolute transition-opacity duration-500 z-10 top-0 left-0 h-full w-full object-contain ${
                        index == idx ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  );
                })}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() => {
                  if (index < 3) {
                    setIndex(index + 1);
                  }
                }}
                className=" size-6 md:size-12 bg-neutral-600 p-1 md:p-2 rounded-xl md:rounded-2xl cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-xl mb-2">TECHNOLIGIES UTILISE</h1>
            <div className="flex gap-3 items-center flex-wrap mb-4">
              {projet.tech.map((tech, index) => {
                return (
                  <h1
                    key={index}
                    className="bg-gray-800 p-2 md:p-3 rounded-3xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1.5"
                  >
                    {tech}
                  </h1>
                );
              })}
            </div>
            <div className="flex items-center gap-4 bg-neutral-700/35 rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-12 p-2 rounded-md text-blue-200 bg-blue-800/80"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h1 className="text-neutral-400 text-xl">ROLE</h1>
                <h1>{projet.role}</h1>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] outline-1 outline-gray-400/10 rounded-xl p-4 bg-neutral-700/35">
            <h1 className="relative after pb-4 text-xl">A propos du projet</h1>
            <p className="pt-4 text-neutral-400">{projet.apropos}</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 py-4">
          <button
            onClick={() => {
              if (!isDisabled) window.open(projet.lien, "_blank");
            }}
            disabled={isDisabled}
            className={`
    flex gap-2 justify-center items-center rounded-md w-35 p-2 transition
    ${
      isDisabled
        ? "bg-blue-400 cursor-not-allowed opacity-60"
        : "bg-blue-400 hover:bg-blue-500 cursor-pointer"
    }
  `}
          >
            Voir le site {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <a
            href={projet.git}
            className="flex gap-2 justify-center items-center rounded-md w-35 outline-1 outline-gray-400 p-2"
          >
            Voir le code{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModale;
