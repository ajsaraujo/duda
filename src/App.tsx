import React, { useState } from "react";
import "./App.css";
import { PagesListing } from "./components/PagesListing";
import { listPages } from "./utils/listPages";
import { InitialForm } from "./components/InitialForm";
import { Result } from "./components/Result";

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

  function handlePageChange(page: keyof Inputs) {
    return function handleSpecificPageChange(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      setInputs({ ...inputs, [page]: event.target.value });
    };
  }

  return (
    <div className="center-parent-container">
      <div className="parent-container">
        <header>
          <h1 className="title">Duda's</h1>
        </header>

        <div className="middle-container">
          {!submitted ? (
            <InitialForm
              inputs={inputs}
              handlePageChange={handlePageChange}
              handleSubmit={handleSubmit}
            ></InitialForm>
          ) : (
            <Result
              submitted={submitted}
              inputs={inputs}
              setInputs={setInputs}
              setSubmitted={setSubmitted}
            ></Result>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
