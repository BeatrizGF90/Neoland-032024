// - crear proyecto llamado my-hobbies
// - limpiar el código de info y config por defecto.
// - crear dentro de src una carpeta componentes.
// - dentro de src también, crear una carpeta HOBBIES que tendrá un archivo js llamado HOBBIES.js en el que mockearemos la información que vayamos a usar.

import "./App.css";
import { Languages, Movies } from "./Components";

import { Read } from "./Components/Read";
import { SongsHeard } from "./Components/SongsHeard";
import { Sports } from "./Components/Sports";
import { MyHobbies } from "./HOBBIES";

function App() {
  return (
    <div className="ContainerGeneral">
      <Read List={MyHobbies} /> <br />
      <Sports Sports={MyHobbies} /> <br />
      <Movies Movies={MyHobbies} /> <br />
      <Languages List={MyHobbies} /> <br />
      <SongsHeard Songs={MyHobbies} /> <br />
    </div>
  );
}

export default App;
