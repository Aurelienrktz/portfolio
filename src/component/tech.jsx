import React from "react";

const Tech = ({ img, type, nom, niveau, jauge }) => {
  return (
    <div className="fadeIn p-4 w-10/12 mx-auto md:w-[20%] flex flex-col gap-4 bg-white border border-slate-700/40 rounded-2xl">
      <div className="flex justify-between items-center">
        <img
          src={img}
          alt={`logo ${nom}`}
          className="w-15 h-15 object-contain bg-slate-800/60 p-2 rounded-md"
        />
        <h1 className="bg-gray-800 p-2 rounded-md text-gray-400">{type}</h1>
      </div>
      <h1 className="text-xl text-gray-200 font-semibold">{nom}</h1>
      <div className="w-full h-3 bg-gray-800 rounded-md">
        <div
          className=" bg-sky-500 h-full rounded-md"
          style={{ width: `${jauge}%` }}
        ></div>
      </div>
      <p className="text-end text-gray-400">{niveau}</p>
    </div>
  );
};

export default Tech;
