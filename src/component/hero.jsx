import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../assets/translation/translation";
import BackgroundParticles from "../assets/backgroundParticles";

const Hero = () => {
  const { t } = useTranslation();

  const words = t("hero.roles", { returnObjects: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="w-screen h-[50vh] min-h-[500px] md:h-150 relative">
          <BackgroundParticles />
        </div>

        <div className="absolute p-4 pt-0 inset-0 flex flex-col justify-center items-center gap-8 md:gap-10 text-center fadeIn z-10">
          <h1 className="typing md:h-20 text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl leading-tight">
            {t("hero.welcome")}
          </h1>

          <h2
            className={`font-black text-2xl md:text-4xl tracking-wide min-h-[40px] ${words[index].color_c} dark:${words[index].color_s}`}
          >
            {words[index].label}
          </h2>

          <div className="flex justify-items-center gap-4">
            <a
              onClick={() => {
                const projet = document.getElementById("projet");
                projet?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-white text-center font-medium bg-blue-500 dark:bg-blue-600 p-1.5 md:px-2 md:py-3 rounded-xl cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-500 hover:-translate-y-1.5 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("hero.projects")}
            </a>

            <a
              className="flex items-center gap-1 font-medium text-center border  border-blue-500 dark:border-blue-400 text-slate-900 dark:text-white p-1.5 md:px-2 md:py-3 rounded-xl cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
              href={`/fichier/cvRakotozanakaAurelien(${i18n.language}).pdf`}
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              {t("hero.cv")}
            </a>
          </div>
        </div>
      </div>

      <div className="p-5 md:p-20">
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center rounded-3xl px-8 py-12 bg-gray-200 border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.08)] dark:bg-black/50 mx-auto w-11/12 dark:border-none">
          <div className="md:w-1/2 mb-6 md:mb-0 fadeIn3">
            <div className="flex justify-center items-center gap-4 w-11/12 mx-auto mb-6">
              <span className="flex-1 h-px bg-sky-500"></span>
              <span className="text-sm md:text-xl uppercase tracking-widest text-slate-500 dark:text-slate-300 font-semibold">
                {t("about.title")}
              </span>
              <span className="flex-1 h-px bg-sky-500"></span>
            </div>

            <p className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-slate-900 dark:text-white tracking-tight">
              {t("about.subtitle")}
            </p>

            <p className="text-slate-600 dark:text-gray-300/80 text-center whitespace-pre-line leading-relaxed font-medium">
              {t("about.description")}
            </p>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {t("about.philosophy.title")}
              </h1>
              <p className="pl-3 border-l-2 border-slate-300 dark:border-l-slate-200/40 text-slate-600 dark:text-gray-300/80 leading-relaxed">
                {t("about.philosophy.text")}
              </p>
            </div>

            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {t("about.skills.title")}
              </h1>
              <p className="pl-3 border-l-2 border-slate-300 dark:border-l-slate-200/40 text-slate-600 dark:text-gray-300/80 leading-relaxed">
                {t("about.skills.text")}
              </p>
            </div>

            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {t("about.collaboration.title")}
              </h1>
              <p className="pl-3 border-l-2 border-slate-300 dark:border-l-slate-200/40 text-slate-600 dark:text-gray-300/80 leading-relaxed">
                {t("about.collaboration.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
