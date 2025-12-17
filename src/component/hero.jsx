import React, { useEffect, useRef, useState } from "react";
import BackgroundParticles from "../assets/backgroundParticles";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden">
        {/* <BackgroundParticles /> */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-4 md:gap-8 py-10 md:pb-20 md:pt-15 fadeIn">
          <h1 className="typing text-2xl md:text-4xl font-bold">
            Bienvenue, je suis Aurelien
          </h1>
          <h1 className="words font-light text-neutral-400 text-xl"></h1>
          <div className="flex justify-items-center gap-4">
            <a
              onClick={() => {
                const projet = document.getElementById("projet");
                projet?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-1 text-white font-medium bg-blue-500 p-2 md:px-2 md:py-3 rounded-md cursor-pointer hover:bg-blue-700 hover:-translate-y-1.5 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.47 13.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 0 0-1.06-1.06L12 11.69 5.03 4.72a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M11.47 19.28a.75.75 0 0 0 1.06 0l7.5-7.5a.75.75 0 1 0-1.06-1.06L12 17.69l-6.97-6.97a.75.75 0 0 0-1.06 1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              Voir mes projets
            </a>
            <a
              className=" flex items-center gap-1 font-medium border border-blue-500 text-white  p-2 md:px-2 md:py-3 rounded-md cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
              href="/fichier/cvAurelienRakotozanaka.pdf"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
              Télecharger mon CV
            </a>
          </div>
        </div>
      </div>
      <div className="p-5 md:p-20 ">
        <div className="flex flex-col md:flex-row gap-3 justify-between items-center rounded-2xl px-6 py-12 bg-slate-900 mx-auto w-11/12">
          <div className="md:w-1/2 mb-10 fadeIn3">
            <div className="flex justify-center items-center gap-4 w-11/12 mx-auto mb-6">
              <span className="flex-1 h-px  bg-sky-500"></span>
              <span className="text-sm md:text-xl uppercase tracking-widest text-slate-300">
                À propos
              </span>
              <span className="flex-1 h-px bg-sky-500"></span>
            </div>
            <p className="text-4xl font-bold mb-4 text-center">
              J'aime créer des applications web modernes, centrées sur le
              confort de l’utilisateur et pensées pour durer.
            </p>
            <p className="text-gray-300/80 text-center">
              <span className="ml-4 text-xl font-bold">J</span>e suis un
              étudiant en Informatique à l'ISPM en 3ème année suivant le
              parcours ESIIA , entré dans le domaine de l'informatique en 2022,
              Je transforme des idées en interfaces claires, performantes et
              intuitives. <br />
              <span className="ml-4 text-xl font-bold">P</span>assionné par le
              développement front-end et les technologies modernes, j’accorde
              une attention particulière à l’expérience utilisateur, à la
              qualité du code et à la maintenabilité des applications. <br />{" "}
              <span className="ml-4 text-xl font-bold">J</span>'accorde une
              grande importance au design et à l'experience utilisateur car
              selon moi, le design est la première impression que l'utilisateur
              a sur une application.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="mb-6 fadeIn2">
              <h1 className="flex items-center gap-2 mb-2 text-xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6  text-sky-500"
                >
                  <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                  <path
                    fillRule="evenodd"
                    d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                    clipRule="evenodd"
                  />
                </svg>
                Philosophie
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
                Je crois en un développement propre, structuré et orienté
                utilisateur. Chaque ligne de code doit avoir un objectif clair :
                améliorer l’expérience, la performance et la lisibilité.
                J’accorde une grande importance à l’accessibilité, à la
                cohérence visuelle et à la simplicité d’utilisation, tout en
                respectant les bonnes pratiques du développement moderne.
              </p>
            </div>
            <div className="mb-6 fadeIn2">
              <h1 className="flex items-center gap-2 mb-2 text-xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-sky-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                    clipRule="evenodd"
                  />
                  <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                  <path
                    fillRule="evenodd"
                    d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
                Compétences Focus
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
                Je me spécialise dans le développement front-end avec React,
                JavaScript et Tailwind CSS, en créant des interfaces modernes,
                responsives et maintenables. J’ai également une des compétences
                en C# et WPF, ce qui me permet d’avoir une vision globale du
                développement applicatif, du front-end à la logique métier.
              </p>
            </div>
            <div className="fadeIn2">
              <h1 className="flex items-center gap-2 mb-2 text-xl font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-sky-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                </svg>
                Collaboration
              </h1>
              <p className="pl-3 border-l-2 border-l-slate-200/40 text-gray-300/80">
                J’apprécie le travail en équipe et les environnements
                collaboratifs où l’échange et l’apprentissage sont essentiels.
                J’aime communiquer clairement, comprendre les besoins réels d’un
                projet et contribuer activement à sa réussite. Curieux et
                motivé, je cherche constamment à progresser et à relever de
                nouveaux défis techniques.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-5 md:px-20 fadeIn">
        <h1 className="font-bold text-xl md:text-2xl">A propos</h1>
        <p className="mt-2 md:mt-4 text-neutral-300 w-full md:w-10/12">
          Je suis un étudiant en troisième année d’informatique à l’ISPM suivant
          le parcour Electronique Système Informatique et Intelligence
          Artificielle ( <span className="font-bold text-blue-500">ESIIA</span>{" "}
          ) , passionné par le développement Front-end et motivé par la création
          d’interfaces modernes et efficaces. J’aime transformer des idées en
          solutions concrètes qui améliorent l’expérience utilisateur. Curieux,
          sérieux et capable de m’adapter rapidement,ayant déjà contribuer à de
          nombreux projets académique et personnelles, je souhaite mettre mes
          compétences en pratique au sein d’une équipe dynamique afin de
          contribuer à des projets réels tout en développant mon expérience
          professionnelle.
        </p>
      </div> */}
    </>
  );
};

export default Hero;
