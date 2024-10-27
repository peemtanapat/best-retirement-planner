import { State } from "@/interfaces/data";

export const INITIAL_STATE: State = {
  personalData: {
    name: "peemtanapat",
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
