import { useEffect, useRef, useState } from "react";
import escudo from "../assets/escudoPfc.png";
import { Link } from "react-router-dom";

const Asociarse = () => {
  const [visible, setVisible] = useState("hidden");
  const [data, setData] = useState({});
  const inputStyle =

  const handleIgChange = (e) => {
    if (e.target.value[0] === "@") return;
    e.target.value = "@" + e.target.value;
  };

  const handleFormChange = (e) => {
    e.preventDefault();
    console.log("handleFormChange");
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    let newData = data;
    newData[name] = { type, value };
    setData(newData);
  };

  return (
    <div className="overflow-auto text-neutral-300 h-full text-center w-full bg-neutral-950 flex flex-col items-center justify-start">
<Link to="/">
        <img src={escudo} className="duration-300 mt-8 h-16 lg:mt-8 lg:h-32" />
      </Link>
      <form
        onChange={handleFormChange}
        className="grid grid-cols-2 gap-2 p-8 rounded-2xl"
      >
        <input
          type="text"
          name="name"
          className={inputStyle}
          placeholder="Ingrese su nombre"
        />

        <input
          type="text"
          name="lastname"
          className={inputStyle}
          placeholder="Ingrese su apellido"
        />

        <input
          type="text"
          name="insta"
          onChange={handleIgChange}
          className={inputStyle}
          placeholder="Ingrese su instagram"
        />

        <input
          type="number"
          name="phone"
          className={inputStyle}
          placeholder="Ingrese su teléfono"
        />

        <input
          type="email"
          name="mail"
          className={inputStyle + "lg:col-span-2"}
          placeholder="Ingrese su correo electrónico"
        />

        <div className="flex justify-between col-span-2">
          <label className="my-2 mx-4 text-left" htmlFor="soyhincha">
            Me considero hincha de Pórtico fútbol club
          </label>
          <input type="checkbox" name="soyhincha" />
        </div>

        <div className="flex justify-between col-span-2">
          <label className="my-2 mx-4 text-left" htmlFor="usoCapital">
            Estoy dispuesto a usar mi capital en favor del equipo
          </label>
          <input type="checkbox" name="usoCapital" />
        </div>

        <div className="flex justify-between col-span-2">
          <label className="my-2 mx-4 text-left" htmlFor="meParoDeManos">
            Me dispongo a pararme de manos sea contra quien sea
          </label>
          <input type="checkbox" name="meParoDeManos" />
        </div>

        <div className="flex justify-between col-span-2">
          <label className="my-2 mx-4 text-left">
            Me comprometo a seguir a PórticoFC a todos lados
          </label>
          <input type="checkbox" name="meComprometo" />
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center">
          <input
            type="submit"
            name="submit"
            className={
              inputStyle +
              "self-center px-6 mt-7 col-span-2 w-full lg:mt-0 lg:col-span-2 lg:w-1/2"
            }
            value="Asociarse"
          />
          <div className={visible + " text-red-600"}>
            Hacé las cosas bien culiado
          </div>
        </div>
      </form>
    </div>
  );
};

export default Asociarse;
