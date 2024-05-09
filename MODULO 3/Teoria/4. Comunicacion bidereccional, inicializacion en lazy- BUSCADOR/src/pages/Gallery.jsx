import { Figure } from "../components";
import "./Gallery.css";
export const Gallery = ({ data }) => {
  return (
    <div id="galleryPage">
      {console.log("💪", data)}

      {data.map((item) => (
        <Figure src={item.picture_url} name={item.name} key={item.name} />
      ))}
    </div>
  );
};
