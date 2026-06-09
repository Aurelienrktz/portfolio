import React from "react";
import { useTranslation } from "react-i18next";
import Tech from "./tech";

const TechSkills = () => {
  const { t } = useTranslation();

  return (
    <div className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center bg-transparent text-gray-900 dark:text-white">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn">
        {t("techSkills.title")}
      </h1>

      <h2 className="text-xl font-semibold text-violet-600 dark:text-violet-400 mb-6 mt-12">
        IA & Automatisation
      </h2>

      <div className="flex justify-center items-center flex-col md:flex-row gap-4 flex-wrap">
        <Tech
          img="/image/llm.webp"
          nom="LLM"
          niveau={t("techSkills.levels.intermediate")}
          jauge={55}
          color="bg-violet-500 dark:bg-violet-400"
          border="border-violet-300 dark:border-violet-400/40"
        />
        <Tech
          img="/image/rag.jpg"
          nom="RAG"
          niveau={t("techSkills.levels.intermediate")}
          jauge={60}
          color="bg-violet-500 dark:bg-violet-400"
          border="border-violet-300 dark:border-violet-400/40"
        />
        <Tech
          img="/image/n8n.webp"
          nom="n8n"
          niveau={t("techSkills.levels.intermediate")}
          jauge={45}
          color="bg-violet-500 dark:bg-violet-400"
          border="border-violet-300 dark:border-violet-400/40"
        />
        <Tech
          img="/image/node.png"
          nom="Node Js"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
          color="bg-violet-500 dark:bg-violet-400"
          border="border-violet-300 dark:border-violet-400/40"
        />
      </div>

      <h2 className="text-xl font-semibold text-sky-600 dark:text-sky-400 mb-6 mt-12">
        Front-End
      </h2>

      <div className="flex justify-center items-center flex-col md:flex-row gap-4 flex-wrap">
        <Tech
          img="/image/React-icon.svg.png"
          nom="React"
          niveau={t("techSkills.levels.advanced")}
          jauge={80}
          color="bg-sky-500 dark:bg-sky-400"
          border="border-sky-300 dark:border-sky-400/40"
        />
        <Tech
          img="/image/png-transparent-tailwind-css-hd-logo.png"
          nom="Tailwind CSS"
          niveau={t("techSkills.levels.intermediate")}
          jauge={70}
          color="bg-sky-500 dark:bg-sky-400"
          border="border-sky-300 dark:border-sky-400/40"
        />
        <Tech
          img="/image/js.png"
          nom="JavaScript"
          niveau={t("techSkills.levels.advanced")}
          jauge={75}
          color="bg-sky-500 dark:bg-sky-400"
          border="border-sky-300 dark:border-sky-400/40"
        />
        <Tech
          img="/image/typescript.png"
          nom="TypeScript"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
          color="bg-sky-500 dark:bg-sky-400"
          border="border-sky-300 dark:border-sky-400/40"
        />
        <Tech
          img="/image/c-sharp.png"
          nom="C#"
          niveau={t("techSkills.levels.intermediate")}
          jauge={60}
          color="bg-sky-500 dark:bg-sky-400"
          border="border-sky-300 dark:border-sky-400/40"
        />
      </div>

      <h2 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6 mt-12">
        Outils & DevOps
      </h2>

      <div className="flex justify-center items-center flex-col md:flex-row gap-4 flex-wrap">
        <Tech
          img="/image/github.png"
          nom="GitHub"
          niveau={t("techSkills.levels.intermediate")}
          jauge={55}
          color="bg-emerald-500 dark:bg-emerald-400"
          border="border-emerald-300 dark:border-emerald-400/40"
        />
        <Tech
          img="/image/docker.webp"
          nom="Docker"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
          color="bg-emerald-500 dark:bg-emerald-400"
          border="border-emerald-300 dark:border-emerald-400/40"
        />
        <Tech
          img="/image/figma.png"
          nom="Figma"
          niveau={t("techSkills.levels.beginner")}
          jauge={35}
          color="bg-emerald-500 dark:bg-emerald-400"
          border="border-emerald-300 dark:border-emerald-400/40"
        />
      </div>
    </div>
  );
};

export default TechSkills;
