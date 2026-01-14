import React from "react";
import { useTranslation } from "react-i18next";
import Tech from "./tech";

const TechSkills = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn">
        {t("techSkills.title")}
      </h1>

      <div className="flex justify-center items-center flex-col md:flex-row gap-4 flex-wrap">
        <Tech
          img="/image/React-icon.svg.png"
          type={t("techSkills.types.frontend")}
          nom="React"
          niveau={t("techSkills.levels.advanced")}
          jauge={80}
        />
        <Tech
          img="/image/c-sharp.png"
          type={t("techSkills.types.frontend")}
          nom="C#"
          niveau={t("techSkills.levels.intermediate")}
          jauge={60}
        />
        <Tech
          img="/image/js.png"
          type={t("techSkills.types.frontend")}
          nom="JavaScript"
          niveau={t("techSkills.levels.advanced")}
          jauge={75}
        />
        <Tech
          img="/image/typescript.png"
          type={t("techSkills.types.frontend")}
          nom="TypeScript"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
        />
        <Tech
          img="/image/png-transparent-tailwind-css-hd-logo.png"
          type={t("techSkills.types.frontend")}
          nom="Tailwind CSS"
          niveau={t("techSkills.levels.intermediate")}
          jauge={70}
        />
        <Tech
          img="/image/wpf.svg"
          type={t("techSkills.types.frontend")}
          nom="WPF"
          niveau={t("techSkills.levels.beginner")}
          jauge={30}
        />
        <Tech
          img="/image/python.png"
          type={t("techSkills.types.frontend")}
          nom="Python"
          niveau={t("techSkills.levels.beginner")}
          jauge={40}
        />
        <Tech
          img="/image/html.png"
          type={t("techSkills.types.frontend")}
          nom="HTML"
          niveau={t("techSkills.levels.advanced")}
          jauge={90}
        />
        <Tech
          img="/image/css-3.png"
          type={t("techSkills.types.frontend")}
          nom="CSS"
          niveau={t("techSkills.levels.advanced")}
          jauge={85}
        />
        <Tech
          img="/image/github.png"
          type={t("techSkills.types.tools")}
          nom="GitHub"
          niveau={t("techSkills.levels.beginner")}
          jauge={55}
        />
        <Tech
          img="/image/figma.png"
          type={t("techSkills.types.tools")}
          nom="Figma"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
        />
      </div>
    </div>
  );
};

export default TechSkills;
