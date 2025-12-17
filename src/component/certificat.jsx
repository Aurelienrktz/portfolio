import React from "react";

const Certificat = () => {
  return (
    <div className="py-10 px-5 md:px-20 md:pb-20 md:pt-15 flex flex-col justify-center">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 mb-5 md:mb-10 text-xl md:text-2xl text-center fadeIn">
        Certificats et Diplome
      </h1>
      <div className="pt-15 md:pt-25 relative timeline">
        {/* --------------------------- Certificat C# (Droit) --------------------------- */}
        <div className=" mb-12 flex justify-between items-center w-full right-timeline fadeIn2">
          <div className="w-5/12"></div>

          {/* Le cercle central avec l'icône */}
          <div className="z-20 bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            {/* L'icône C# peut être un span, un SVG ou une icône */}
            <img src="/image/c-sharp.png" alt="logo C#" className="w-10" />
          </div>

          {/* Le conteneur du contenu (5/12) */}
          <div className="bg-gray-700 bg-card-light dark:bg-card-dark rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content right-content">
            <h3 className="mb-2 font-bold text-text-light dark:text-text-dark text-lg">
              Foundational C# with Microsoft
            </h3>
            <h2 className="mb-2 text-yellow-200 text-xs md:text-base">
              FreeCodeCamp
            </h2>
            <p className="text-sm text-neutral-400 text-secondary-text-light dark:text-secondary-text-dark leading-snug">
              Ce certificat valide les bases du langage C#, incluant la syntaxe,
              les variables, les boucles et la programmation orientée objet. Il
              prépare à créer des programmes et comprendre la logique de
              développement en C#.
            </p>
          </div>
        </div>

        {/* ------------------------- Certificat Algo (Gauche) -------------------------- */}
        <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline fadeIn3">
          <div className="w-5/12"></div>

          {/* Le cercle central avec l'icône */}
          <div className="z-20 bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/algorithm.png"
              alt="icone algorithm"
              className=" w-10"
            />
          </div>

          {/* Le conteneur du contenu (5/12) */}
          <div className="bg-gray-700 bg-card-light dark:bg-card-dark rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content left-content">
            <h3 className="mb-2 font-bold text-text-light dark:text-text-dark text-lg">
              JavaScript Algorithms and Data Structures
            </h3>
            <h2 className="mb-2 text-yellow-200 text-xs md:text-base">
              FreeCodeCamp
            </h2>
            <p className="text-sm text-neutral-400 text-secondary-text-light dark:text-secondary-text-dark leading-snug">
              Ce certificat atteste la maîtrise de JavaScript, des structures de
              données et des algorithmes essentiels, permettant de résoudre des
              problèmes logiques et d’optimiser des programmes web.
            </p>
          </div>
        </div>

        {/* ------------------------- Certificat RESPONSIVE (Droit) ------------------------- */}
        <div className="mb-12 flex justify-between items-center w-full right-timeline fadeIn2">
          <div className="w-5/12"></div>

          {/* Le cercle central avec l'icône */}
          <div className="z-20 bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/responsive-design.png"
              alt="icone responsive-design"
              className=" w-10"
            />
          </div>

          {/* Le conteneur du contenu (5/12) */}
          <div className="bg-gray-700 bg-card-light dark:bg-card-dark rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content right-content">
            <h3 className="mb-2 font-bold text-text-light dark:text-text-dark text-lg">
              Responsive Web Design
            </h3>
            <h2 className="mb-2 text-yellow-200 text-xs md:text-base">
              FreeCodeCamp
            </h2>
            <p className="text-sm text-neutral-400 text-secondary-text-light dark:text-secondary-text-dark leading-snug">
              Ce certificat prouve la capacité à concevoir des sites web
              adaptatifs, utilisant HTML, CSS et les techniques de design pour
              garantir une expérience optimale sur tous les appareils.
            </p>
          </div>
        </div>
        {/* BACCALAUREAT */}
        <div className="mb-12 flex justify-between flex-row-reverse items-center w-full left-timeline fadeIn3">
          <div className="w-5/12"></div>

          {/* Le cercle central avec l'icône */}
          <div className="z-20 bg-gray-700 flex items-center w-12 h-12 p-2 rounded-full outline-2 outline-blue-700 justify-center relative timeline-icon">
            <img
              src="/image/graduation.png"
              alt="icone graduation"
              className=" w-10"
            />
          </div>

          {/* Le conteneur du contenu (5/12) */}
          <div className="bg-gray-700 bg-card-light dark:bg-card-dark rounded-xl shadow-lg w-5/12 p-2 md:px-6 md:py-4 relative timeline-content left-content">
            <h3 className="mb-2 font-bold text-text-light dark:text-text-dark text-lg">
              Baccalauréat
            </h3>
            <h2 className="mb-2 text-yellow-200 text-xs md:text-base">
              Lycée Jacques RABEMANANJARA
            </h2>
            <p className="mb-2 text-xs md:text-base">
              Série : <span className="text-blue-500">Scientifique</span> ,
              Mention : <span className="text-green-400">Assez-Bien</span>
            </p>
            <p className="text-sm text-neutral-400 text-secondary-text-light dark:text-secondary-text-dark leading-snug">
              Ceci est le diplôme de fin d’études secondaires qui certifie que
              l’élève a acquis les connaissances générales nécessaires pour
              accéder à l’enseignement supérieur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificat;
