import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectModale from "./projectModale";
import ListeProjets from "../assets/ListeProjets/liste";

const Projets = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [projet, setProjet] = useState();

  return (
    <div
      id="projet"
      className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center bg-transparent text-gray-900 dark:text-white"
    >
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn">
        {t("projects.sectionTitle")}
      </h1>

      <div className="flex flex-col md:flex-row gap-15 flex-wrap justify-center items-center">
        {ListeProjets.map((value, index) => (
          <div
            key={index}
            className={`w-10/12 md:w-[30%] h-[550px] flex flex-col rounded-3xl transition-all duration-300 ${"bg-gray-200 border border-slate-300/70 shadow-[0_4px_20px_rgba(0,0,0,0.08),_0_20px_50px_rgba(15,23,42,0.18)] dark:border-transparent dark:shadow-none dark:bg-black/30"} ${
              index % 2 === 0 ? "fadeIn3" : "fadeIn2"
            }`}
          >
            <img
              className="w-full h-1/3 object-contain rounded-t-3xl"
              src={value.img[0]}
              alt={`capture ${value.titre}`}
            />

            <div className="after4 relative flex flex-col flex-1 gap-6 pt-3 px-3 pb-6 md:px-6">
              <div className="flex gap-3 items-center flex-wrap">
                {value.tech.map((tech, i) => (
                  <h1
                    key={i}
                    className="bg-white/80 backdrop-blur-sm text-indigo-600 border border-indigo-100 font-medium text-xs md:text-sm p-2 md:px-3 md:py-1.5 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-300/80 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-900"
                  >
                    {tech}
                  </h1>
                ))}
              </div>

              {/* 🌟 TITRE : text-slate-800 (un anthracite profond, moins agressif que le noir pur) */}
              <h1 className="font-bold text-xl md:text-3xl text-slate-800 dark:text-white transition-colors">
                {value.titre}
              </h1>

              <p className="text-slate-600 dark:text-gray-400 flex-1 overflow-hidden">
                {t(`projects.${value.id}.description`)}
              </p>
            </div>

            <button
              onClick={() => {
                setProjet(value);
                setIsOpen(true);
              }}
              className="mt-auto flex gap-2 items-center text-lg text-pink-500 p-3 md:p-6 cursor-pointer"
            >
              {t("common.viewProject")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12 0A.75.75 0 0 1 3.75 3h4.5a.75.75 0 0 1 0 1.5H5.56l3.97 3.97a.75.75 0 0 1-1.06 1.06L4.5 5.56v2.69a.75.75 0 0 1-1.5 0v-4.5Zm11.47 11.78a.75.75 0 1 1 1.06-1.06l3.97 3.97v-2.69a.75.75 0 0 1 1.5 0v4.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1 0-1.5h2.69l-3.97-3.97Zm-4.94-1.06a.75.75 0 0 1 0 1.06L5.56 19.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}

        <ProjectModale
          projet={projet}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};

export default Projets;
