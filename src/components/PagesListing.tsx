import { formatPageList } from "../utils/formatPageList";

export function PagesListing(pages: number[]) {
  return <div>{formatPageList(pages)}</div>;
}
