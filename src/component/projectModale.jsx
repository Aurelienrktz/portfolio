import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ProjectModale = ({ projet, open, onClose }) => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  if (!open || !projet) return null;

  const isDisabled = !projet.heberger;

  return (
    <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center z-50 md:py-2 transition-opacity duration-200">
      <div className="py-2 px-4 md:px-8 md:py-4 bg-neutral-800 text-white rounded-xl shadow-lg w-11/12 h-11/12 md:w-11/12 relative overflow-y-scroll">
        <div className="relative after2 pb-4 flex justify-between items-center">
          <h1
            onClick={onClose}
            className="text-xl bg-neutral-600 rounded-full p-2 cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
          >
            ✕
          </h1>
          <div>
            <h1 className="font-bold text-xl md:text-2xl mb-2">
              {projet.titre}
            </h1>
            <h2 className="text-xs text-neutral-300">
              {t(`projects.${projet.id}.year`)}
            </h2>
          </div>
        </div>

        <div className="relative after2 py-4 flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="md:w-[70%]">
            <div className="mb-6 flex items-center justify-between gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() => index > 0 && setIndex(index - 1)}
                className="size-6 md:size-12 bg-neutral-600 p-1 md:p-2 rounded-xl md:rounded-2xl cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="relative w-[80%] h-75">
                {projet.img.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={projet.titre}
                    className={`absolute transition-opacity duration-500 z-10 top-0 left-0 h-full w-full object-contain ${
                      index === idx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={() =>
                  index < projet.img.length - 1 && setIndex(index + 1)
                }
                className="size-6 md:size-12 bg-neutral-600 p-1 md:p-2 rounded-xl md:rounded-2xl cursor-pointer hover:bg-neutral-700 hover:scale-115 transition-all duration-300"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h1 className="text-xl mb-2">{t("projects.techUsed")}</h1>
            <div className="flex gap-3 items-center flex-wrap mb-4">
              {projet.tech.map((tech, i) => (
                <h1
                  key={i}
                  className="bg-gray-800 p-2 md:p-3 rounded-3xl hover:bg-gray-900 transition-all duration-300 hover:-translate-y-1.5"
                >
                  {tech}
                </h1>
              ))}
            </div>

            <div className="flex items-center gap-4 bg-neutral-700/35 rounded-md p-2">
              <div>
                <h1 className="text-neutral-400 text-xl">
                  {t("projects.role")}
                </h1>
                <h1>{t(`projects.${projet.id}.role`)}</h1>
              </div>
            </div>
          </div>

          <div className="md:w-[30%] outline-1 outline-gray-400/10 rounded-xl p-4 bg-neutral-700/35">
            <h1 className="relative after pb-4 text-xl">
              {t("projects.aboutProject")}
            </h1>
            <p className="pt-4 text-neutral-400">
              {t(`projects.${projet.id}.about`)}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 py-4">
          <button
            onClick={() => !isDisabled && window.open(projet.lien, "_blank")}
            disabled={isDisabled}
            className={`flex gap-2 justify-center items-center rounded-md w-35 p-2 transition ${
              isDisabled
                ? "bg-blue-400 cursor-not-allowed opacity-60"
                : "bg-blue-400 hover:bg-blue-500 cursor-pointer"
            }`}
          >
            {t("projects.viewSite")}
          </button>

          <a
            href={projet.git}
            className="flex gap-2 justify-center items-center rounded-md w-35 outline-1 outline-gray-400 p-2"
          >
            {t("projects.viewCode")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModale;
