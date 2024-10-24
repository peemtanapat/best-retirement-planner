import { Fragment } from "react";
import { InputSectionInterface } from "./AllInputs";
import NumberInput from "./NumberInput";

export default function PreRetirementInputs(props: InputSectionInterface) {
  return (
    <Fragment>
      <NumberInput
        inputKey="principalAmount"
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
