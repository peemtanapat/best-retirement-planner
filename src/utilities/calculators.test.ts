import { PreAssumptionInterface } from "@/interfaces/data";
import { calculate } from "./calculators";

describe("Calculator Utility", () => {
  describe("Saving years must equal to result array length", () => {
    it("must return result length=5 if saving years=5", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 200000,
        monthlySave: 10000,
        annualReturn: 7,
      };

      const result = calculate(initialPreAssumption);

      expect(result.length).toEqual(5);
    });
  });
  describe("Last result year must equal to (retirementAge - 1)", () => {
    it("must return last result year=59, if retirementAge=60", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 200000,
        monthlySave: 10000,
        annualReturn: 7,
      };

      const result = calculate(initialPreAssumption);
      const lastResult = result[result.length - 1];

      expect(lastResult.year).toEqual(59);
    });
  });
  describe("with single monthlySave value for every years", () => {
    it("must return last total value=9669", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 1000,
        monthlySave: 100,
        annualReturn: 10,
        monthlySaveList: [],
      };

      const result = calculate(initialPreAssumption);
      const lastResult = result[result.length - 1];

      expect(lastResult.stock).toEqual(9669);
    });
  });
  describe("with monthlySaveList", () => {
    it("must return last total value=11128", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 1000,
        monthlySave: 100,
        annualReturn: 10,
        monthlySaveList: [100, 110, 120, 130, 140],
      };

      const result = calculate(initialPreAssumption);
      const lastResult = result[result.length - 1];

      expect(lastResult.stock).toEqual(11128);
    });
  });
  describe("with monthlySaveList increase 10% each year", () => {
    it("must return last total value=11274", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 1000,
        monthlySave: 100,
        annualReturn: 10,
        monthlySaveList: [100, 110, 121, 133.1, 146.41],
      };

      const result = calculate(initialPreAssumption);
      const lastResult = result[result.length - 1];

      expect(lastResult.stock).toEqual(11274);
    });
  });
  describe("goalWithInflation", () => {
    it("must return goalWithInflation=11000", () => {
      const initialPreAssumption: PreAssumptionInterface = {
        inflationRate: 3,
        startingAge: 55,
        retirementAge: 60,
        principalAmount: 1000,
        monthlySave: 100,
        annualReturn: 10,
        monthlySaveList: [100, 110, 121, 133.1, 146.41],
        goal: 9488.6,
      };

      const result = calculate(initialPreAssumption);
      const lastResult = result[result.length - 1];

      expect(lastResult.goalWithInflation).toEqual(11000);
    });
  });
});
