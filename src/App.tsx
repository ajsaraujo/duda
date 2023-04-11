import React, { useState } from "react";
import "./App.css";
import { PagesListing } from "./components/PagesListing";
import { listPages } from "./utils/listPages";
import { InitialForm } from "./components/InitialForm";

export type Inputs = {
  firstPage: string;
  lastPage: string;
};

function App() {
  const [inputs, setInputs] = useState<Inputs>({
    firstPage: "",
    lastPage: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    <div className="center-parent-container">
      <div className="parent-container">
        <header>
          <h1 className="title">Duda's</h1>
        </header>

        <div className="middle-container">
          <InitialForm
            inputs={inputs}
            handlePageChange={handlePageChange}
            handleSubmit={handleSubmit}
          ></InitialForm>

          <div>
            <Result submitted={submitted} inputs={inputs}></Result>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
