import { areOdd } from "./are-odd";

describe("areOdd()", () => {
  it("should return true if the numbers are odd", () => {
    expect(areOdd([1, 3, 5])).toBe(true);
  });

  it("should return false if the numbers are even", () => {
    expect(areOdd([2, 4, 6])).toBe(false);
  });

  it("should return false if the array is empty", () => {
    expect(areOdd([])).toBe(false);
  });
});
