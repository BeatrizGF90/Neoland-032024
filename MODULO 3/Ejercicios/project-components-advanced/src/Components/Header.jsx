import "./Header.css";
import { Title } from "./Title";

export const Header = () => {
  return (
    <header>
      <Title className={"TitleHeader"} texto={"ANIME"} />
      <Title className={"TitleHeader"} texto={"🛸"} />
    </header>
  );
};
