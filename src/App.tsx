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
    firstPage: "",
    lastPage: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    okButtonLabel: "",
  });

  function handleSubmit() {
    const { firstPage, lastPage } = inputs;

    if (!firstPage || !lastPage) {
      showToast("Por favorzinho, informe a primeira e última página.");
      return;
    }

    if (!isNumeric(firstPage) || !isNumeric(lastPage)) {
      showToast("Seu bobinho... você deve inserir apenas números!");
      return;
    }

    if (+firstPage > +lastPage) {
      showToast("Eita. A primeira página é depois da última?", "Não...");
      return;
    }

    setSubmitted(true);
  }

  function isNumeric(input: string) {
    return !isNaN(Number(input));
  }

  function handlePageChange(page: keyof Inputs) {
    return function handleSpecificPageChange(
      event: React.ChangeEvent<HTMLInputElement>
    ) {
      setInputs({ ...inputs, [page]: event.target.value });
    };
  }

  function hideToast() {
    setToast({ ...toast, visible: false });
  }

  function showToast(message: string, okButtonLabel: string = "Tá bem") {
    hideToast();

    setTimeout(() => {
      setToast({ visible: true, message, okButtonLabel });
    }, 600);
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
        okButtonLabel={toast.okButtonLabel}
        onClickOk={hideToast}
      ></Toast>
    </div>
  );
}

export default App;
