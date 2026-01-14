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
              {t("hero.projects")}
            </a>

            <a
              className="flex items-center gap-1 font-medium border border-blue-500 text-white p-2 md:px-2 md:py-3 rounded-md cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
              href="/fichier/cv.pdf"
              download
            >
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
