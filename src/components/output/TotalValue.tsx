import { PreAssumptionInterface } from "@/interfaces/data";
import Graph from "./Graph";

const COMPOUND_FREQ_PER_YEAR = 1; //3
const DEPOSIT_FREQ_PER_YEAR = 12; //6

interface TotalValueProps {
  input: PreAssumptionInterface;
}

function format(input: number) {
  return input.toLocaleString();
  // return parseInt(deFormat(input)).toLocaleString();
}

function deFormat(input: string) {
  return input.replaceAll(",", "");
}

export default function TotalValue(props: TotalValueProps) {
  const {
    principalAmount, //1
    annualReturn, //2
    startingAge, //4
    retirementAge, //4
    monthlySave, //5
  } = props.input;

  function calculate() {
    const yearOfGrowth = retirementAge - startingAge; //4
    const depositTimes = yearOfGrowth * DEPOSIT_FREQ_PER_YEAR; //7
    const rate =
      ((1 + annualReturn / COMPOUND_FREQ_PER_YEAR) ^
        (COMPOUND_FREQ_PER_YEAR / DEPOSIT_FREQ_PER_YEAR)) -
      1; //8
    const futureValue =
      ((principalAmount + monthlySave) * ((1 + rate) * depositTimes - 1)) /
      rate;

    return format(futureValue);
  }

  return (
    <div>
      <p>Future Value={calculate()}</p>
    </div>
  );
}
