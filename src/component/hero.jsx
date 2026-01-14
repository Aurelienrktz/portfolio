import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
// import BackgroundParticles from "../assets/backgroundParticles";

const Hero = () => {
  const { t } = useTranslation();

  const words = t("hero.roles", { returnObjects: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8 py-10 md:pb-20 md:pt-15 fadeIn">
          <h1 className="typing text-2xl md:text-4xl font-bold">
            {t("hero.welcome")}
          </h1>

          <h2 className="font-light text-neutral-400 text-xl">
            {words[index]}
          </h2>

          <div className="flex justify-items-center gap-4">
            <a
              onClick={() => {
                const projet = document.getElementById("projet");
                projet?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-white font-medium bg-blue-500 p-2 md:px-2 md:py-3 rounded-md cursor-pointer hover:bg-blue-700 hover:-translate-y-1.5 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              {t("hero.projects")}
            </a>

            <a
              className="flex items-center gap-1 font-medium border border-blue-500 text-white p-2 md:px-2 md:py-3 rounded-md cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
              href="/fichier/cvAurelienRakotozanaka.pdf"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>

              {t("hero.cv")}
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="p-5 md:p-20">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center rounded-2xl px-6 py-12 bg-slate-900 mx-auto w-11/12">
          <div className="md:w-1/2 mb-10 fadeIn3">
            <div className="flex justify-center items-center gap-4 w-11/12 mx-auto mb-6">
              <span className="flex-1 h-px bg-sky-500"></span>
              <span className="text-sm md:text-xl uppercase tracking-widest text-slate-300">
                {t("about.title")}
              </span>
              <span className="flex-1 h-px bg-sky-500"></span>
            </div>

            <p className="text-4xl font-bold mb-4 text-center">
              {t("about.subtitle")}
            </p>

            <p className="text-gray-300/80 text-center whitespace-pre-line">
              {t("about.description")}
            </p>
          </div>

          <div className=" md:w-1/2 space-y-6">
            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2">
                {t("about.philosophy.title")}
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
                {t("about.philosophy.text")}
              </p>
            </div>

            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2">
                {t("about.skills.title")}
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
                {t("about.skills.text")}
              </p>
            </div>

            <div className="fadeIn2">
              <h1 className="text-xl font-bold mb-2">
                {t("about.collaboration.title")}
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
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
