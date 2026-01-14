import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center gap-4 w-11/12 mx-auto pb-5 mt-10 fadeIn">
      <span className="h-0.5 rounded-xl w-full bg-blue-800"></span>
      <p className="font-light text-neutral-400 text-center">
        {t("footer.rights")}
      </p>
    </div>
  );
};

export default Footer;
