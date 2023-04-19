import { useEffect, useRef, useState } from "react";

const Asociarse = () => {
  const inputStyle =
    "duration-300 bg-neutral-900 p-2 rounded-md border text-neutral-300 " +
    "border-neutral-600 m-2 placeholder:text-neutral-600 " +
    "disabled:submit:border-neutral-600 enabled:hover:border-neutral-300 " +
    "focus:border-neutral-300 focus:outline-none " +
    "enabled:outline-nonefocus:outline-none enabled:outline-none " +
    "col-span-2 lg:col-span-1 ";


  const handleIgChange = (e) => {
    if (e.target.value[0] === "@") return;
    e.target.value = "@" + e.target.value;
  };
  const [formValidation, setFormValidation] = useState({
    name: false,
    lastname: false,
    insta: false,
    number: false,
    mail: false,
    checkbox: [false, false, false, false],
  });

  return (
    <div className="text-neutral-300 h-full text-center w-full bg-neutral-950 flex flex-col items-center justify-center">
      <form
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
          type="text"
          name="phone"
          className={inputStyle}
          placeholder="Ingrese su teléfono"
        />

        <input
          type="text"
          name="mail"
          className={
            formValidation.mail
              ? inputStyle +
                "lg:col-span-2 border-green-500 focus:border-green-500"
              : inputStyle +
                "lg:col-span-2  border-red-500 focus:border-red-500"
          }
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
          <input type="checkbox" />
        </div>
        <div className="col-span-2 flex justify-center">
          <input
            type="submit"
            name="submit"
            className={
              inputStyle +
              "self-center px-6 mt-7 col-span-2 w-full lg:mt-0 lg:col-span-2 lg:w-1/2"
            }
            value="Asociarse"
          />
        </div>
      </form>
    </div>
  );
};

export default Asociarse;
