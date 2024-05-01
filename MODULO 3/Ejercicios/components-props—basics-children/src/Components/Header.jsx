import "./Header.css";
import { Nav } from "./Nav";
import { Title } from "./Title";

export const Header = () => {
  return (
    <header>
      <Nav />
      <Title className={"TitleHeader"} texto={"ANIME"} />
      <Title className={"TitleHeader"} texto={"⛩️"} />
    </header>
  );
};
