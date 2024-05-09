export const Read = ({ List }) => {
  const { read } = List;
  // console.log("Entro", read); para verificar que le llega read
  return (
    <>
      <div className="containerRead">
        <h2>Read:</h2> <hr /> {/*<hr /> añade un línea debajo del h2 */}
        {/* Object.entries(data) para convertir las propiedades de data en un array
        de pares clave-valor, y luego map para recorrer cada par. */}
        {/* key === 'bookImage' ? ( ... ) : ( ... ): Uso una expresión ternaria que 
        verifica si la clave actual es bookImage. Si es así, se muestra un elemento 
        <img> con el valor de bookImage como src; de lo contrario, se muestra la 
        información como texto. */}
        {/* <strong>{key}:</strong>{" "} elemento strong para resaltar la clave, 
        seguido de : para separar la clave del valor. {" "} para generar un espacio 
        despues de :*/}
        {Object.entries(read).map(([key, value]) => (
          <div key={key}>
            {key === "bookImage" ? (
              <img src={value} alt="Book Cover" style={{ maxWidth: "200px" }} />
            ) : (
              <p>
                <strong>{key}:</strong>{" "}
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((item, index) => (
                      <li key={index}>{item.info}</li>
                    ))}
                  </ul>
                ) : (
                  value
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
