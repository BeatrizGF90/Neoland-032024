import "./App.css";
import { Footer, H1, Header } from "./components";
import { dataGallery } from "./data";
import { Gallery } from "./pages";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <H1 className={"tituloGallery"}>GALLERY</H1>
        <Gallery data={dataGallery} />
      </main>
      <Footer />
    </>
  );
};

export default App;
