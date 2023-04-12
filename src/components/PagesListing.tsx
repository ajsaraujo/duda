import "../App.css";
import "./PagesListing.css";
import { areOdd } from "../utils/areOdd";
import { copyToClipboard } from "../utils/copyToClipboard";
import { formatPageList } from "../utils/formatPageList";
import icon from "./icon-copy.svg";

export function PagesListing(props: {
  pages: number[];
  showToast: (message: string) => void;
  hideToast: () => void;
}) {
  const label = areOdd(props.pages) ? "Ímpares" : "Pares";
  const labelAndQuantity = `${label} (${props.pages.length})`;
  const formattedPageList = formatPageList(props.pages);
  const fullPageList = props.pages.join(", ");

  let timeout: NodeJS.Timeout;

  function copyPageList() {
    copyToClipboard(fullPageList);
    props.showToast(`As páginas ${label.toLowerCase()} foram copiadas.`);

    if (timeout) {
      timeout.refresh();
    } else {
      timeout = setTimeout(props.hideToast, 2000);
    }
  }

  return (
    <div className="pages-listing-container">
      <div>
        <h2 className="listing-label">{labelAndQuantity}</h2>
        <span className="page-list">{formattedPageList}</span>
      </div>

      <button className="round-button" onClick={copyPageList}>
        <img
          src={icon}
          className="white-icon icon"
          alt="Copy to clipboard icon"
        ></img>
      </button>
    </div>
  );
}
