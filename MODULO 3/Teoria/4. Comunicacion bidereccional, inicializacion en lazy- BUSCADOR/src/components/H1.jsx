import "./H1.css";

export const H1 = ({ children, className }) => {
  // el children es un tipo de props.children
  return <h1 className={className}>{children}</h1>;
};
