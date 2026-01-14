import React from "react";
import { useTranslation } from "react-i18next";

const Parcours = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-10 px-5 md:px-20 md:pt-15">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 text-xl md:text-2xl text-center fadeIn">
        {t("parcours.title")}
      </h1>

      {t("parcours.items", { returnObjects: true }).map((item, index) => (
        <div
          key={index}
          className="after2 relative flex justify-between py-5 md:py-10 fadeIn3"
        >
          <span>
            <p className="font-medium pb-4">{item.degree}</p>
            <p className="font-light text-gray-400">{item.school}</p>
          </span>
          <p className="font-light text-gray-400 text-xs md:text-base">
            {item.period}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Parcours;
