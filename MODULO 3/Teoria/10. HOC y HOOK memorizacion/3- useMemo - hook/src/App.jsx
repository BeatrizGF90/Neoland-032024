import { useCallback, useState, useMemo } from "react"; // hook

import "./App.css";

/**
 * useMemo -----> memoriza el return de una funcionn hoook -> rememoriza cuando hay en el array de dependencias una variable que cambia su valor
 * react.Memo ----> HOC --> memoriza un componente // ------> rememoriza cuando cambian las props
 * useCallback ----> hook ---> memoriza una funcion // -----> rememoriza cuando hay en el array de dependencias una variable que cambia su valor
 */
const App = () => {
  const [reload, setReload] = useState(false);
  const [rememo, setRememo] = useState(false);

  const mapScores = (scores, caller) => {
    console.log("Invocamos mapScores =>", caller);

    return scores.map((num, index) => {
      const calc = (num * 3) / 2;
      const color = calc < 3 ? "🔴" : "🟢";

      return (
        <p key={index}>
          {calc} {color}
        </p>
      );
    });
  };

  const noMemo = mapScores([1, 23, 2, 4, 11], "no memorizado 👹");
  const memo = useMemo(
    () => mapScores([1, 23, 2, 4, 11], "memorizado 🌎"),
    [rememo]
  );
  return (
    <div className="rows">
      <div>
        <h3>Memorizado</h3>
        {memo}
      </div>
      <div>
        <h3>No Memorizado</h3>
        {noMemo}
      </div>

      <button onClick={() => setRememo((value) => !value)}>REMEMO👺 </button>
      <button onClick={() => setReload((value) => !value)}>RELOAD🌱 </button>
    </div>
  );
};

export default App;
