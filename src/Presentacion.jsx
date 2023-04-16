import escudo from "./assets/escudoPfc.png";
import pepillo from "./assets/pepillo.webp";
import arbitro from "./assets/arbitro.png";

const Presentacion = () => {
  const handleClick = () => {
    console.log("pageYOffset: ", window.pageYOffset);
    console.log("innerHeight: ", window.innerHeight);
    if (window.pageYOffset >= window.innerHeight - 20) return;
    window.scrollBy(0, 25);
    setTimeout(handleClick, 1);
  };

  return (
    <div className="grid w-full bg-gradient-to-b from-red-900 to-black to-80%">
      <div className="flex flex-col items-center text-white">
        <div className="flex justify-center flex-col sm:flex-row sm:justify-between items-center mt-8 mb-12">
          <img src={pepillo} className="w-72" />
          <div className="duration-150 flex flex-col items-center hover:scale-105 hover:text-red-500">
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
          <img src={arbitro} className="w-72" />
        </div>
        <button onClick={handleClick} className="text-xl text-center">
          Más info
        </button>
      </div>
    </div>
  );
};

export default Presentacion;
