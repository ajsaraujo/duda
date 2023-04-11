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
  const [toast, setToast] = useState({ visible: false, message: "" });

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

  function hideToast() {
    setToast({ visible: false, message: "" });
  }

  function showToast(message: string) {
    setToast({ visible: true, message });
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
              showToast={showToast}
            ></Result>
          )}
        </div>
      </div>

      <Toast
        message={toast.message}
        visible={toast.visible}
        onClickOk={hideToast}
      ></Toast>
    </div>
  );
}

export default App;
