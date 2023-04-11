import { Inputs } from "../App";
import { listPages } from "../utils/listPages";
import { PagesListing } from "./PagesListing";

export function Result(props: {
  submitted: boolean;
  inputs: Inputs;
  setSubmitted: (bool: boolean) => void;
  setInputs: (inputs: Inputs) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
}) {
  const { setSubmitted, setInputs, inputs } = props;

  function clear() {
    setSubmitted(false);
    setInputs({ firstPage: "", lastPage: "" });
    props.hideToast();
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
        <PagesListing
          pages={firstList}
          showToast={props.showToast}
          hideToast={props.hideToast}
        ></PagesListing>
      </div>

      <PagesListing
        pages={secondList}
        showToast={props.showToast}
        hideToast={props.hideToast}
      ></PagesListing>

      <button className="primary-button reset-button" onClick={clear}>
        Recomeçar
      </button>
    </>
  );
}
