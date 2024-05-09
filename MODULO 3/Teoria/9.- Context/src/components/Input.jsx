import "./Input.css";
export const Input = ({ referencia, setCheckFilter, stateData, setFilter }) => {
  return (
    <>
      <label htmlFor="name" className="labelBuscador">
        {" "}
        Busca tu personaje:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        ref={referencia}
        onChange={
          () => {
            //referencia.current.style.color = "red";
            setFilter(
              stateData.data.results.filter((item) =>
                item.name
                  .toLowerCase()
                  .includes(referencia.current.value.toLowerCase())
              )
            );

            setCheckFilter(() => true);
          } //esto seria el mismo valor que el e.target.value
        }
      />
    </>
  );
};
