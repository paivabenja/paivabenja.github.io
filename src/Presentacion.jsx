import escudo from "./assets/escudoPfc.png";
import pepillo from "./assets/pepillo.webp";
import arbitro from "./assets/arbitro.png";
import { useState } from "react";

const Presentacion = () => {
  const handleClick = () => {
    console.log("pageYOffset: ", window.pageYOffset);
    console.log("innerHeight: ", window.innerHeight);
    if (window.pageYOffset >= window.innerHeight - 20) return;
    window.scrollBy(0, 25);
    setTimeout(handleClick, 1);
  };

  return (
    <div className="grid w-full h-full bg-gradient-to-b from-red-900 to-neutral-900 to-80%">
      <div className="flex flex-col items-center text-neutral-300">
        <div className="flex w-full justify-center items-center overflow-hidden lg:justify-between sm:flex-row  ">
          <img src={pepillo} className="hidden lg:block w-72" />
          <div className="duration-150 mb-16 flex flex-col items-center hover:scale-105 hover:text-red-500">
            <img
              src={escudo}
              alt=""
              className="h-40 sm:h-64 mt-28 duration-150 hover:scale-105 aspect-square"
            />
            <h1 className="text-3xl sm:text-5xl font-semibold mt-10">
              Pórtico Fútbol Club
            </h1>
            <h2>El más grande del Challao</h2>
          </div>
          <img src={arbitro} className="hidden lg:block w-72" />
        </div>
        <button
          onClick={handleClick}
          className="text-xl text-center border-2 rounded-lg border-neutral-300 py-1 px-4"
        >
          Asociarse
        </button>
      </div>
    </div>
  );
};

export default Presentacion;
