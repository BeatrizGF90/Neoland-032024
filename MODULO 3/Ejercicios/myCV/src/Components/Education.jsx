// La función JSON.stringify(item) se utiliza aquí para generar
// una cadena única que representa el objeto item de tu lista. Esto
// es útil cuando tus objetos no tienen una propiedad única que pueda
// servir como clave, como un id por ejemplo. Al convertir el objeto
// a una cadena JSON única, puedes garantizar que cada elemento de la
// lista tendrá una clave única en React.

import "./Education.css";

export const Education = ({ education }) => {
  return (
    <div>
      <div className="educationCard">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="containerEducation">
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
