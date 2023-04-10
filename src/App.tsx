import React, { useState } from "react";
import "./App.css";
import { PagesListing } from "./components/PagesListing";
import { listPages } from "./utils/listPages";

type Inputs = {
  firstPage: string;
  lastPage: string;
};

function App() {
  const [inputs, setInputs] = useState<Inputs>({ firstPage: "", lastPage: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setSubmitted(true);
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
      </>
    );
  }

  return (
    <div>
      <h1>Duda's</h1>

      <div>
        <div>
          <label htmlFor="firstPage">Primeira página</label>
          <input
            id="firstPage"
            value={inputs.firstPage}
            onChange={handlePageChange("firstPage")}
          ></input>
        </div>

        <div>
          <label htmlFor="lastPage">Última página</label>
          <input
            id="lastPage"
            value={inputs.lastPage}
            onChange={handlePageChange("lastPage")}
          ></input>
        </div>

        <button onClick={handleSubmit}>Listar páginas</button>
      </div>

      <div>
        <Result submitted={submitted} inputs={inputs}></Result>
      </div>
    </div>
  );
}

export default App;
