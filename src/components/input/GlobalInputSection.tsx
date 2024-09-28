import { InputSectionInterface } from "./AllInputs";
import NumberInput from "./NumberInput";

export default function GlobalInputs(props: InputSectionInterface) {
  return (
    <NumberInput
      inputKey="inflationRate"
      label="Inflation Rate"
      value={props.preAssumption?.inflationRate}
      onChange={props.onChange}
    />
  );
}
