import React from "react";
import { useTranslation } from "react-i18next";

const Parcours = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 px-5 md:px-20 md:pt-15 bg-transparent transition-colors duration-300">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 text-xl md:text-2xl text-center fadeIn text-slate-900 dark:text-white">
        {t("parcours.title")}
      </h1>

      {t("parcours.items", { returnObjects: true }).map((item, index) => (
        <div
          key={index}
          className="after2 relative flex justify-between py-5 md:py-10 fadeIn3 border-b border-slate-200/60 dark:border-transparent"
        >
          <span>
            <p className="font-medium pb-4 text-slate-900 dark:text-white">
              {item.degree}
            </p>
            <p className="font-light text-slate-600 dark:text-gray-400">
              {item.school}
            </p>
          </span>

          <p className="font-light text-slate-600 dark:text-gray-400 text-xs md:text-base">
            {item.period}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Parcours;
