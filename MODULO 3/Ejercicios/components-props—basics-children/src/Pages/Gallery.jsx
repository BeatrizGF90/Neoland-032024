import { Image } from "../Components";
import "./Gallery.css";
export const Gallery = ({ data }) => {
  return (
    <div id="galleryPage">
      {data.map((item) => (
        <Image
          src={item.image}
          name={item.name}
          serie={item.serie}
          key={item.name}
        />
      ))}
    </div>
  );
};
