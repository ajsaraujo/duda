import "../App.css";
import { areOdd } from "../utils/areOdd";
import { formatPageList } from "../utils/formatPageList";

export function PagesListing(props: { pages: number[] }) {
  const label = areOdd(props.pages) ? "Ímpares" : "Pares";
  const labelAndQuantity = `${label} (${props.pages.length})`;

  return (
    <div className="pages-listing-container">
      <div>
        <h2 className="listing-label">{labelAndQuantity}</h2>
        <span className="page-list">{formatPageList(props.pages)}</span>
      </div>

      <button className="round-button"></button>
    </div>
  );
}
