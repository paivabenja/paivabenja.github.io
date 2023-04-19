import escudo from "./assets/escudoPfc.png";
import pepillo from "./assets/pepillo.webp";
import arbitro from "./assets/arbitro.png";
import { Link } from "react-router-dom";

const Presentacion = () => {
  return (
    <div className="grid w-full h-full bg-gradient-to-b from-red-950 to-neutral-950 to-80%">
      <div className="flex flex-col items-center text-neutral-300">
        <div className="flex w-full justify-center items-center overflow-hidden lg:justify-between sm:flex-row  ">
          <img src={pepillo} className="hidden lg:block w-72" />
          <div className="duration-150 mb-16 flex flex-col items-center">
            <img
              src={escudo}
              alt=""
              className="h-40 sm:h-64 mt-28 duration-150 aspect-square"
            />
            <h1 className="text-3xl sm:text-5xl font-semibold mt-10">
              Pórtico Fútbol Club
            </h1>
            <h2>El más grande del Challao</h2>
          </div>
          <img src={arbitro} className="hidden lg:block w-72" />
        </div>
        <Link to="asociarse" className="duration-300 text-xl text-center text-neutral-300 border rounded-lg border-neutral-600 py-1 pb-2 px-4 hover:border-neutral-300 hover:text-neutral-50">
          Asociarse
        </Link>
      </div>
    </div>
  );
};

export default Presentacion;
