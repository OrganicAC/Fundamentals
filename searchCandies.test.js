const searchCandies = require("./searchCandies");

describe("searchCandies", () => {
  it("returns all candies begninning with Ma and under 10 cost", () => {
    expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
  });

  it("returns only Mars when Ma and under 2", () => {
    expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
  });

  it("returns all candies beginning with S and under 10 cost", () => {
    expect(searchCandies("S", 10)).toEqual([
      "Skitties",
      "Skittles",
      "Starburst",
    ]);
  });

  it("returns all candies beginning with S and under 4 cost", () => {
    expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
  });

  it("returns the correct result even when using lowercase", () => {
    expect(searchCandies("mAr", 6)).toEqual(["Mars"]);
  });
});
