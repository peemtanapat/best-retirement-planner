import { Fragment } from "react";
import { InputSectionInterface } from "./AllInputs";
import NumberInput from "./NumberInput";

export default function GlobalInputs(props: InputSectionInterface) {
  return (
    <Fragment>
      <NumberInput
        inputKey="startingAge"
        label="Starting Age"
        value={props.preAssumption?.startingAge}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="retirementAge"
        label="Retirement Age"
        value={props.preAssumption?.retirementAge}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="retirePeriod"
        label="Retirement Period(years)"
        value={props.preAssumption?.retirePeriod ?? 0}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="desiredMonthlyIncome"
        label="Desired Monthly Income"
        value={props.preAssumption?.desiredMonthlyIncome ?? 0}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="inflationRate"
        label="Inflation Rate"
        value={props.preAssumption?.inflationRate}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
