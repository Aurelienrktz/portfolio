import React from "react";

const Tech = ({ img, nom, niveau, jauge, color, border }) => {
  return (
    <div
      className={`fadeIn p-4 w-10/12 mx-auto md:w-[20%] flex flex-col gap-4 bg-white dark:bg-neutral-900 border ${border} rounded-2xl text-gray-900 dark:text-white`}
    >
      <div className="flex justify-between items-center">
        <img
          src={img}
          alt={`logo ${nom}`}
          className="w-15 h-15 object-contain bg-slate-200 dark:bg-slate-800/60 p-2 rounded-md"
        />
      </div>

      <h1 className="text-xl text-gray-800 dark:text-gray-200 font-semibold">
        {nom}
      </h1>

      <div className="w-full h-3 bg-gray-200 dark:bg-gray-800 rounded-md">
        <div
          className={`${color} h-full rounded-md`}
          style={{ width: `${jauge}%` }}
        ></div>
      </div>

      <p className="text-end text-gray-600 dark:text-gray-400">{niveau}</p>
    </div>
  );
};

export default Tech;
