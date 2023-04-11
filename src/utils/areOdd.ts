export function areOdd(pages: number[]): boolean {
  if (pages.length === 0) {
    return false;
  }

  const firstNumberIsOdd = pages[0] % 2 === 1;

  return firstNumberIsOdd;
}
