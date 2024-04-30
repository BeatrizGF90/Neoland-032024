import { useState } from "react";
import React from "react";
import { Title, SubTitle, Image, Paragraph } from "./Components";

const App = () => {
  return (
    <div className="App">
      <Title texto={"Welcome to Components ReactJS"} />
      <SubTitle texto={"This is a example components with ReactJS"} />
      <Image />
      <Paragraph texto={"Este es mi primer ejercicio"} />
    </div>
  );
};

export default App;
