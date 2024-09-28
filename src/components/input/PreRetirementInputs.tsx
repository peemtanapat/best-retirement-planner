import { Fragment } from "react";
import { InputSectionInterface } from "./AllInputs";
import NumberInput from "./NumberInput";

export default function PreRetirementInputs(props: InputSectionInterface) {
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
        inputKey="principleAmount"
        label="Principal Amount"
        value={props.preAssumption?.principalAmount}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="monthlySave"
        label="Monthly Save"
        value={props.preAssumption?.monthlySave}
        onChange={props.onChange}
      />
      <NumberInput
        inputKey="annualReturn"
        label="Annual Return"
        value={props.preAssumption?.annualReturn}
        onChange={props.onChange}
      />
    </Fragment>
  );
}
