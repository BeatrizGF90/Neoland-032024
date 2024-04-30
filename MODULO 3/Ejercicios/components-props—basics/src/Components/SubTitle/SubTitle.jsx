import "./SubTitle.css";

export const SubTitle = ({ texto, className }) => {
  return (
    <h2 className={className}>
      {texto}
      <br></br>
    </h2>
  );
};
