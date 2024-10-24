export interface PreAssumptionInterface {
  inflationRate: number;
  startingAge: number;
  retirementAge: number;
  principalAmount: number;
  monthlySave: number;
  annualReturn: number;
  retirePeriod?: number;
  goal?: number;
  desiredMonthlyIncome?: number;
  annualReturnList?: number[];
  monthlySaveList?: number[];
}
