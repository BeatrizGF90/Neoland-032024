import "./Main.css";
import { SubTitle } from "./SubTitle";
import { Title } from "./Title";

export const Main = () => {
  return (
    <main>
      <SubTitle className={"TitleMain"} texto={"PERSONAJES"} />
      {Gallery()}
    </main>
  );
};
