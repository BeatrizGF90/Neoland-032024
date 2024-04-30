import { Image, SubTitle } from "../Components";
import "./Gallery.css";
export const Gallery = () => {
  return (
    <div id="galleryPage">
      <SubTitle className={"SubTitle"} texto={"Hombres"} />
      <Image
        description={"Gon"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712648992/pensarTresEnRaya_u2hn2f.gif"
        }
        alt={"Imagen Gon"}
      />
      <Image
        description={"Monkey D. Luffy"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301563/Imagen16_q7wbqy.jpg"
        }
        alt={"Monkey D. Luffy"}
      />
      <Image
        description={"Naruto"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301557/Imagen8_abtchm.jpg"
        }
        alt={"Naruto"}
      />
      <Image
        description={"Mashle"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301558/Imagen10_wa3cfe.jpg"
        }
        alt={"Mashle"}
      />
      <SubTitle className={"SubTitle"} texto={"Mujeres"} />
      <Image
        description={"Aqua"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301557/Imagen9_woglpi.jpg"
        }
        alt={"Aqua"}
      />
      <Image
        description={"Jinx"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301554/Imagen4_tv5vlt.jpg"
        }
        alt={"Jinx"}
      />
      <Image
        description={"Himiko Toga"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301553/Imagen3_cxnzf0.jpg"
        }
        alt={"Himiko Toga"}
      />
      <Image
        description={"Nezuko"}
        src={
          "https://res.cloudinary.com/dszkfnjwy/image/upload/v1712301551/Imagen1_btw66o.jpg"
        }
        alt={"Nezuko"}
      />
    </div>
  );
};
