import { formatPageList } from "./formatPageList";

describe("formatPageList", () => {
  it("should join the pages with commas and spaces", () => {
    expect(formatPageList([1, 3, 5])).toEqual("1, 3, 5");
  });
});
