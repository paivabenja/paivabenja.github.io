import { useEffect, useRef, useState } from "react";
import escudo from "../assets/escudoPfc.png";
import { Link } from "react-router-dom";

const Asociarse = () => {
  const [warning, setWarning] = useState("");
  const [visible, setVisible] = useState("hidden");
  const [data, setData] = useState({});
  const inputStyle =
    "duration-300 bg-neutral-900 p-2 rounded-md border text-neutral-300 " +
    "border-neutral-600 m-2 placeholder:text-neutral-600 " +
    "disabled:submit:border-neutral-600 enabled:hover:border-neutral-300 " +
    "focus:border-neutral-300 focus:outline-none " +
    "enabled:outline-none " +
    "col-span-2 lg:col-span-1 ";

  const handleIgChange = (e) => {
    if (e.target.value[0] === "@") return;
    e.target.value = "@" + e.target.value;
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const type = e.target.type;
    let newData = data;
    newData[name] = { type, value };
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (Object.values(data) < 9) {
      setWarning("Debe llenar todos los campos del formulario");
      setVisible("block");
      return;
    }

    for (let i in data) {
      if (data[i].type === "checkbox" && data[i].value !== true) {
        setWarning("Para asociarse debe comprometerse con el equipo");
        setVisible("block");
        return;
      }

      if (data[i].type !== "checkbox" && data[i].value === "") {
        setWarning("Ningún campo puede estar vacío");
        setVisible("block");
        return;
      }
    }

    window.location.replace("https://chat.whatsapp.com/Kx5NeEqVQC12iBMgLM7JiF");
  };

  return (
    <div className="overflow-auto text-neutral-300 h-full text-center w-full bg-neutral-950 flex flex-col items-center justify-start">
      <Link to="/">
        <img src={escudo} className="duration-300 mt-8 h-16 lg:mt-8 lg:h-32" />
      </Link>
      <form
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-2 p-8 rounded-2xl"
      >
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Ingrese su nombre"
        />

        <input
          type="text"
          name="lastname"
          className="input"
          placeholder="Ingrese su apellido"
        />

        <input
          type="text"
          name="insta"
          onChange={handleIgChange}
          className="input"
          placeholder="Ingrese su instagram"
        />

        <input
          type="number"
          name="phone"
          className="input"
          placeholder="Ingrese su teléfono"
        />

        <input
          type="email"
          name="mail"
          className="input lg:col-span-2"
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
            className="input self-center px-6 mt-7 col-span-2 w-full lg:mt-0 lg:col-span-2 lg:w-1/2"
            value="Asociarse"
          />
          <div className={visible + " text-red-600"}>{warning}</div>
        </div>
      </form>
    </div>
  );
};

export default Asociarse;
