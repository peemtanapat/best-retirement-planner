import { PreAssumptionInterface } from "@/interfaces/data";

export function calculate({
  startingAge,
  retirementAge,
  principalAmount,
  monthlySave,
  annualReturn,
  monthlySaveList,
  inflationRate,
  goal = 0,
}: PreAssumptionInterface) {
  const data = [];
  const years = retirementAge - startingAge;
  let netValueStock = principalAmount;
  let netValueSaving = principalAmount;
  const inflation = 1 + inflationRate / 100;
  let goalWithInflation = goal / Math.pow(inflation, years);
  let netGoalWithInflation = goal;

  for (let index = 0; index < years; index++) {
    const currAge = startingAge + index;
    const year = currAge < 9 ? "0" + currAge : currAge;

    let yearlySaving: number = monthlySave * 12;

    if (monthlySaveList != null && monthlySaveList.length >= 1) {
      yearlySaving = monthlySaveList[index] * 12;
    }

    const rawStock = netValueStock + yearlySaving;
    const rawSaving = netValueSaving + yearlySaving;

    const currStock = rawStock * (1 + annualReturn / 100);
    const currSaving = rawSaving * 1.02;
    const currGoalWithInflation = goalWithInflation * inflation;
    const currNetGoalWithInflation = netGoalWithInflation * inflation;

    netValueStock = currStock;
    netValueSaving = currSaving;
    goalWithInflation = currGoalWithInflation;
    netGoalWithInflation = currNetGoalWithInflation;

    data.push({
      year,
      stock: Math.round(currStock),
      saving: Math.round(currSaving),
      cashWithInflation: Math.round(goalWithInflation),
      goalWithInflation: Math.round(netGoalWithInflation),
    });
  }

  return data;
}
