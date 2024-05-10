import "./Experience.css";

export const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experienceCard">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="containerExperience">
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
