const Asociarse = () => {
  const handleSubmit = (e) => {
    console.log(e);
  };

  const handleIgChange = (e) => {
    if (e.target.value[0] === "@") return;
    console.log(e.target.value);
    e.target.value = "@" + e.target.value;
  };

  return (
    <div className="text-white w-full h-full bg-black flex flex-col items-center">
      <div>
        <h1 className="text-3xl mt-8 font-normal">Asociarse</h1>
        <h2 className="text-xl font-normal">
          Para asociarse complete el siguiente formulario
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-red-900 p-1 rounded-md border border-gray-100"
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
          />
          <input
            className="bg-red-900 p-1 rounded-md border border-gray-100"
            type="text"
            name="name"
            placeholder="Ingrese su apellido"
          />
          <input
            className="bg-red-900 p-1 rounded-md border border-gray-100"
            type="text"
            name="name"
            placeholder="Ingrese su instagram"
            onChange={handleIgChange}
          />
        </form>
      </div>
    </div>
  );
};

export default Asociarse;
