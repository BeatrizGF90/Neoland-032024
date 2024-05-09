import { Figure } from "../components";
import "./Gallery.css";
export const Gallery = ({ data }) => {
  const { characters } = data;
  console.log("🚀 ~ Gallery ~ characters:", characters);
  return (
    <div id="galleryPage">
      {characters.map((item) => (
        <Figure src={item.picture_url} name={item.name} key={item.name} />
      ))}
    </div>
  );
};
