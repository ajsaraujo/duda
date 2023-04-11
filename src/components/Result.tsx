import { Inputs } from "../App";
import { listPages } from "../utils/listPages";
import { PagesListing } from "./PagesListing";

export function Result(props: {
  submitted: boolean;
  inputs: Inputs;
  setSubmitted: (bool: boolean) => void;
  setInputs: (inputs: Inputs) => void;
}) {
  const { setSubmitted, setInputs, inputs } = props;

  function clear() {
    setSubmitted(false);
    setInputs({ firstPage: "", lastPage: "" });
  }

  const [firstList, secondList] = listPages(
    +inputs.firstPage,
    +inputs.lastPage
  );

  return (
    <>
      <p className="text-secondary listing-pages">
        Listando páginas de {inputs.firstPage} a {inputs.lastPage}
      </p>

      <div className="first-pages-listing">
        <PagesListing pages={firstList}></PagesListing>
      </div>

      <PagesListing pages={secondList}></PagesListing>

      <button className="primary-button reset-button" onClick={clear}>
        Recomeçar
      </button>
    </>
  );
}
