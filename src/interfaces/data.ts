import mongoose from "mongoose";

export interface StateDocument extends mongoose.Document {
  personalData: IPersonalData;
  portfolios: IPortfolio[];
}

export interface State {
  isLoading?: boolean;
  personalData: IPersonalData;
  portfolios: IPortfolio[];
}

export interface IPersonalData {
  name?: string;
  inflationRate: number;
  startingAge: number;
  retirementAge: number;
  retirePeriod?: number;
  goal?: number;
  desiredMonthlyIncome?: number;
}

export interface IPortfolio {
  seq: number;
  name: string;
  startingAge: number;
  endingAge: number;
  principalAmount: number;
  monthlySave: number;
  annualReturn: number;
  annualReturnList?: number[];
  monthlySaveList?: number[];
  styles?: PortfolioStyles;
}

export interface PortfolioStyles {
  color: string;
}

export interface GlobalData {
  inflationRate: number;
}
