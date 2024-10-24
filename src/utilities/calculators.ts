import { PreAssumptionInterface } from "@/interfaces/data";

export function calculate({
  retirePeriod,
  startingAge,
  retirementAge,
  principalAmount,
  monthlySave,
  annualReturn,
  annualReturnList,
  monthlySaveList,
  inflationRate,
  desiredMonthlyIncome = 20000,
}: PreAssumptionInterface) {
  const data = [];
  const years = retirementAge - startingAge;
  let netValueStock = principalAmount;
  let netValueSaving = principalAmount;
  const inflation = 1 + inflationRate / 100;
  let netGoalWithInflation =
    desiredMonthlyIncome *
    12 *
    (retirePeriod ?? 0) *
    Math.pow(inflation, years);

  for (let index = 0; index < years; index++) {
    const currAge = startingAge + index;
    const year = currAge < 9 ? "0" + currAge : currAge;

    let yearlySaving: number = monthlySave * 12;
    let currAnnualReturn: number = annualReturn;

    if (monthlySaveList != null && monthlySaveList.length >= 1) {
      yearlySaving = monthlySaveList[index] * 12;
    }
    if (annualReturnList != null && annualReturnList.length >= 1) {
      currAnnualReturn = annualReturnList[index];
    }

    const rawStock = netValueStock + yearlySaving;
    const rawSaving = netValueSaving + yearlySaving;

    const currStock = rawStock * (1 + currAnnualReturn / 100);
    const currSaving = rawSaving * 1.02;
    const currNetGoalWithInflation = netGoalWithInflation;

    netValueStock = currStock;
    netValueSaving = currSaving;
    netGoalWithInflation = currNetGoalWithInflation;

    data.push({
      year,
      stock: Math.round(currStock),
      saving: Math.round(currSaving),
      goal: Math.round(netGoalWithInflation),
    });
  }

  return data;
}
