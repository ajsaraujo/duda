import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Duda's</h1>

      <form>
        <div>
          <label htmlFor="firstPage">Primeira página</label>
          <input id="firstPage"></input>
        </div>

        <div>
          <label htmlFor="lastPage">Última página</label>
          <input id="lastPage"></input>
        </div>

        <button type="submit">Listar páginas</button>
      </form>
    </div>
  );
}

export default App;
