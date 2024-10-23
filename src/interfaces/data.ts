export interface PreAssumptionInterface {
  inflationRate: number;
  startingAge: number;
  retirementAge: number;
  principalAmount: number;
  monthlySave: number;
  annualReturn: number;
  goal?: number;
  monthlySaveList?: number[];
}
