import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("Herbal Tea benefit increases in Benefit the older it gets", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 21)]
    );
  });
  it("Herbal Tea Benefit increases twice as fast after the expiration date", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 6)]
    );
  });
  it("The Benefit of an item is never negative", () => {
    expect(new Pharmacy([new Drug("test", 20, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 19, 0)]
    );
  });
  it("The Benefit of an item is never more than 50", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 20, 50)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 19, 50)]
    );
  });
  it("Once the expiration date has passed, Benefit degrades twice as fast.", () => {
    expect(new Pharmacy([new Drug("test", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 18)]
    );
  });
  it("Magic Pill never expires nor decreases in Benefit.", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 0, 20)]
    );
  });
  it("Fervex Benefit increases by 2 when there are 10 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 22)]
    );
  });
  it("Fervex Benefit increases by 3 when there are 10 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 23)]
    );
  });
  it("Fervex Benefit drops to 0 after the expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 20)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
  it("Dafalgam Benefit decreases twice as fast", () => {
    expect(new Pharmacy([new Drug("Dafalgam", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgam", 1, 1)]
    );
  });
  it("Dafalgam Benefit decreases twice as fast after expiry too", () => {
    expect(new Pharmacy([new Drug("Dafalgam", 0, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgam", -1, 1)]
    );
  });
});
