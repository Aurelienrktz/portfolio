import React from "react";

const Parcours = () => {
  return (
    <div className="pt-10 px-5 md:px-20  md:pt-15">
      <h1 className="after3 relative font-bold pb-2 md:pb-5 text-xl md:text-2xl text-center fadeIn">
        Parcours Académique
      </h1>
      <div className="after2 relative flex justify-between py-5 md:py-10 fadeIn3">
        <span>
          <p className="font-medium pb-4">
            Licence 3 en informatique ( en cours )
          </p>
          <p className="font-light text-gray-400">
            Institut Supérieur Polytechnique de Madagascar
          </p>
        </span>
        <p className="font-light text-gray-400 text-xs md:text-base">
          2025 - 2026
        </p>
      </div>
      <div className="after2 relative flex justify-between py-5 md:py-10  fadeIn3">
        <span>
          <p className="font-medium pb-4">Licence 2 en informatique</p>
          <p className="font-light text-gray-400">
            Institut Supérieur Polytechnique de Madagascar
          </p>
        </span>
        <p className="font-light text-gray-400 text-xs md:text-base">
          2024 - 2025
        </p>
      </div>
      <div className="after2 relative flex justify-between py-5 md:py-10 fadeIn3">
        <span>
          <p className="font-medium pb-4">Licence 1 en informatique</p>
          <p className="font-light text-gray-400">
            Institut Supérieur Polytechnique de Madagascar
          </p>
        </span>
        <p className="font-light text-gray-400 text-xs md:text-base">
          2023 - 2024
        </p>
      </div>
      <div className="after2 relative flex justify-between py-5 md:py-10  fadeIn3">
        <span>
          <p className="font-medium pb-4">Terminale Scientifique</p>
          <p className="font-light text-gray-400">
            Lycée Jacques RABEMANANJARA
          </p>
        </span>
        <p className="font-light text-gray-400 text-xs md:text-base">
          2022 - 2023
        </p>
      </div>
    </div>
  );
};

export default Parcours;
