import { State } from "@/interfaces/data";
import { calculate } from "./calculators";

describe("Calculator Utility", () => {
  const sampleState: State = {
    personalData: {
      inflationRate: 3,
      startingAge: 50,
      retirementAge: 60,
      retirePeriod: 20,
      desiredMonthlyIncome: 20000,
    },
    portfolios: [
      {
        name: "stock",
        startingAge: 50,
        principalAmount: 1000,
        monthlySave: 100,
        annualReturn: 10,
        annualReturnList: [],
        monthlySaveList: [],
        styles: {
          color: "#008254",
        },
      },
      {
        name: "cash",
        startingAge: 50,
        principalAmount: 100000,
        monthlySave: 1000,
        annualReturn: 2,
        annualReturnList: [],
        monthlySaveList: [],
        styles: {
          color: "#0063b9",
        },
      },
      {
        name: "land",
        startingAge: 55,
        principalAmount: 2000000,
        monthlySave: 0,
        annualReturn: 4,
        annualReturnList: [],
        monthlySaveList: [],
        styles: {
          color: "#808080",
        },
      },
    ],
  };
  describe("Saving years must equal to result array length", () => {
    it("must return result length=10 if saving years=10", () => {
      const result = calculate(sampleState);

      expect(result.length).toEqual(10);
    });
  });
  describe("Last result year must equal to (retirementAge - 1)", () => {
    it("must return last result year=59, if retirementAge=60", () => {
      const result = calculate(sampleState);
      const lastResult = result[result.length - 1];

      expect(lastResult.year).toEqual(59);
    });
  });
  describe("with single monthlySave value for every years", () => {
    it("must return last total value=23631", () => {
      const result = calculate(sampleState);
      const lastResult = result[result.length - 1];

      expect(lastResult.stock).toEqual(23631);
    });
  });
  // describe("with monthlySaveList", () => {
  //   it("must return last total value=11128", () => {
  //     const initialPreAssumption: PreAssumptionInterface = {
  //       inflationRate: 3,
  //       startingAge: 55,
  //       retirementAge: 60,
  //       principalAmount: 1000,
  //       monthlySave: 100,
  //       annualReturn: 10,
  //       monthlySaveList: [100, 110, 120, 130, 140],
  //     };

  //     const result = calculate(initialPreAssumption);
  //     const lastResult = result[result.length - 1];

  //     expect(lastResult.stock).toEqual(11128);
  //   });
  // });
  // describe("with monthlySaveList increase 10% each year", () => {
  //   it("must return last total value=11274", () => {
  //     const initialPreAssumption: PreAssumptionInterface = {
  //       inflationRate: 3,
  //       startingAge: 55,
  //       retirementAge: 60,
  //       principalAmount: 1000,
  //       monthlySave: 100,
  //       annualReturn: 10,
  //       monthlySaveList: [100, 110, 121, 133.1, 146.41],
  //     };

  //     const result = calculate(initialPreAssumption);
  //     const lastResult = result[result.length - 1];

  //     expect(lastResult.stock).toEqual(11274);
  //   });
  // });
  // describe("goalWithInflation", () => {
  //   it("must return goalWithInflation=11000", () => {
  //     const initialPreAssumption: PreAssumptionInterface = {
  //       inflationRate: 3,
  //       startingAge: 55,
  //       retirementAge: 60,
  //       principalAmount: 1000,
  //       monthlySave: 100,
  //       annualReturn: 10,
  //       monthlySaveList: [100, 110, 121, 133.1, 146.41],
  //       goal: 9488.6,
  //     };

  //     const result = calculate(initialPreAssumption);
  //     const lastResult = result[result.length - 1];

  //     expect(lastResult.goal).toEqual(11000);
  //   });
  // });
  // describe("annualReturnList, inconsistent annual return", () => {
  //   it("must return last total value=10473", () => {
  //     const initialPreAssumption: PreAssumptionInterface = {
  //       inflationRate: 3,
  //       startingAge: 55,
  //       retirementAge: 60,
  //       principalAmount: 1000,
  //       monthlySave: 100,
  //       annualReturn: 10,
  //       annualReturnList: [10, 10, 8, 8, 5],
  //       monthlySaveList: [100, 110, 121, 133.1, 146.41],
  //       goal: 9488.6,
  //     };

  //     const result = calculate(initialPreAssumption);
  //     const lastResult = result[result.length - 1];

  //     expect(lastResult.stock).toEqual(10473);
  //   });
  // });
});
