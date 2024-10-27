import { State } from "@/interfaces/data";

export function calculate({ personalData, portfolios }: State) {
  const data = [];
  const { startingAge, retirementAge } = personalData;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const portTracker: any = {};

  for (const port of portfolios) {
    portTracker[port.name] = port.principalAmount;
  }

  for (let year = startingAge; year < retirementAge; year++) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const portYear: any = {
      year,
    };

    for (const port of portfolios) {
      if (year >= (port.startingAge ?? startingAge)) {
        const currValue = portTracker[port.name];
        const annualReturn = 1 + port.annualReturn / 100;
        const newValue = Math.round(
          (currValue + port.monthlySave * 12) * annualReturn
        );
        portYear[port.name] = newValue;
        portTracker[port.name] = newValue;
      }
    }

    data.push(portYear);
  }

  return data;
}

interface calcFutureValueInterface {
  principalAmount: number;
  compoundPercent: number;
  years: number;
}

export function calcFutureValue({
  principalAmount,
  compoundPercent,
  years,
}: calcFutureValueInterface) {
  const compound = 1 + compoundPercent / 100;

  return principalAmount * Math.pow(compound, years);
}
