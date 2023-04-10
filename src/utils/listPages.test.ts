import { listPages } from "./listPages";

describe("listPages()", () => {
  it("should list the pages", () => {
    const [oddPages, evenPages] = listPages(1, 10);

    expect(oddPages).toEqual([1, 3, 5, 7, 9]);
    expect(evenPages).toEqual([2, 4, 6, 8, 10]);
  });

  it("should work when the interval starts with an even number", () => {
    const [evenPages, oddPages] = listPages(2, 6);

    expect(evenPages).toEqual([2, 4, 6]);
    expect(oddPages).toEqual([3, 5]);
  });
});
