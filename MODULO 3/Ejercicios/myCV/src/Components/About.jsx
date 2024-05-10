import "./About.css";

export const About = ({ aboutMe }) => {
  return (
    <div>
      <div className="aboutCard">
        <h2>About Me: </h2> <hr />
        {aboutMe.map((item, index) => {
          return (
            <div key={index} className="aboutItem">
              <p className="info">📕 {item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
