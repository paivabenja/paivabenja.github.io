import { useState } from "react";

const Asociarse = () => {
  const FormInput = ({
    type,
    placeholder,
    name,
    className,
    handleChange,
    value,
    onSubmit,
  }) => {
    return (
      <input
        className={
          "duration-300 bg-neutral-900 p-2 rounded-md border text-neutral-300 " +
          "border-neutral-600 m-2 placeholder:text-neutral-600 " +
          "disabled:submit:border-neutral-600 enabled:hover:border-neutral-300 " +
          "focus:border-neutral-300 focus:outline-none " +
          "enabled:outline-nonefocus:outline-none enabled:outline-none " +
          "w-1/2 lg:w-full :bg-black" +
          className
        }
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    for (let i = 0; i < 10; i++) {
      if (e.target[i].type === "checkbox") {
        if (e.target[i].checked == false) {
          console.log(i + ": not checked");
          alert("cagon");
          return;
        }
        console.log(i + ": checked");
      }

      if (e.target[i].type !== "checkbox" || e.target[i].type !== "submit") {
        if (e.target[i].value == "") {
          alert("cagon");
          return;
        } else {
          console.log(i + ": " + e.target[i].value);
        }
      }

      if (e.target[i].type == "submit") {
        console.log(i + ": submit");
        return;
      }
    }

    alert("submitted");
  };

  const handleIgChange = (e) => {
    if (e.target.value[0] === "@") return;
    e.target.value = "@" + e.target.value;
  };

  return (
    <div className="h-full text-center text-gray-300 w-full bg-neutral-900 flex flex-col items-center justify-center">
      <div>
        <h2 className="text-xl font-normal mb-4">
          Para asociarse complete el siguiente formulario
        </h2>
        <form className="flex flex-col items-stretch" onSubmit={handleSubmit}>
          <div className="">
            <FormInput
              type="text"
              name="name"
              placeholder="Ingrese su nombre"
            />
            <FormInput
              type="text"
              name="lastname"
              placeholder="Ingrese su apellido"
            />
          </div>
          <div>
            <FormInput
              type="text"
              name="insta"
              placeholder="Ingrese su instagram"
              handleChange={handleIgChange}
            />
            <FormInput
              type="number"
              name="phoneNumber"
              placeholder="Ingrese su número de telefono"
            />
          </div>

          <div className="flex justify-center">
            <FormInput
              type="mail"
              name="email"
              placeholder="Ingrese su dirección de correo electrónico"
            />
          </div>

          <div className="flex flex-col items-center mt-2">
            <div className="flex justify-between w-full">
              <label className="my-2 mx-4" htmlFor="soyhincha">
                Me considero hincha de Pórtico fútbol club
              </label>
              <FormInput type="checkbox" name="soyhincha" />
            </div>
            <div className="flex justify-between w-full">
              <label className="my-2 mx-4" htmlFor="usoCapital">
                Estoy dispuesto a usar mi capital en favor del equipo
              </label>
              <FormInput type="checkbox" name="usoCapital" />
            </div>
            <div className="flex justify-between w-full">
              <label className="my-2 mx-4" htmlFor="meParoDeManos">
                Me dispongo a pararme de manos sea contra quien sea
              </label>
              <FormInput type="checkbox" name="meParoDeManos" />
            </div>
            <div className="flex justify-between w-full">
              <label className="my-2 mx-4">
                Me comprometo a seguir a PórticoFC a todos lados
              </label>
              <FormInput type="checkbox" />
            </div>
          </div>
          <FormInput type="submit" onSubmit={handleSubmit} value="Asociarse" />
        </form>
      </div>
    </div>
  );
};

export default Asociarse;
