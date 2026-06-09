import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.language || "fr");

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    const handleLanguageChanged = (lng) => setLang(lng);

    i18n.on("languageChanged", handleLanguageChanged);

    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n]);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="after flex justify-between sticky top-0 z-50 w-full p-3 md:p-5 backdrop-blur-md shadow-2xl fadeIn bg-white/80 dark:bg-transparent text-slate-800 dark:text-white">
      <div className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-10 bg-slate-200 dark:bg-gray-500 rounded-md p-1 hover:bg-slate-300 dark:hover:bg-gray-700 transition-all duration-300"
        >
          <path
            fillRule="evenodd"
            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="font-semibold text-xl leading-tight">
          Rakotozanaka Aurelien
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="cursor-pointer h-9 flex justify-center items-center p-1.5 rounded-md outline outline-1 outline-slate-300 dark:outline-gray-200 hover:bg-slate-200 dark:hover:bg-gray-700 transition-all duration-300"
          title={theme === "dark" ? "Mode clair" : "Mode sombre"}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <select
          value={lang}
          onChange={(e) => changeLanguage(e.target.value)}
          className="cursor-pointer h-9 flex justify-center items-center p-1 rounded-md outline outline-1 outline-slate-300 dark:outline-gray-200 bg-white dark:bg-neutral-800 text-slate-800 dark:text-white"
          name="language"
          id="language"
        >
          <option className="text-black" value="fr">
            FR
          </option>
          <option className="text-black" value="en">
            EN
          </option>
        </select>
      </div>
    </div>
  );
};

export default Header;
