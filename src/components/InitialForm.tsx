import { Inputs } from "../App";
import "../App.css";
import "./InitialForm.css";

export function InitialForm(props: {
  inputs: Inputs;
  handlePageChange: (
    page: keyof Inputs
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}) {
  const { inputs, handlePageChange, handleSubmit } = props;

  return (
    <div className="initial-form-container">
      <div className="form-field">
        <label htmlFor="firstPage">Primeira página</label>
        <input
          id="firstPage"
          value={inputs.firstPage}
          onChange={handlePageChange("firstPage")}
          autoComplete="off"
          inputMode="numeric"
        ></input>
      </div>

      <div className="form-field">
        <label htmlFor="lastPage">Última página</label>
        <input
          id="lastPage"
          value={inputs.lastPage}
          onChange={handlePageChange("lastPage")}
          autoComplete="off"
          inputMode="numeric"
        ></input>
      </div>

      <button
        className="primary-button list-pages-button"
        onClick={handleSubmit}
      >
        Listar páginas
      </button>
    </div>
  );
}
