import React from "react";
import Tech from "./tech";

const TechSkills = () => {
  return (
    <div className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn">
        Compétences techniques
      </h1>
      <div className="flex justify-center items-center flex-col md:flex-row gap-4 flex-wrap ">
        <Tech
          img="/image/React-icon.svg.png"
          type="FRONT-END"
          nom="React"
          niveau="Avancé"
          jauge={80}
        />
        <Tech
          img="/image/c-sharp.png"
          type="FRONT-END"
          nom="C#"
          niveau="Intermediaire"
          jauge={60}
        />
        <Tech
          img="/image/js.png"
          type="FRONT-END"
          nom="JavaScript"
          niveau="Avancé"
          jauge={75}
        />
        <Tech
          img="/image/typescript.png"
          type="FRONT-END"
          nom="TypeScript"
          niveau="Debutant"
          jauge={35}
        />
        <Tech
          img="/image/png-transparent-tailwind-css-hd-logo.png"
          type="FRONT-END"
          nom="Tailwind"
          niveau="Intermediare"
          jauge={70}
        />
        <Tech
          img="/image/wpf.svg"
          type="FRONT-END"
          nom="WPF"
          niveau="Debutant"
          jauge={30}
        />
        <Tech
          img="/image/python.png"
          type="FRONT-END"
          nom="Python"
          niveau="Debutant"
          jauge={40}
        />
        <Tech
          img="/image/html.png"
          type="FRONT-END"
          nom="Html"
          niveau="Avancé"
          jauge={90}
        />
        <Tech
          img="/image/css-3.png"
          type="FRONT-END"
          nom="Css"
          niveau="Avancé"
          jauge={85}
        />
        <Tech
          img="/image/github.png"
          type="OUTILS"
          nom="Git Hub"
          niveau="Debutant"
          jauge={55}
        />
        <Tech
          img="/image/figma.png"
          type="OUTILS"
          nom="Figma"
          niveau="Debutant"
          jauge={35}
        />
      </div>
    </div>
  );
};

export default TechSkills;
