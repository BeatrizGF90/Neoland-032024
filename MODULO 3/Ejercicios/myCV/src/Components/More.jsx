import "./More.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const More = ({ languages, habilities, volunteer }) => {
  return (
    <div className="more">
      <div className="moreCard">
        <h2>Languages: </h2> <hr />
        <ul className="customList">
          {languages.map((language, index) => (
            <li key={index}>
              <p>🗣️ Language: {language.language}</p>
              <p>🖊️ Writing: {language.wrlevel}</p>
              <p>🎙️ Speaking: {language.splevel}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="moreCard">
        <br />
        <h2>Habilities: </h2> <hr />
        <ul className="customList">
          {habilities.map((habilitie, index) => (
            <li key={index}>
              <p>✅ {habilitie}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="moreCard">
        <br />
        <h2>Volunteer: </h2> <hr /> <br />
        <ul className="customList">
          {volunteer.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={faHeart} /> {/* Ícono de FontAwesome */}
              <p>Name: {item.name}</p>
              <p>Where: {item.where}</p>
              <p>Description: {item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
