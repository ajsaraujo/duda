import React, { useState } from "react";
import "./App.css";
import { PagesListing } from "./components/PagesListing";
import { listPages } from "./utils/listPages";

type Inputs = {
  firstPage: string;
  lastPage: string;
};

function App() {
  const [inputs, setInputs] = useState<Inputs>({
    firstPage: "1",
    lastPage: "10",
  });
  const [submitted, setSubmitted] = useState(true);

  function handleSubmit() {
    setSubmitted(true);
  }

  function clear() {
    setSubmitted(false);
    setInputs({ firstPage: "", lastPage: "" });
  }

  function handlePageChange(page: keyof Inputs) {
    return function handleSpecificPageChange(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      setInputs({ ...inputs, [page]: event.target.value });
    };
  }

  function Result(props: { submitted: boolean; inputs: Inputs }) {
    const { submitted, inputs } = props;

    if (!submitted) {
      return null;
    }

    const [firstList, secondList] = listPages(
      +inputs.firstPage,
      +inputs.lastPage
    );

    return (
      <>
        <PagesListing pages={firstList}></PagesListing>
        <PagesListing pages={secondList}></PagesListing>
        <button onClick={clear}>Limpar</button>
      </>
    );
  }

  return (
    <div className="parent-container">
      <header>
        <h1 className="title">Duda's</h1>
      </header>

      <div className="middle-container">
        <div className="form">
          <div className="form-field">
            <label htmlFor="firstPage">Primeira página</label>
            <input
              id="firstPage"
              value={inputs.firstPage}
              onChange={handlePageChange("firstPage")}
            ></input>
          </div>

          <div className="form-field">
            <label htmlFor="lastPage">Última página</label>
            <input
              id="lastPage"
              value={inputs.lastPage}
              onChange={handlePageChange("lastPage")}
            ></input>
          </div>

          <button className="list-pages-button" onClick={handleSubmit}>
            Listar páginas
          </button>
        </div>

        <div>
          <Result submitted={submitted} inputs={inputs}></Result>
        </div>
      </div>
    </div>
  );
}

export default App;
