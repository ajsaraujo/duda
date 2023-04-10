import { areOdd } from "../utils/are-odd";
import { formatPageList } from "../utils/formatPageList";

export function PagesListing(props: { pages: number[] }) {
  const label = areOdd(props.pages) ? "Ímpares" : "Pares";
  return (
    <div>
      <h2>{label}</h2>
      <span>{formatPageList(props.pages)}</span>
    </div>
  );
}
