export function listPages(firstPage: number, lastPage: number): number[][] {
  const firstArray = count(firstPage, lastPage);
  const secondArray = count(firstPage + 1, lastPage);

  return [firstArray, secondArray];
}

function count(firstPage: number, lastPage: number) {
  const array = [];

  for (let i = firstPage; i <= lastPage; i += 2) {
    array.push(i);
  }

  return array;
}
