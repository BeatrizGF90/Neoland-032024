/** HACEMOS EL DESTRUCTURING EN OTRA LINEA */

// export const Parrafo = (props) => {
//   const { texto, className } = props;
//   return <p className={className}>{texto}</p>;
// };

/* COMPONENTE HACIENDO EL DESTRUCTURIN EN LOS PARENTESIS DE LAS PROPS */

export const Parrafo = ({ texto, className }) => {
  return <p className={className}>{texto}</p>;
};
