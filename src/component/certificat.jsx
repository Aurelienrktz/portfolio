import React from "react";
import { useTranslation } from "react-i18next";

const Certificat = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center bg-transparent transition-colors duration-300">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn text-slate-900 dark:text-white">
        {t("certificates.title")}
      </h1>

      <div className="pt-15 md:pt-25 relative timeline">
        {/* ------------------------- C# -------------------------- */}
        <div className="mb-12 flex justify-between items-center w-full right-timeline fadeIn2">
          <div className="w-5/12"></div>

          <div className="z-20 bg-gray-200 dark:bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img src="/image/c-sharp.png" alt="logo C#" className="w-10" />
          </div>

          <div className="bg-gray-50 outline-2 outline-blue-700 dark:outline-[#4b5563] dark:bg-gray-700 rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content right-content">
            <h3 className="mb-2 font-bold text-slate-900 dark:text-white text-lg">
              {t("certificates.csharp.title")}
            </h3>
            <h2 className="mb-2 text-yellow-500 dark:text-yellow-200 text-xs md:text-base">
              {t("certificates.csharp.provider")}
            </h2>
            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-snug">
              {t("certificates.csharp.description")}
            </p>
          </div>
        </div>

        {/* ------------------------- ALGO -------------------------- */}
        <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline fadeIn3">
          <div className="w-5/12"></div>

          <div className="z-20 bg-gray-200 dark:bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/algorithm.png"
              alt="icon algorithm"
              className="w-10"
            />
          </div>

          <div className="bg-gray-50 outline-2 outline-blue-700 dark:outline-[#4b5563] dark:bg-gray-700 rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content left-content">
            <h3 className="mb-2 font-bold text-slate-900 dark:text-white text-lg">
              {t("certificates.algo.title")}
            </h3>
            <h2 className="mb-2 text-yellow-500 dark:text-yellow-200 text-xs md:text-base">
              {t("certificates.algo.provider")}
            </h2>
            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-snug">
              {t("certificates.algo.description")}
            </p>
          </div>
        </div>

        {/* ------------------------- RESPONSIVE -------------------------- */}
        <div className="mb-12 flex justify-between items-center w-full right-timeline fadeIn2">
          <div className="w-5/12"></div>

          <div className="z-20 bg-gray-200 dark:bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/responsive-design.png"
              alt="icon responsive"
              className="w-10"
            />
          </div>

          <div className="bg-gray-50 outline-2 outline-blue-700 dark:outline-[#4b5563] dark:bg-gray-700 rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content right-content">
            <h3 className="mb-2 font-bold text-slate-900 dark:text-white text-lg">
              {t("certificates.responsive.title")}
            </h3>
            <h2 className="mb-2 text-yellow-500 dark:text-yellow-200 text-xs md:text-base">
              {t("certificates.responsive.provider")}
            </h2>
            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-snug">
              {t("certificates.responsive.description")}
            </p>
          </div>
        </div>

        {/* ------------------------- BAC -------------------------- */}
        <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline fadeIn3">
          <div className="w-5/12"></div>

          <div className="z-20 bg-gray-200 dark:bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/graduation.png"
              alt="icon graduation"
              className="w-10"
            />
          </div>

          <div className="bg-gray-50 outline-2 outline-blue-700 dark:outline-[#4b5563] dark:bg-gray-700 rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content left-content">
            <h3 className="mb-2 font-bold text-slate-900 dark:text-white text-lg">
              {t("certificates.bac.title")}
            </h3>
            <h2 className="mb-2 text-yellow-500 dark:text-yellow-200 text-xs md:text-base">
              {t("certificates.bac.school")}
            </h2>
            <p className="mb-2 text-xs md:text-base text-slate-700 dark:text-white">
              {t("certificates.bac.series")}{" "}
              <span className="text-blue-600 dark:text-blue-400">
                {t("certificates.bac.seriesValue")}
              </span>{" "}
              , {t("certificates.bac.mention")}{" "}
              <span className="text-green-500 dark:text-green-400">
                {t("certificates.bac.mentionValue")}
              </span>
            </p>
            <p className="text-sm text-slate-600 dark:text-neutral-400 leading-snug">
              {t("certificates.bac.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificat;
