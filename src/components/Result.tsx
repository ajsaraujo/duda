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
      <PagesListing pages={firstList}></PagesListing>
      <PagesListing pages={secondList}></PagesListing>
      <button onClick={clear}>Limpar</button>
    </>
  );
}
