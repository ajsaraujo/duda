import "../App.css";
import { areOdd } from "../utils/areOdd";
import { copyToClipboard } from "../utils/copyToClipboard";
import { formatPageList } from "../utils/formatPageList";

export function PagesListing(props: {
  pages: number[];
  showToast: (message: string) => void;
}) {
  const label = areOdd(props.pages) ? "Ímpares" : "Pares";
  const labelAndQuantity = `${label} (${props.pages.length})`;
  const formattedPageList = formatPageList(props.pages);

  function copyPageList() {
    copyToClipboard(formattedPageList);
    props.showToast(`As páginas ${label} foram copiadas.`);
  }

  return (
    <div className="pages-listing-container">
      <div>
        <h2 className="listing-label">{labelAndQuantity}</h2>
        <span className="page-list">{formattedPageList}</span>
      </div>

      <button className="round-button" onClick={copyPageList}></button>
    </div>
  );
}
