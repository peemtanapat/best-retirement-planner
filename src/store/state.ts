import { State } from "@/interfaces/data";

export const INITIAL_STATE: State = {
  isLoading: false,
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
      seq: 1,
      name: "stock",
      startingAge: 50,
      endingAge: 60,
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
      seq: 2,
      name: "cash",
      startingAge: 50,
      endingAge: 60,
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
      seq: 3,
      name: "land",
      startingAge: 55,
      endingAge: 60,
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
