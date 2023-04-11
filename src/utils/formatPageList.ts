export function formatPageList(pageList: number[]): string {
  const MAX_LENGTH = 50;

  const formattedList = pageList.join(", ");

  if (formattedList.length <= MAX_LENGTH) {
    return formattedList;
  }

  if (pageList.length < 6) {
    return pageList[0] + " a " + pageList[pageList.length];
  }

  const firstThreeItems = pageList.slice(0, 3);
  const lastThreeItems = pageList.slice(pageList.length - 3);
  return [...firstThreeItems, "(...)", ...lastThreeItems].join(", ");
}
