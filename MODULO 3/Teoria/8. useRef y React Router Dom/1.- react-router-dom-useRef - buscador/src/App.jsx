import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
