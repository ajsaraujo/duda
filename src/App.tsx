import React, { useState } from "react";
import "./App.css";
import { InitialForm } from "./components/InitialForm";
import { Result } from "./components/Result";
import { Toast } from "./toast/Toast";

export type Inputs = {
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

      <Toast
        message="Por favorzinho, informe a primeira e última página."
        onClickOk={() => {}}
        visible={true}
      ></Toast>
    </div>
  );
}

export default App;
