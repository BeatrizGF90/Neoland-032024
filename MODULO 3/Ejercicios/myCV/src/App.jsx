import { useState } from "react";
import "./App.css";

import { CV } from "./CV/CV";

import { About, Education, Experience, Hero, More } from "./Components";

const { hero, education, experience, languages, habilities, volunteer } = CV;

export const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} /> <br />
      <About aboutMe={hero.aboutMe} /> <br />
      <div className="containerButton">
        <div className="separar" />
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(true)}
        >
          EDUCATION
        </button>{" "}
        <button
          className="custom-btn btn-4"
          onClick={() => setShowEducation(false)}
        >
          EXPERIENCE
        </button>
        <br />
        <div className="separar" />
      </div>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        <br />
      </div>
      <div>
        <More
          languages={languages}
          habilities={habilities}
          volunteer={volunteer}
        />
        <br />
      </div>
      ;
    </div>
  );
};
